/* eslint-disable react/prop-types */ import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import AnswerModal from "./AnswerModal";
import CommentModal from "./CommentModal";

function UserAnswers({ name, answer, img, userQuizId, score, comment }) {
	return (
		<>
			<div className="bg-white flex items-center justify-between">
				<div className="flex flex-row items-center w-full">
					<img
						className="object-cover w-12 h-12 rounded-full"
						src={img}
						alt=""
					/>
					<div className="flex flex-col justify-evenly p-4 leading-normal w-64">
						{/* Add a fixed width */}
						<h5 className="text-sm font-bold tracking-tight text-gray-900">{name}</h5>
						<p className="mb-3 font-normal text-xs text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis mr-6">
							Answer: {answer} <br />
							Score: {score !== null && score > 0 ? `${score}/100` : "Not yet rated"}
						</p>
					</div>
				</div>
				<p className="font-bold text-purple-800 underline flex items-center">
					<ThumbsUpDownIcon
						className="mr-2"
						fontSize="small"
					/>
					{/* Conditionally render based on score */}
					{score !== null && score > 0 ? (
						<CommentModal
							userQuizId={userQuizId}
							name={name}
							answer={answer}
							score={score}
							comment={comment}
						/>
					) : (
						<AnswerModal
							userQuizId={userQuizId}
							name={name}
							answer={answer}
						/>
					)}
				</p>
			</div>
		</>
	);
}

export default UserAnswers;
