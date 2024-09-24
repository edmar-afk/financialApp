import { useState, useEffect, useRef } from "react";import api from "../../assets/api";
import Receiver from "./Receiver";
import Sender from "./Sender";

function Body() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {};
	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const messagesEndRef = useRef(null);

	const handleSubmit = async () => {
		if (!inputValue.trim()) return;

		// Add the user's message to the message list
		const newMessage = { text: inputValue }; // No sender property
		setMessages((prevMessages) => [...prevMessages, newMessage]);

		try {
			// Simulate a delay before sending the message
			setTimeout(async () => {
				// Send the message to the chatbot API
				const response = await api.post("/api/chatbot/", { question: inputValue });
				const chatbotResponse = response.data.answer;

				// Add the chatbot's response to the message list
				setMessages((prevMessages) => [
					...prevMessages,
					{ text: chatbotResponse }, // Add the bot's response
				]);
			}, 1000); // 1 second delay
		} catch (error) {
			console.error("Error fetching chatbot response:", error);
		}

		// Clear the input field
		setInputValue("");
	};

	// Scroll to the bottom whenever messages change
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<div className="w-full h-screen flex flex-col justify-between">
			<div className="flex flex-col space-y-4 p-3 mb-44 mt-24">
				{/* Display user messages */}
				{Array.isArray(messages) &&
					messages.length > 0 &&
					messages.map((msg, index) => {
						const isUserMessage = index % 2 === 0; // Example logic
						return isUserMessage ? (
							<Sender
								key={index}
								message={msg.text}
							/>
						) : (
							<Receiver
								key={index}
								message={msg.text}
							/>
						);
					})}

				<div ref={messagesEndRef} />
			</div>

			{/* Input area */}
			<div className="fixed bottom-0 h-16 bg-white w-full"></div>
			<div className="fixed flex flex-row bottom-4 bg-white w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center justify-between">
				<div className="flex items-center w-full">
					<img
						src={userData.profile_pic.profile_pic}
						alt=""
						className="w-8 rounded-full"
					/>
					<input
						className="text-black ml-1 text-xs font-medium py-2 leading-4 focus:outline-none w-full"
						placeholder="Type here..."
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === "Enter") handleSubmit();
						}}
					/>
				</div>
				<div className="flex items-center">
					<button
						className="items-center flex px-3 py-2 bg-purple-600 rounded-full shadow text-white text-xs"
						onClick={handleSubmit}>
						Send
					</button>
				</div>
			</div>
		</div>
	);
}

export default Body;
