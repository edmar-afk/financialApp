import { useEffect, useState } from "react";import { Link, useParams } from "react-router-dom";import api from "../assets/api";import Header from "../components/quizDetail/Header";
import Question from "../components/quizDetail/Question";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import BackHandIcon from "@mui/icons-material/BackHand";
import Swal from "sweetalert2";
import UserAnswers from "../components/quiz/UserAnswers";

function QuizDetail() {
	const { quizId } = useParams();
	const [quizData, setQuizData] = useState({});
	const [isTaken, setIsTaken] = useState(false);
	const [score, setScore] = useState(null);
	const [answer, setAnswer] = useState("");
	const [placeholder, setPlaceholder] = useState("");
	const [userList, setUserList] = useState([]); // Store list of users
	const userData = JSON.parse(localStorage.getItem("userData")) || {};

	// Fetch quiz data and user list if superuser
	const fetchQuizData = async () => {
		try {
			const response = await api.get(`/api/quiz/${quizId}/`);
			setQuizData(response.data);

			// If not superuser, check quiz status for the current user
			if (!userData.is_superuser) {
				const checkResponse = await api.get(`/api/check-quiz-status/${quizId}/`);
				console.log("Check Response:", checkResponse.data);

				if (checkResponse.data.status === "already_taken") {
					setIsTaken(true);
					setScore(checkResponse.data.score);
					setAnswer(checkResponse.data.answer || "");
					setPlaceholder(checkResponse.data.answer || "");
				} else {
					setIsTaken(false);
					setScore(null);
					setPlaceholder("Answer wisely, there's no turning back after submitting");
				}
			} else {
				// If superuser, fetch the list of users who took the quiz
				const userListResponse = await api.get(`/api/quizzes/${quizId}/users/`);
				console.log("User List Response:", userListResponse.data);
				setUserList(userListResponse.data);
			}
		} catch (err) {
			console.log("Error fetching quiz data:", err.message);
		}
	};

	useEffect(() => {
		if (quizId) {
			fetchQuizData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quizId]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await api.post(`/api/submit-answer/${quizId}/`, {
				answer: answer,
				status: "already_taken",
				score: 0,
				comment: "",
			});

			Swal.fire({
				title: "Success!",
				text: "Your answer has been submitted successfully.",
				icon: "success",
				confirmButtonText: "OK",
			}).then(() => {
				// Refresh the quiz data after user clicks 'OK'
				fetchQuizData();
			});
		} catch (err) {
			console.error("Error submitting quiz:", err.response ? err.response.data : err.message);
		}
	};

	return (
		<div>
			<Header provider={quizData?.provider?.first_name || "Unknown"} />
			<Question
				question={quizData.question}
				score={score}
			/>

			{/* Conditionally render content based on superuser status */}
			{userData.is_superuser ? (
				<div className="mt-8 p-4">
					<h2 className="text-xl font-bold">Users who took your quiz:</h2>
					<ul className="list-none pl-0">
						{userList.map((lists) => (
							<li key={lists.id}>
								<UserAnswers
									name={lists.user.first_name}
									answer={lists.answer}
									img={lists.user.profile_pic.profile_pic}
									userQuizId={lists.id}
									score={lists.score}
									comment={lists.comment}
								/>
							</li>
						))}
					</ul>
				</div>
			) : (
				<form
					className="mb-5 p-4"
					onSubmit={handleSubmit}>
					<label
						htmlFor="question"
						className="block mb-2 text-sm font-medium text-gray-900">
						Your Answer
					</label>
					<textarea
						id="answer"
						rows="4"
						className="block p-2.5 w-full text-sm text-purple-900 bg-purple-50 rounded-lg border border-gray-300 placeholder-purple-400"
						placeholder={placeholder}
						value={answer}
						onChange={(e) => setAnswer(e.target.value)}
						disabled={isTaken}
					/>
					<div className="flex flex-row justify-evenly py-8">
						<button
							type="submit"
							className={`text-white flex mx-4 items-center justify-center ${
								isTaken ? "bg-gray-400 cursor-not-allowed" : "bg-purple-700 hover:bg-purple-800"
							} focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
							disabled={isTaken}>
							<ArrowUpwardIcon /> {isTaken ? "Already taken this quiz" : "Submit"}
						</button>
						<Link
							to={"/quiz-list"}
							className="text-white mx-4 flex items-center justify-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
							<BackHandIcon className="mr-1" /> Withdraw
						</Link>
					</div>
				</form>
			)}
		</div>
	);
}

export default QuizDetail;
