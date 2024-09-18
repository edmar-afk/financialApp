/* eslint-disable no-unused-vars */
import ChatList from "../components/chats/ChatList";
import TopBar from "../components/TopBar";
import useScript from "../components/hooks/useScript";

function Chats() {
	// useScript("https://cdn.botpress.cloud/webchat/v2.1/inject.js");
	// useScript("https://mediafiles.botpress.cloud/c3f57d1c-8d3c-4566-ac54-fa3a238078f6/webchat/v2.1/config.js");
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
