import { Link } from "react-router-dom"; import advisorImg from "../../assets/img/advisorImg.png";
import bg from '../../assets/img/bg.jpg';
function UserProfile() {
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { year: "numeric", month: "short", day: "numeric" };
		const formattedDate = date.toLocaleDateString("en-US", options);
		const formattedTime = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
		return `${formattedDate} - ${formattedTime}`;
	};
	const userData = JSON.parse(localStorage.getItem("userData")) || {};
	return (
		<>
			<div className="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
				<div className="pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
					<div className="absolute top-0">
						<img
							src={bg}
                            alt=""
							className="w-full object-contain rounded-2xl shadow-2xl"
						/>
					</div>
					<div className="flex flex-wrap mb-6 xl:flex-nowrap">
						<div className="mb-5 mr-5 mt-4">
							<div className="relative inline-block shrink-0 rounded-2xl">
								<img
									className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
									src={advisorImg}
									alt="image"
								/>
								<div className="group/tooltip relative">
									<span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2  border border-white"></span>
									<span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block">
										{" "}
										Status: Active{" "}
									</span>
								</div>
							</div>
						</div>
						<div className="grow">
							<div className="flex flex-wrap items-start justify-between mb-2">
								<div className="flex flex-col">
									<div className="flex items-center mb-2">
										<a
											className="text-secondary-inverse hover:text-purple-400 transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
											href="#">
											{" "}
											{userData.first_name}{" "}
										</a>
									</div>
									<div className="flex flex-wrap pr-2 mb-4 font-medium">
										<a
											className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-purple-400"
											href="#">
											<span className="mr-1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5">
													<path
														fillRule="evenodd"
														d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
														clipRule="evenodd"
													/>
												</svg>
											</span>{" "}
											{userData.username}{" "}
										</a>
										<a
											className="flex items-center mb-2 mr-5 text-xs hover:text-purple-400"
											href="#">
											<span className="mr-1">Joined:</span> {formatDate(userData.date_joined)}
										</a>
									</div>
								</div>
								<div className="flex flex-wrap my-auto bg-red-600 text-white  px-6 py-3 rounded-xl">
									<Link
										to={"/logout"}
										className="inline-block text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer">
										Logout
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserProfile;
