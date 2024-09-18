import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddQuizModal from "./AddQuizModal";

function Header() {
	const userData = JSON.parse(localStorage.getItem("userData"));

	const isSuperuser = userData?.is_superuser; // Extract superuser property

	return (
		<>
			<Link to={'/user-dashboard'} className="bg-white p-4 pt-8 flex flex-row justify-between">
				<ArrowBackIcon
					className="cursor-pointer" // Add pointer cursor for better UX
				/>
				<p>Quiz Time!</p>
			</Link>
			<div className="p-4">
				Hello, {userData.first_name}. In this section, you will test your financial strategy to help improve it.
			</div>
			{isSuperuser && ( // Conditionally render based on superuser status
				<div className="flex justify-end my-8 mr-8">
					<div className="bg-purple-700 text-white py-2 px-5 rounded-lg shadow-xl flex items-center">
						<PostAddIcon className="mr-1" /> <AddQuizModal />
					</div>
				</div>
			)}
		</>
	);
}

export default Header;
