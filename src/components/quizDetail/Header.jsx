/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router-dom";import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Header({provider}) {
	const navigate = useNavigate();

	return (
		<>
			<div className="bg-white p-4 pt-8 flex flex-row justify-between">
				<ArrowBackIcon
					onClick={() => navigate(-1)} // Navigate to the previous page
					className="cursor-pointer mr-4" // Add pointer cursor for better UX
				/>
				<p className="font-bold">{provider}'s quiz</p>
			</div>
		</>
	);
}

export default Header;
