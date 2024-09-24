import ArrowBackIcon from "@mui/icons-material/ArrowBack";import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="fixed top-0 w-full bg-white shadow-md z-10">
			<div className="flex items-center justify-between p-4 pt-8">
				<p className="text-lg font-semibold">Financial Assistance Chatbot</p>
				<Link to={"/chats"}>
					<ArrowBackIcon />
				</Link>
			</div>
		</div>
	);
}

export default Header;
