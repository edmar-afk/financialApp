/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */ import { Link } from "react-router-dom";
function Quizzes({ title, createdBy, created_at, quizId }) {
	const userData = JSON.parse(localStorage.getItem("userData"));
	const isSuperuser = userData?.is_superuser; // Extract superuser property

	const formattedDate = new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "2-digit",
		year: "numeric",
	}).format(new Date(created_at));

	return (
		<div className="flex flex-col w-[160px] mb-8 bg-white shadow-lg rounded-xl shadow-purple-700/70">
			<div className="relative">
				<img
					className="w-[160px] h-[120px] rounded-t-xl"
					src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
					alt="Card Image"
				/>
				<p className="text-xs absolute top-3 left-3 bg-purple-600 text-white py-0.5 px-3 rounded-lg">{formattedDate}</p>
			</div>
			<div className="p-4 md:p-5">
				<h3 className="text-sm font-bold text-gray-800">{title}</h3>
				<p className="mt-6 mb-3 text-gray-500 text-xs">
					Creator: <br /> {createdBy}
				</p>

				{/* Conditionally render based on whether the user is a superuser */}
				{isSuperuser ? (
					<Link
						to={`/quiz-detail/${quizId}`}
						className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg bg-blue-400 text-white cursor-not-allowed">
						View Quiz
					</Link>
				) : (
					<Link
						to={`/quiz-detail/${quizId}`}
						className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
						Take this Quiz
					</Link>
				)}
			</div>
		</div>
	);
}

export default Quizzes;
