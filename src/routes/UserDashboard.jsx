import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import AdvisorList from "../components/userDashboard/AdvisorList";
import Homepage from "./Homepage";

function UserDashboard() {
	const currentUser = JSON.parse(localStorage.getItem("userData")) || null;

	// Check if the user is logged in before accessing currentUser.id
	const userId = currentUser ? currentUser.id : null;
	return (
		<>
			<TopBar />
			<Homepage />
			<div className="flex flex-col p-4">{userId ? <AdvisorList /> : <></>}</div>
		</>
	);
}

export default UserDashboard;
