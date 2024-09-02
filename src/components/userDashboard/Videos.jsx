/* eslint-disable react/no-unescaped-entities */ import { videos } from "../../assets/Data";import videoBg from "../../assets/img/videobg.png";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
function Videos() {
	return (
		<div className="pt-8">
			<p className="mb-3">Helpful videos for financial problems.</p>

			<div className="flex flex-col">
				{videos.map((video) => (
					<div
						key={video.id}
						className="h-[80px] w-full my-1 relative">
						<img
							src={videoBg}
							alt=""
							className="w-full h-full object-cover rounded-2xl"
						/>
						{/* You can add more content inside this div if needed */}
						<div className="absolute inset-0 flex items-center justify-between p-2 mx-6">
							<div>
								<p className="text-white text-xs font-bold">{video.name}</p>
								<p className="text-white text-xs mt-0.5 font-extralight">{video.minutes} min</p>
							</div>
							<PlayCircleOutlineOutlinedIcon
								className="text-purple-200"
								fontSize="large"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Videos;
