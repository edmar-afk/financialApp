import { useState, useEffect } from "react";import Header from "../components/quiz/Header";
import Quizzes from "../components/quiz/Quizzes";
import api from "../assets/api";

function QuizList() {
	const [quizzes, setQuizzes] = useState([]); // State to store quizzes
	const [loading, setLoading] = useState(true); // Optional loading state
	const userData = JSON.parse(localStorage.getItem("userData")) || {};

	useEffect(() => {
		// Check if user is superuser
		if (userData.is_superuser) {
			// Fetch quizzes created by the logged-in superuser
			api
				.get(`/api/quizzes/provider/${userData.id}/`)
				.then((response) => {
					setQuizzes(response.data); // Set the filtered quizzes
					setLoading(false); // Disable loading after fetching
				})
				.catch((error) => {
					console.error("Error fetching provider quizzes:", error);
					setLoading(false); // Disable loading even if there’s an error
				});
		} else {
			// Fetch all quizzes if the user is not a superuser
			api
				.get("/api/quizzes/")
				.then((response) => {
					setQuizzes(response.data); // Set the fetched data to quizzes state
					setLoading(false); // Disable loading after fetching
				})
				.catch((error) => {
					console.error("Error fetching quizzes:", error);
					setLoading(false); // Disable loading even if there’s an error
				});
		}
	}, [userData.is_superuser, userData.id]);

	// Conditional rendering while loading
	if (loading) {
		return <div>Loading quizzes...</div>;
	}

	return (
		<>
			<Header />
			<p className="ml-4 mb-4 font-bold">Your Quiz List</p>
			<div className="flex flex-row justify-evenly flex-wrap">
				{quizzes.map((quiz) => (
					<Quizzes
						key={quiz.id}
						quizId={quiz.id}
						title={quiz.title}
						createdBy={quiz.provider.first_name}
						created_at={quiz.created_at}
					/>
				))}
			</div>
		</>
	);
}

export default QuizList;
