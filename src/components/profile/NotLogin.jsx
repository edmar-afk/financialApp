/* eslint-disable react/no-unescaped-entities */import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import notLogin from "../../assets/svg/notLogin.svg";

function NotLogin() {
	return (
		<div className="p-4 flex flex-col text-center">
			<motion.p
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0 }}>
				Ooops! Looks like you didn't login an account
			</motion.p>
			<motion.img
				src={notLogin}
				alt=""
				className="my-12"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
			/>
			<motion.p
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}>
				You need to{" "}
				<Link
					to={"/login"}
					className="font-bold text-purple-700 underline">
					Login first
				</Link>{" "}
				to access this page.
			</motion.p>
		</div>
	);
}

export default NotLogin;
