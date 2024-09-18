/* eslint-disable react/no-unescaped-entities *//* eslint-disable react/prop-types */import { useState } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import api from "../../assets/api";
import Swal from "sweetalert2";

function AnswerQuizForm({ closeModal, userQuizId }) {
	const [score, setScore] = useState("");
	const [comment, setComment] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const updateData = {
			score: score,
			comment: comment,
		};

		try {
			const response = await api.patch(`/api/userquiz/${userQuizId}/update/`, updateData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});

			if (response.status === 200) {
				// Show success alert
				Swal.fire({
					title: "Success!",
					text: "Quiz updated successfully!",
					icon: "success",
					confirmButtonText: "OK",
				});

				// Close the modal
				closeModal();

				// Clear form fields
				setScore("");
				setComment("");
			} else {
				setErrorMessage("Failed to update quiz");
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
				<div className="mb-12">
					<label
						htmlFor="score"
						className="block mb-2 text-sm font-medium text-gray-900">
						Score
					</label>
					<input
						type="number"
						id="score"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
						placeholder="Enter score"
						value={score}
						onChange={(e) => setScore(e.target.value)}
						min="1"
						max="100"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="comment"
						className="block mb-2 text-sm font-medium text-gray-900">
						Say something about the progress.
					</label>
					<textarea
						id="comment"
						rows="4"
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400"
						placeholder="Based on their answer, what can you say about their progress in this session?"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						required
					/>
				</div>

				{errorMessage && <div className="text-red-500 text-sm mb-5">{errorMessage}</div>}

				<button
					type="submit"
					className="text-white flex items-center justify-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					<PostAddIcon /> Submit Update
				</button>
			</form>
			<p className="text-xs text-orange-600 text-center font-extralight">
				Be vigilant with what you input. Once submitted, there's no Ctrl+Z for undoing it.
			</p>
		</>
	);
}

export default AnswerQuizForm;
