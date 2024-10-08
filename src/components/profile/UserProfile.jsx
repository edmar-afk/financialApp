import { Link } from "react-router-dom";import { useState, useEffect } from "react";
import advisorImg from "../../assets/img/advisorImg.png";
import bg from "../../assets/img/bg.jpg";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import api from "../../assets/api";

function UserProfile() {
	const [profilePic, setProfilePic] = useState(null);
	const [isUploading, setIsUploading] = useState(false); // New state for upload status
	const userData = JSON.parse(localStorage.getItem("userData")) || {};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setProfilePic(URL.createObjectURL(file)); // Preview the selected image
			uploadProfilePicture(file); // Upload the selected image
		}
	};

	useEffect(() => {
		const fetchUserProfilePic = async () => {
			try {
				const response = await api.get("/api/user-profile/", {
					headers: {
						Authorization: `Token ${localStorage.getItem("token")}`, // Assuming token-based authentication
					},
				});
				setProfilePic(response.data.profile_pic); // Set fetched profile pic URL
			} catch (error) {
				console.error("Failed to fetch user profile picture:", error);
			}
		};

		fetchUserProfilePic();
	}, []);

	const uploadProfilePicture = async (file) => {
		const formData = new FormData();
		formData.append("profile_pic", file); // Use 'profile_pic' as per the view logic

		setIsUploading(true); // Start uploading
		try {
			const response = await api.post("/api/update-profile/", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Token ${localStorage.getItem("token")}`, // Assuming token-based authentication
				},
			});
			console.log("Profile picture updated:", response.data);
			alert("Profile picture updated successfully!");
		} catch (error) {
			console.error("Failed to upload profile picture:", error);
			alert("Failed to upload profile picture. Please try again.");
		} finally {
			setIsUploading(false); // End uploading
		}
	};

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { year: "numeric", month: "short", day: "numeric" };
		const formattedDate = date.toLocaleDateString("en-US", options);
		const formattedTime = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
		return `${formattedDate} - ${formattedTime}`;
	};

	return (
		<>
			<div className="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
				<div className="pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
					<div className="absolute top-0">
						<img
							src={bg}
							alt=""
							className="w-full object-contain rounded-2xl shadow-2xl"
						/>
						<CameraAltIcon
							className="ml-24 mt-2 text-purple-600 cursor-pointer"
							onClick={() => document.getElementById("profilePicInput").click()}
						/>
						<input
							type="file"
							id="profilePicInput"
							style={{ display: "none" }}
							accept="image/*"
							onChange={handleFileChange}
						/>
					</div>
					<div className="flex flex-wrap mb-6 xl:flex-nowrap">
						<div className="mb-5 mr-5 mt-4">
							<div className="relative inline-block shrink-0 rounded-2xl">
								<img
									className="inline-block shrink-0 rounded-full w-[90px] h-[90px]"
									src={profilePic || advisorImg}
									alt="Profile Image"
								/>
							</div>
						</div>
						<div className="grow">
							<div className="flex flex-wrap items-start justify-between mb-2">
								<div className="flex flex-col">
									<div className="flex items-center mb-2">
										<a
											className="text-secondary-inverse hover:text-purple-400 transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
											href="#">
											{userData.first_name}
										</a>
									</div>
									<div className="flex flex-wrap pr-2 mb-4 font-medium">
										<a
											className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-purple-400"
											href="#">
											<span className="mr-1">
												<LocalPhoneOutlinedIcon fontSize="small" />
											</span>
											{userData.username}
										</a>
										<a
											className="flex items-center mb-2 mr-5 text-xs hover:text-purple-400"
											href="#">
											<span className="mr-1">Joined:</span> {formatDate(userData.date_joined)}
										</a>
									</div>
								</div>
								<div className="flex flex-wrap my-auto bg-red-600 text-white px-6 py-3 rounded-xl">
									<Link
										to={"/logout"}
										className="inline-block text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer">
										Logout
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				{isUploading && <div className="text-center mt-2">Uploading...</div>}
			</div>
		</>
	);
}

export default UserProfile;
