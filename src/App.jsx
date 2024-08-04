import { useEffect } from "react";
import NoInterConnection from "./components/NoInternetConnection";
import Login from "./routes/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./routes/Register";
import NotFound from "./components/NotFound"
import Homepage from "./routes/Homepage";

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
