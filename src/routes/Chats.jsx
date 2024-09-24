/* eslint-disable no-unused-vars */import ChatList from "../components/chats/ChatList";
import TopBar from "../components/TopBar";

function Chats() {
	return (
		<>
			<TopBar />
			<div className="flex flex-col p-4">
				<ChatList />
			</div>
		</>
	);
}

export default Chats;
