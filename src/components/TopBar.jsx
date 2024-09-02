import { NavLink } from "react-router-dom";import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
function TopBar() {
	return (
		<>
			<div className="sticky top-0 pt-8 mb-6 left-0 z-[100] w-full h-24 bg-white border-b-2">
				<div className="grid h-full max-w-lg grid-cols-4 mx-auto">
					<NavLink
						to="/user-dashboard"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-purple-50 ${
								isActive ? "text-purple-500 border-b-4 border-purple-500" : ""
							}`
						}>
						<HomeOutlinedIcon />
					</NavLink>
					<NavLink
						to="/messages"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-purple-50 ${
								isActive ? "text-purple-500 border-b-4 border-purple-500" : ""
							}`
						}>
						<MessageOutlinedIcon />
					</NavLink>
					<NavLink
						to="/quizzes"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-purple-50 ${
								isActive ? "text-purple-500 border-b-4 border-purple-500" : ""
							}`
						}>
						<DescriptionOutlinedIcon />
					</NavLink>
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-purple-50 ${
								isActive ? "text-purple-500 border-b-4 border-purple-500" : ""
							}`
						}>
						<Person2OutlinedIcon />
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default TopBar;
