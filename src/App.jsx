import { useEffect } from "react";
import NoInterConnection from "./components/NoInternetConnection";
import Login from "./routes/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./routes/Register";
import NotFound from "./components/NotFound"
import Homepage from "./routes/Homepage";
import UserDashboard from "./routes/UserDashboard";
import Profile from "./routes/Profile";
import Chats from "./routes/Chats";
import Quizzes from "./routes/Quizzes";
import ChatBot from "./routes/ChatBot";
import Conversation from './routes/Conversation'
import QuizList from "./routes/QuizList";
import QuizDetail from "./routes/QuizDetail";

function Logout() {
	localStorage.clear();
	return <Navigate to="/" />;
}

const disableZoom = () => {
	// Disable zoom on mouse wheel
	window.addEventListener(
		"wheel",
		(e) => {
			if (e.ctrlKey) {
				e.preventDefault();
			}
		},
		{ passive: false }
	);

	// Disable zoom on keydown (Ctrl + '+' or '-' or '0')
	window.addEventListener("keydown", (e) => {
		if (
			(e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "0")) ||
			(e.key === "Meta" && (e.key === "+" || e.key === "-" || e.key === "0"))
		) {
			e.preventDefault();
		}
	});
};

function App() {
	useEffect(() => {
		disableZoom();

		return () => {
			// Cleanup event listeners on unmount
			window.removeEventListener("wheel", disableZoom);
			window.removeEventListener("keydown", disableZoom);
		};
	}, []);

	return (
		<>
			<NoInterConnection>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Homepage />}
						/>
						<Route
							path="/register"
							element={<Register />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/user-dashboard"
							element={<UserDashboard />}
						/>
						<Route
							path="/chats"
							element={<Chats />}
						/>
						<Route
							path="/room/advisor/:id"
							element={<Conversation />}
						/>
						<Route
							path="/chatbot"
							element={<ChatBot />}
						/>
						<Route
							path="/quizzes"
							element={<Quizzes />}
						/>
						<Route
							path="/quiz-list"
							element={<QuizList />}
						/>
						<Route
							path="/quiz-detail/:quizId"
							element={<QuizDetail />}
						/>
						<Route
							path="/profile"
							element={<Profile />}
						/>
						<Route
							path="*"
							element={<NotFound />}
						/>
						<Route
							path="/logout"
							element={<Logout />}
						/>
					</Routes>
				</BrowserRouter>
			</NoInterConnection>
		</>
	);
}

export default App;
