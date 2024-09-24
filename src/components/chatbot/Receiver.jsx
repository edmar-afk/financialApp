/* eslint-disable react/prop-types */
import logo from "../../assets/img/logo.jpg";
function Receiver({ message }) {
	return (
		<>
			<div className="grid">
				<div className="flex gap-2.5 mb-4">
					<img
						src={logo}
						alt="Shanay image"
						className="w-10 h-11 rounded-full"
					/>
					<div className="grid">
						<div className="w-max grid">
							<div className="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center inline-flex w-full max-w-[250px] break-words">
								<h5 className="text-gray-900 text-sm font-normal leading-snug">{message}</h5>
							</div>
							<div className="justify-end items-center inline-flex mb-2.5">
								<h6 className="text-gray-500 text-xs font-normal leading-4 py-1">Financial Chatbot</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Receiver;
