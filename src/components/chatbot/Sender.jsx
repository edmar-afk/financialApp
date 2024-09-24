/* eslint-disable react/prop-types */ function Sender({ profile, message }) {
	return (
		<>
			<div className="flex gap-2.5 justify-end">
				<div className="">
					<div className="grid mb-2">
						<div className="px-3 py-2 bg-purple-600 rounded-xl w-full max-w-[250px] break-words">
							<h2 className="text-white text-sm font-normal leading-snug">{message}</h2>
						</div>
						<div className="justify-start items-center inline-flex">
							<h3 className="text-gray-500 text-xs font-normal leading-4 py-1">You</h3>
						</div>
					</div>
				</div>
				<img
					src={profile}
					alt="Hailey image"
					className="w-10 h-11 rounded-full"
				/>
			</div>
		</>
	);
}

export default Sender;
