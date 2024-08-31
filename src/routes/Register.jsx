import { useState, useEffect } from "react";import { Link, useNavigate } from "react-router-dom";
import api from "../assets/api";
import Swal from "sweetalert2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../components/Loader";
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

		try {
			const res = await api.post("/api/register/", {
				first_name: firstName,
				username: mobileNum,
				mobile_num: mobileNum,
				password: password,
				password2: password2,
			});

			if (res.status === 201) {
				navigate("/login", { state: { successMessage: "You have been registered successfully, proceed to login." } });
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
			<div className="relative mx-auto w-full max-w-md bg-white h-screen px-6 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
				<Link
					to="/"
					className="p-2 flex items-center fixed top-4">
					<ArrowBackIcon className="text-gray-800 z-50" />
				</Link>
				<div className="w-full pt-44">
					<div className="text-center">
						<h1 className="text-3xl font-semibold text-gray-900">Register</h1>
						<p className="mt-2 text-gray-500">Sign up below to create your account</p>
					</div>
					<div className="mt-5">
						<form onSubmit={handleSubmit}>
							<div className="relative mt-6">
								<input
									type="text"
									name="firstName"
									id="firstName"
									placeholder="Full Name"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
								/>
								<label
									htmlFor="firstName"
									className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
									Full Name
								</label>
							</div>
							<div className="relative mt-6">
								<input
									type="text"
									name="mobileNum"
									id="mobileNum"
									placeholder="Mobile Number"
									value={mobileNum}
									onChange={handleMobileNumChange}
									className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
								/>
								<label
									htmlFor="mobileNum"
									className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
									Mobile Number
								</label>
							</div>
							<div className="relative mt-6">
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									value={password}
									onChange={handlePasswordChange}
									className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
								/>
								<label
									htmlFor="password"
									className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
									Password
								</label>
							</div>
							<div className="relative mt-6">
								<input
									type="password"
									name="password2"
									id="password2"
									placeholder="Confirm Password"
									value={password2}
									onChange={handlePassword2Change}
									className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
								/>
								<label
									htmlFor="password2"
									className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
									Confirm Password
								</label>
							</div>
							<div className="my-6">
								<button
									type="submit"
									disabled={!canSubmit || loading}
									className="w-full rounded-md bg-purple-600 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none disabled:bg-gray-300 disabled:cursor-not-allowed">
									{loading ? <Loader /> : "Register"}
								</button>
							</div>
							{error && <div className="text-red-500 text-center mb-4">{error}</div>}
							<p className="text-center text-sm text-gray-500">
								Already have an account?
								<Link
									to="/login"
									className="font-semibold ml-1 text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
									Sign in
								</Link>
								.
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
