import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../assets/api";
import Swal from "sweetalert2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
function Register() {
	const [firstName, setFirstName] = useState("");
	const [mobileNum, setMobileNum] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState("");
	const [canSubmit, setCanSubmit] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// Function to check if passwords match
	const checkPasswordsMatch = () => {
		if (password && password2 && password !== password2) {
			setError("Passwords do not match");
		} else {
			setError((prevError) => (prevError === "Passwords do not match" ? "" : prevError));
		}
	};

	// Function to validate mobile number
	const validateMobileNum = (value) => {
		const regex = /^09\d{9}$/;
		if (!regex.test(value)) {
			setError("Please enter an 11-digit number starting with '09'.");
		} else {
			setError((prevError) => (prevError !== "Please enter an 11-digit number starting with '09'." ? prevError : ""));
		}
	};

	const handleMobileNumChange = (e) => {
		const value = e.target.value;
		setMobileNum(value);
		validateMobileNum(value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handlePassword2Change = (e) => {
		setPassword2(e.target.value);
	};

	useEffect(() => {
		checkPasswordsMatch();

		// Check if all required fields are filled
		if (firstName && mobileNum && password && password2 && !error) {
			setCanSubmit(true);
		} else {
			setCanSubmit(false);
		}
	}, [firstName, mobileNum, password, password2, error]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		// Show SweetAlert2 loading spinner

		try {
			const res = await api.post("/api/register/", {
				first_name: firstName,
				username: mobileNum,
				mobile_num: mobileNum,
				password: password,
				password2: password2,
			});

			if (res.status === 201) {
				// Close the SweetAlert2 loading spinner

				// Navigate to login page with state
				navigate("/login", { state: { successMessage: "You have been registered successfully." } });
			} else {
				Swal.fire({
					title: "Error!",
					text: "Registration failed.",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		} catch (error) {
			let errorMessage = "Registration failed";

			if (error.response) {
				// If the error response contains specific error messages, display them
				if (error.response.data && typeof error.response.data === "object") {
					errorMessage = Object.values(error.response.data).join(" ");
				} else if (error.response.data && error.response.data.detail) {
					errorMessage = error.response.data.detail;
				}
			}

			Swal.fire({
				title: "Error!",
				text: errorMessage,
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
			<div className="font-[sans-serif]">
				<div className="bg-white h-screen">
					<div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max max-lg:mx-auto">
						<form onSubmit={handleSubmit}>
							<div className="mb-8 pt-24">
								<div className="flex flex-col items-center justify-center pt-12 mb-2">
									<img
										src=''
										className="w-40"
										alt=""
									/>
									<p className="text-gray-800 font-bold text-4xl">Register</p>
								</div>
							</div>

							<div>
								<div className="relative flex items-center">
									<input
										type="text"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										required
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
										placeholder="Full Name"
									/>
								</div>
							</div>

							<div className="mt-2">
								<div className="relative flex flex-col items-center">
									<input
										type="text"
										value={mobileNum}
										onChange={handleMobileNumChange}
										required
										className={`w-full text-sm text-gray-800 border px-4 py-3 rounded-md outline-blue-600 ${
											error.includes("Please enter an 11-digit number starting with '09'.")
												? "border-red-500"
												: "border-gray-300"
										}`}
										placeholder="Mobile Number"
										maxLength="11"
									/>
									{error && error.includes("Please enter an 11-digit number starting with '09'.") && (
										<p className="text-red-500 text-sm mt-2">{error}</p>
									)}
								</div>
							</div>

							<div className="mt-2">
								<div className="relative flex items-center">
									<input
										type="password"
										value={password}
										onChange={handlePasswordChange}
										required
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
										placeholder="Password"
									/>
								</div>
							</div>

							<div className="mt-2">
								<div className="relative flex items-center">
									<input
										type="password"
										value={password2}
										onChange={handlePassword2Change}
										required
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
										placeholder="Confirm Password"
									/>
								</div>
							</div>

							{error && !error.includes("Please enter an 11-digit number starting with '09'.") && (
								<p className="text-red-500 mt-2 text-xs">{error}</p>
							)}

							<div className="flex flex-col items-center justify-between mt-4">
								<button
									type="submit"
									disabled={!canSubmit || loading}
									className={`px-6 py-2 w-full mb-4 text-white font-semibold rounded-md transition-colors ${
										canSubmit ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 cursor-not-allowed"
									}`}>
									{loading ? (
										<>
											<HourglassBottomIcon className="animate-spin h-5 w-5 mr-3 text-white" />
											Validating...
										</>
									) : (
										"Register"
									)}
								</button>
								<p>
									Already have an account?
									<Link
										to="/login"
										className="text-blue-500 hover:underline ml-2">
										Login here
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
