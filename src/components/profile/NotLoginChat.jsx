import { Link } from "react-router-dom";

function NotLoginChat() {
	return (
		<p className="mt-14 text-center">
			You need to{" "}
			<Link
				to={"/login"}
				className="font-bold text-purple-700">
				Login
			</Link>{" "}
			first to communicate with advisors.
		</p>
	);
}

export default NotLoginChat;
