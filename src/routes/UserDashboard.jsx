import TopBar from "../components/TopBar";
import AdvisorList from "../components/userDashboard/AdvisorList";
import Header from "../components/userDashboard/Header";
import Videos from "../components/userDashboard/Videos";
import Homepage from "./Homepage";

function UserDashboard() {
	return (
		<>
			<TopBar />
			<Homepage/>
			<div className="flex flex-col p-4">
				<AdvisorList />
				<Videos />
			</div>
		</>
	);
}

export default UserDashboard;
