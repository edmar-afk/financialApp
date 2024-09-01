/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
	const navigate = useNavigate();
	const location = useLocation();

	// Store the previous location when the NotFound component mounts
	useEffect(() => {
		if (location.state && location.state.from) {
			// Do nothing if location.state.from exists
		} else {
			navigate("/", { state: { from: location } });
		}
	}, [location, navigate]);

	return (
		<>
			<section className="bg-white">
				<div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
					<div className="flex flex-col items-center max-w-sm mx-auto text-center">
						<p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 animate-bounce">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
								/>
							</svg>
						</p>
						<h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">404 Page not found</h1>
						<p className="mt-4 text-gray-500">
							You have trouble accessing this page. It's either under maintenance or doesn't exist:
						</p>

						{/* Redirect to the last visited URL */}
						<Link
							to={location.state?.from?.pathname || "/"}
							className="w-1/2 px-5 py-2 mt-8 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
							Take me back
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default NotFound;
