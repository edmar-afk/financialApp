/* eslint-disable react/prop-types */import advisorLogo from "../../assets/img/advisorImg.png";

// Helper function to format the date
const formatDate = (dateString) => {
	const date = new Date(dateString);

	// Options for formatting
	const dateOptions = { month: "short", day: "numeric", year: "numeric" };
	const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

	// Format date and time
	const formattedDate = date.toLocaleDateString("en-US", dateOptions);
	const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

	return `${formattedDate} - ${formattedTime}`;
};

function Reciever({ message }) {
	return (
		<>
			<div className="w-full mb-4 flex flex-col">
				<div className="flex items-center justify-start">
					<img
						src={advisorLogo}
						alt="Advisor"
						className="w-12 h-12 mr-2"
					/>
					<div className="w-max max-w-sm px-4 py-2 rounded-full rounded-bl-none bg-gray-200 text-purple-700">
						{message.content}{message.sender.id}
					</div>
				</div>
				<div className="text-[9px] text-gray-500 ml-12">{formatDate(message.timestamp)}</div>
			</div>
		</>
	);
}

export default Reciever;
