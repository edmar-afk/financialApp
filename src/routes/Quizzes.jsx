import { Link, useNavigate } from "react-router-dom";import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import quizlogo from "../assets/svg/quizlogo.svg";

// Animation variants for fade-up with bounce effect
const containerVariants = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1, // Adds delay between children animations
		},
	},
};

const fadeUpBounce = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 10,
		},
	},
};

function Quizzes() {
	const navigate = useNavigate(); // Initialize useNavigate

	return (
		<>
			<TopBar />
			<motion.div
				className="bg-white h-screen"
				variants={containerVariants}
				initial="hidden"
				animate="visible">
				<div className="w-full h-fit relative bg-cover bg-no-repeat -mt-4">
					<motion.img
						src={quizlogo}
						width={200}
						className="mx-auto pt-8 z-50 relative"
						alt="Quiz Logo"
						variants={fadeUpBounce}
					/>
					<motion.p
						className="my-4 text-center text-purple-600 text-5xl font-bold"
						variants={fadeUpBounce}>
						Quiz Time!
					</motion.p>
					<motion.p
						className="my-4 text-center text-purple-600 text-xs font-extralight pb-4 mx-6"
						variants={fadeUpBounce}>
						Sharpen your financial knowledge with quick, fun quizzes provided by the advisors. Track progress and stay
						informed!
					</motion.p>
				</div>
				<div className="flex flex-col p-4">
					<motion.div
						className="bg-purple-400 text-white text-2xl text-center py-1.5 w-fit mx-auto px-12 rounded-2xl mb-4"
						variants={fadeUpBounce}>
						<Link to={"/quiz-list"}>Play Now</Link>
					</motion.div>
					<motion.div
						onClick={() => navigate(-1)} // Navigate back to the previous page
						className="border-2 text-red-500 border-red-400 text-2xl text-center py-1.5 mx-auto px-12 rounded-2xl cursor-pointer"
						variants={fadeUpBounce}>
						Maybe next time
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}

export default Quizzes;
