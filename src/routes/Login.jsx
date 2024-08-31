/* eslint-disable react/no-unescaped-entities */import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import api from "../assets/api";
import Loader from "../components/Loader";

const Login = () => {
	const [username, setUsername] = useState(""); // Initialize with an empty string
	const [password, setPassword] = useState(""); // Initialize with an empty string
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.successMessage) {
			setError(location.state.successMessage);
		}
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const res = await api.post("/api/token/", { username, password });

			if (res.status === 200) {
				localStorage.setItem("ACCESS_TOKEN", res.data.access);
				localStorage.setItem("REFRESH_TOKEN", res.data.refresh);

				const userRes = await api.get("/api/user/", {
					headers: {
						Authorization: `Bearer ${res.data.access}`,
					},
				});

				localStorage.setItem("userData", JSON.stringify(userRes.data));
				navigate("/user-dashboard");
			} else {
				setError("Login failed.");
			}
		} catch (error) {
			setError("Invalid Username or Password");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="relative mx-auto w-full max-w-md bg-white h-screen px-6 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
			<Link
				to="/"
				className="p-2 flex items-center fixed top-4">
				<ArrowBackIcon className="text-gray-800 z-50" />
			</Link>
			<div className="w-full pt-44">
				<div className="text-center">
					<h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
					<p className="mt-2 text-gray-500">Sign in below to access your account</p>
				</div>
				<div className="mt-5">
					<form onSubmit={handleSubmit}>
						<div className="relative mt-6">
							<input
								type="number" // Input field type set to 'number'
								name="username"
								id="username"
								placeholder="Your Mobile Number"
								value={username} // Controlled component with value set to state
								onChange={(e) => setUsername(e.target.value)} // Update state on change
								className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
							/>
							<label
								htmlFor="username"
								className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
								Your Mobile Number
							</label>
						</div>
						<div className="relative mt-6">
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
							/>
							<label
								htmlFor="password"
								className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
								Password
							</label>
						</div>
						<div className="my-6">
							<button
								type="submit"
								className="w-full rounded-md bg-purple-600 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">
								{loading ? <Loader /> : "Sign in"}
							</button>
						</div>
						{error && <div className="text-blue-500 text-center mb-4">{error}</div>}
						<p className="text-center text-sm text-gray-500">
							Don't have an account yet?
							<Link
								to="/register"
								className="font-semibold ml-1 text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
								Sign up
							</Link>
							.
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
