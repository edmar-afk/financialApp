import { useEffect, useState } from "react";import { Link } from "react-router-dom";
import api from "../../assets/api";
import logo from "../../assets/img/logo.jpg";

function ChatBubble({ first_name, content, time_sent, id }) {
	const [profilePic, setProfilePic] = useState(null);

	useEffect(() => {
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
		<Link
			to={`/room/advisor/${id}`}
			className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
			<div className="flex items-center">
				<img
					className="rounded-full items-start flex-shrink-0 mr-3"
					src={profilePic || logo} // Use logo as fallback
					width="32"
					height="32"
					alt={first_name}
				/>
				<div>
					<h4 className="text-sm font-semibold text-gray-900">{first_name}</h4>
					<div className="text-[13px]">
						{content} · {time_sent}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ChatBubble;
