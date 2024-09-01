import logo from "../../assets/img/logo.jpg";import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function AdvisorChatHead({ name, count }) {
	return (
		<>
			<Link to={`/visitorDashboard/buildingDetails/${1}`}>
				<motion.div
					className="w-[140px] py-4 text-center bg-purple-800 rounded-lg mx-2"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
						delay: count ? count / 10 : 0, // add delay based on count
					}}>
					<div className="space-y-4">
						<img
							className="mx-auto rounded-full h-24 w-24"
							src={logo}
							alt="author avatar"
						/>
						<div className="space-y-2">
							<div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
								<h3 className="text-white">{name}</h3>
							</div>
						</div>
					</div>
				</motion.div>
			</Link>
		</>
	);
}

export default AdvisorChatHead;
