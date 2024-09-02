import NotLogin from "../components/profile/NotLogin";
import UserProfile from "../components/profile/UserProfile";
import TopBar from "../components/TopBar";

function Profile() {
	const userData = JSON.parse(localStorage.getItem("userData"));

	return (
		<>
			<TopBar />
			<div className="flex flex-col p-4">{userData ? <UserProfile /> : <NotLogin />}</div>
		</>
	);
}

export default Profile;
