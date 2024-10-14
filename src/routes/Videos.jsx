import TopBar from "../components/TopBar";
import Videos from "../components/userDashboard/Videos";
function VideosPage() {
	return (
		<>
			<TopBar />
			<div className="p-4">
				<Videos />
			</div>
		</>
	);
}

export default VideosPage;
