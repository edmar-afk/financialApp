/* eslint-disable react/prop-types */
import { useState } from "react";import PostAddIcon from "@mui/icons-material/PostAdd";
import api from "../../assets/api";
import Swal from "sweetalert2";

function AddQuizForm({ closeModal }) {
	const [quizTitle, setQuizTitle] = useState("");
	const [question, setQuestion] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const quizData = {
			title: quizTitle,
			question: question,
		};

		try {
			const response = await api.post("/api/quizzes/create/", quizData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});

			if (response.status === 201) {
				// Show success alert
				Swal.fire({
					title: "Success!",
					text: "Quiz created successfully!",
					icon: "success",
					confirmButtonText: "OK",
				});

				// Close the modal
				closeModal();

				// Clear form fields
				setQuizTitle("");
				setQuestion("");
			} else {
				setErrorMessage("Failed to create quiz");
			}
		} catch (error) {
			setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
		}
	};

	return (
		<>
			<form
				className="max-w-sm mx-auto mt-12"
				onSubmit={handleSubmit}>
				<div className="mb-5">
					<label
						htmlFor="quizTitle"
						className="block mb-2 text-sm font-medium text-gray-900">
						Quiz Title
					</label>
					<input
						type="text"
						id="quizTitle"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
						placeholder="Enhancing Financial strategy"
						value={quizTitle}
						onChange={(e) => setQuizTitle(e.target.value)}
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="question"
						className="block mb-2 text-sm font-medium text-gray-900">
						Your Oral Question
					</label>
					<textarea
						id="question"
						rows="4"
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400"
						placeholder="Write meaningful Question"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
						required
					/>
				</div>

				{errorMessage && <div className="text-red-500 text-sm mb-5">{errorMessage}</div>}

				<button
					type="submit"
					className="text-white flex items-center justify-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					<PostAddIcon /> Create
				</button>
			</form>
		</>
	);
}

export default AddQuizForm;
