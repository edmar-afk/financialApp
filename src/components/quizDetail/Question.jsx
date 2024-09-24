/* eslint-disable react/prop-types */ import quizBg from "../../assets/img/quizBg.png";
function Question({ question, score, comment }) {
	return (
		<>
			<div className="p-4 mt-8">
				<p className="text-xs font-extralight text-purple-700">Question</p>
				<p className="text-xl font-bold">{question}</p>
			</div>

			{/* Conditional rendering based on score */}

			<div className="relative">
				<img
					src={quizBg}
					alt=""
					className="w-full h-full object-cover"
				/>
				{score !== null && (
					<div className="absolute inset-0 flex items-center justify-center bg-purple-900/80 text-white">
						<div className="text-center">
							<p className="text-5xl font-bold">{score > 0 ? `${score}/100` : "Not yet checked"}</p>

							{/* Conditionally render "Your Score" only if score is greater than 0 */}
							{score > 0 && <p>Your Score </p>}
						</div>
					</div>
				)}
			</div>
			{score > 0 && (
				<div className="bg-purple-50 py-4 mt-2 mx-4 p-4 rounded-2xl font-extralight text-sm">
					<span className="text-xs font-semibold">Your Progress:</span> <br />
					{comment}
				</div>
			)}
		</>
	);
}

export default Question;
