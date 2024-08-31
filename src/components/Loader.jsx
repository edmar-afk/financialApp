function Loader() {
	return (
		<>
			<div className="flex justify-center items-center h-fit">
				<div className="flex flex-row gap-2">
					<div className="w-3 h-3 rounded-full bg-white animate-bounce"></div>
					<div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
					<div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
				</div>
			</div>
		</>
	);
}

export default Loader;
