import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../assets/api";
function AdvisorChatHead({ name, count, id }) {
	const [profilePic, setProfilePic] = useState(null);

	useEffect(() => {
		// Fetch profile picture for the given user ID
		const fetchProfilePic = async () => {
			try {
				const response = await api.get(`/api/user-profile/${id}/profile-pic/`);
				const profilePicPath = response.data.profile_pic;

				// Build the full URL using VITE_API_URL
				const fullProfilePicUrl = `${import.meta.env.VITE_API_URL}${profilePicPath}`;
				setProfilePic(fullProfilePicUrl);
			} catch (error) {
				console.error("Error fetching profile picture:", error);
			}
		};

		fetchProfilePic();
	}, [id]);

	return (
		<>
			<Link to={`/room/advisor/${id}`}>
				<motion.div
					className="w-[140px] py-4 text-center bg-purple-800 rounded-lg mx-2 shadow-2xl"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
						delay: count ? count / 10 : 0, // Add delay based on count
					}}>
					<div className="space-y-4">
						<img
							className="mx-auto rounded-full h-24 w-24"
							src={profilePic || logo} // Use the fetched profile picture or fallback to logo
							alt="author avatar"
						/>
						<div className="space-y-2">
							<div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
								<h3 className="text-white text-xs truncate w-[120px]">{name}</h3>
							</div>
						</div>
					</div>
				</motion.div>
			</Link>
		</>
	);
}

export default AdvisorChatHead;
