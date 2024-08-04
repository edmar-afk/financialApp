/* eslint-disable react/no-unescaped-entities */ import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Swal from "sweetalert2";
import api from "../assets/api";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.successMessage) {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: location.state.successMessage,
				showConfirmButton: false,
				timer: 1500,
				customClass: {
					title: "text-lg font-semibold text-xs",
					icon: "p-2 rounded-full w-16 h-14",
					popup: "bg-gray-100 rounded-lg shadow-md max-w-xs max-h-56",
				},
			});
		}
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

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

				navigate("/resident-dashboard");
			} else {
				Swal.fire({
					title: "Error!",
					text: "Login failed.",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		} catch (error) {
			Swal.fire({
				title: "Error!",
				text: error.response?.data?.detail || "Login failed",
				icon: "error",
				confirmButtonText: "OK",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Link
				to="/"
				className="p-3 flex items-center fixed top-14">
				<ArrowBackIcon className="text-gray-800" />
			</Link>
			<div className="h-screen bg-white pt-12">
				<div className="flex flex-col items-center justify-center mb-8 pt-24">
					<img
						src=''
						className="w-40"
						alt=""
					/>
					<motion.p
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", stiffness: 160, damping: 30 }}
						className="text-gray-800 font-bold text-4xl">
						Login
					</motion.p>
				</div>
				<Grid
					container
					component="main"
					className="flex items-center justify-center">
					<Grid
						item
						xs={12}
						sm={8}
						md={5}
						component={Paper}
						elevation={0}
						square
						className="flex flex-col items-center justify-center p-8 bg-transparent">
						<form
							className="w-full mt-1 bg-transparent"
							onSubmit={handleSubmit}
							noValidate>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ type: "spring", stiffness: 160, damping: 30 }}>
								<TextField
									onChange={(e) => setUsername(e.target.value)}
									variant="outlined"
									margin="normal"
									required
									fullWidth
									className="mb-4 bg-transparent"
									name="username"
									label="Your Mobile Number"
									type="number"
									id="email"
									autoComplete="off"
								/>
							</motion.div>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ type: "spring", stiffness: 160, damping: 30 }}>
								<TextField
									onChange={(e) => setPassword(e.target.value)}
									variant="outlined"
									margin="normal"
									required
									fullWidth
									className="mb-4 bg-transparent"
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
								/>
							</motion.div>
							<br />
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ type: "spring", stiffness: 160, damping: 30 }}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className="mt-8 mb-2 flex items-center justify-center"
									disabled={loading}>
									{loading ? (
										<>
											<HourglassBottomIcon className="animate-spin h-5 w-5 mr-3 text-white" />
											Logging in...
										</>
									) : (
										"Login"
									)}
								</Button>
							</motion.div>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ type: "spring", stiffness: 160, damping: 30 }}>
								<Grid
									container
									className="mt-2">
									Don't Have an account?
									<Grid item>
										<Link
											to="/register"
											variant="body2"
											className="ml-0.5 text-blue-400 font-bold">
											Register here
										</Link>
									</Grid>
								</Grid>
							</motion.div>
						</form>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Login;
