import Body from "../components/chatbot/Body";import Header from "../components/chatbot/Header";
import BotPress from "./BotPress";
function ChatBot() {
	return (
		<>
			<div className="relative overflow-x-hidden">
				{/* <Header />
				<div className="mt-16">
					
					<Body />
					
				</div> */}
				<BotPress/>
			</div>
		</>
	);
}

export default ChatBot;
