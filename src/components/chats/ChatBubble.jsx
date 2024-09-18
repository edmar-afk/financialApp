import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */ function ChatBubble({ first_name, content, time_sent, id, img }) {
	return (
		<Link
			to={`/room/advisor/${id}`}
			className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
			<div className="flex items-center">
				<img
					className="rounded-full items-start flex-shrink-0 mr-3"
					src={img}
					width="32"
					height="32"
					alt={first_name}
				/>
				<div>
					<h4 className="text-sm font-semibold text-gray-900">{first_name}</h4>
					<div className="text-[13px]">
						{content} · {time_sent}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ChatBubble;
