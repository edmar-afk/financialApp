import UserProfile from "../components/profile/UserProfile";import TopBar from "../components/TopBar";

function Profile() {
	return (
		<>
			<TopBar />
			<div className="flex flex-col p-4">
				<UserProfile />
			</div>
		</>
	);
}

export default Profile;
