import { useEffect, useState, useRef } from "react";import { useNavigate, useParams } from "react-router-dom";
import api from "../../assets/api";
import advisorLogo from "../../assets/img/advisorImg.png";
import Sender from "./Sender";
import Receiver from "./Receiver";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

function Room() {
	const navigate = useNavigate();
	const { id } = useParams(); // Get the 'id' from the URL (receiver's id)
	const [userData, setUserData] = useState(null); // State to store user data
	const [messages, setMessages] = useState([]); // State to store messages
	const [message, setMessage] = useState(""); // State to store the message input

	const messagesEndRef = useRef(null); // Ref for the end of the messages container
	const senderData = JSON.parse(localStorage.getItem("userData")) || {}; // Retrieve sender data from local storage

	useEffect(() => {
		// Function to fetch user data and chat messages
		const fetchData = () => {
			api
				.get(`/api/user/${id}/`)
				.then((response) => {
					setUserData(response.data);
				})
				.catch((error) => {
					console.error("Error fetching user data:", error);
				});

			api
				.get(`/api/chat_rooms/${id}/${senderData.id}/`)
				.then((response) => {
					console.log(response.data); // Log the full response
					setMessages(response.data[0]?.messages || []); // Adjust based on response structure
				})
				.catch((error) => {
					console.error("Error fetching chat room:", error);
					setMessages([]); // Default to an empty array on error
				});
		};

		// Fetch data immediately on component mount
		fetchData();

		// Set up the interval to fetch data every 5 seconds
		const intervalId = setInterval(fetchData, 5000);

		// Clean up the interval on component unmount
		return () => clearInterval(intervalId);
	}, [id, senderData.id]);

	// Scroll to the bottom when messages change
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent default form submission behavior

		if (message.trim() === "") {
			alert("Please enter a message");
			return;
		}

		// Create or get the chat room and send the message
		api
			.post(`/api/create-chat/${id}/`, { content: message })
			.then((response) => {
				console.log("Message sent:", response.data);
				setMessages([...messages, response.data.message]); // Update state with the new message
				setMessage(""); // Clear the input field
			})
			.catch((error) => {
				if (error.response) {
					console.error("Error sending message:", error.response.data);
					alert(`Error: ${JSON.stringify(error.response.data)}`);
				} else if (error.request) {
					console.error("Error sending message:", error.request);
				} else {
					console.error("Error sending message:", error.message);
				}
			});
	};

	return (
		<>
			<div className="fixed top-0 bg-white z-50 border-b-2 w-full">
				<div className="p-4 flex flex-row justify-between items-center">
					<div className="flex items-center">
						<img
							src={userData?.profile_pic?.image || advisorLogo}
							alt="Profile"
							className="w-12 h-12 rounded-full"
						/>
						<p className="font-bold ml-1">{userData?.first_name || "Anonymous"}</p>
					</div>
					<div onClick={() => navigate(-1)}>
						<ReplyAllIcon className="text-purple-400" />
					</div>
				</div>
			</div>

			{/* Chat messages container */}
			<div className="mx-4 my-24 h-screen overflow-y-auto overflow-x-hidden relative flex flex-col justify-end">
				{messages.map((msg) =>
					msg.sender === senderData.id ? (
						<Sender
							key={msg.id}
							message={msg}
						/>
					) : (
						<Receiver
							key={msg.id}
							message={msg}
						/>
					)
				)}
				{/* This empty div acts as a marker to scroll to */}
				<div ref={messagesEndRef} />
			</div>

			{/* Input section fixed at the bottom */}
			<form
				className="fixed bottom-0 flex flex-row items-center h-16 bg-white w-full px-4 border-t-2"
				onSubmit={handleSubmit}>
				<div className="flex-grow">
					<div className="relative w-full">
						<input
							type="text"
							className="flex w-full border-2 rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
							placeholder="Ask Question"
							value={message} // Bind the input value to the message state
							onChange={(e) => setMessage(e.target.value)} // Update the message state on change
						/>
					</div>
				</div>
				<div className="ml-2">
					<button
						type="submit"
						className="flex items-center py-3 justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 flex-shrink-0">
						<span className="">
							<svg
								className="w-4 h-4 transform rotate-45 -mt-px"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
							</svg>
						</span>
					</button>
				</div>
			</form>
		</>
	);
}

export default Room;
