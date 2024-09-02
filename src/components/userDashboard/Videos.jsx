import React, { useState } from "react";
import { motion } from "framer-motion";
import { videos } from "../../assets/Data";
import videoBg from "../../assets/img/videobg.png";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import VideoModal from "./VideoModal";

function Videos() {
	const [showAll, setShowAll] = useState(false);

	// Function to toggle the showAll state
	const toggleShowAll = () => {
		setShowAll((prevShowAll) => !prevShowAll);
	};

	// Determine the videos to display based on the showAll state
	const videosToDisplay = showAll ? videos : videos.slice(0, 3);

	return (
		<div className="pt-8">
			<p className="mb-3">Helpful videos for financial problems.</p>

			<div className="flex flex-col">
				{videosToDisplay.map((video, index) => (
					<motion.div
						key={video.id}
						className="h-[80px] w-full my-1 relative"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: index * 0.2 }} // Animation with delay for each video
					>
						<img
							src={videoBg}
							alt=""
							className="w-full h-full object-cover rounded-2xl"
						/>
						<div className="absolute inset-0 flex items-center justify-between p-2 mx-6">
							<div>
								<p className="text-white text-xs font-bold">{video.name}</p>
								<p className="text-white text-xs mt-0.5 font-extralight">{video.minutes} min</p>
							</div>
							
							<VideoModal name={video.name} url={video.link}/>
						</div>
					</motion.div>
				))}
				<p
					className="text-center flex items-center justify-center mt-2 text-xs cursor-pointer"
					onClick={toggleShowAll}>
					{showAll ? (
						<>
							<ArrowDropUpOutlinedIcon fontSize="medium" /> Show Less
						</>
					) : (
						<>
							<ArrowDropDownOutlinedIcon fontSize="medium" /> Show More
						</>
					)}
				</p>
			</div>
		</div>
	);
}

export default Videos;
