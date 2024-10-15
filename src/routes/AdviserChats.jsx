import ChatList from "../components/chats/ChatList";
import TopBar from "../components/TopBar";import AdvisorList from "../components/userDashboard/AdvisorList";

function AdviserChats() {
	return (
		<>
			<TopBar />

			<div className="flex flex-col p-4">
				<AdvisorList />
            </div>
            
            <div><ChatList/></div>
		</>
	);
}

export default AdviserChats;
