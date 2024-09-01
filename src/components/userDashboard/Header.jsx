import { motion } from "framer-motion";import bgHeader from "../../assets/img/bgHeader.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";

function Header() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {};

	// Get the current hour
	const currentHour = new Date().getHours();

	// Determine the greeting and icon based on the time
	let greeting;
	let IconComponent;
	let textColor;

	if (currentHour >= 0 && currentHour < 12) {
		// Morning: 12 AM to 11:59 AM
		greeting = "Good Morning";
		IconComponent = LightModeIcon;
		textColor = "text-black";
	} else if (currentHour >= 12 && currentHour < 18) {
		// Afternoon: 12 PM to 5:59 PM
		greeting = "Good Afternoon";
		IconComponent = LightModeIcon;
		textColor = "text-black";
	} else {
		// Evening: 6 PM to 11:59 PM
		greeting = "Good Evening";
		IconComponent = NightsStayIcon;
		textColor = "text-purple-700";
	}

	return (
		<>
			<div className="flex flex-col pt-8">
				<div className="flex flex-row items-center justify-between p-4">
					<motion.p
						className={`font-bold text-2xl ${textColor}`}
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "spring", stiffness: 260, duration: 0.5 }}>
						{greeting}, <br />
						{userData.first_name}
					</motion.p>
					<motion.div
						className="absolute right-2"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}>
						<IconComponent
							sx={{ fontSize: 120 }}
							className={textColor === "text-black" ? "text-yellow-600" : "text-purple-700"}
						/>
					</motion.div>
				</div>
				<img
					src={bgHeader}
					alt=""
					className="object-cover shadow-2xl"
				/>
			</div>
		</>
	);
}

export default Header;
