/* eslint-disable react/no-unescaped-entities */ /* eslint-disable react/prop-types */ function CommentQuizForm({
	comment,
	score,
}) {
	return (
		<>
			<div className="max-w-sm mx-auto mt-4">
				<div className="mb-12">
					<p
						htmlFor="score"
						className="block mb-2 text-sm font-medium text-gray-900">
						Score: {score}/100
					</p>
					<p className="block mt-12 text-sm font-medium text-gray-900">
						Your comment based on his/her progress: <br />
						<span className="font-semibold">{comment}</span>
					</p>
				</div>
			</div>
		</>
	);
}

export default CommentQuizForm;
