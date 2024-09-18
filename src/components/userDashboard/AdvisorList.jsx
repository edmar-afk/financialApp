import { useEffect, useState } from "react";
import AdvisorChatHead from "./AdvisorsChatHead";
import api from "../../assets/api"; // Assuming 'api' is an axios instance

function AdvisorList() {
	const [advisors, setAdvisors] = useState([]);

	useEffect(() => {
		// Fetch the list of advisors from the API
		api
			.get("/api/advisors/")
			.then((response) => {
				setAdvisors(response.data);
			})
			.catch((error) => {
				console.error("Error fetching advisors:", error);
			});
	}, []);

	// Calculate the number of advisors
	const advisorCount = advisors.length;

	return (
		<>
			<div>
				<hr className="w-48 h-1 mx-auto my-4 bg-purple-600 border-0 rounded md:my-10" />
				<p className="">
					Need financial advice? These <span className="text-purple-600 font-bold underline">{advisorCount}</span>{" "}
					advisors might be able to help you.
				</p>
				<div className="flex flex-row mt-5 overflow-x-scroll whitespace-nowrap">
					{advisors.map((advisor, index) => (
						<AdvisorChatHead
							key={advisor.id}
							name={advisor.first_name} // Assuming username as the display name
							count={index + 1} // Incrementing the count based on the index
							id={advisor.id}
							img={advisor.profile_pic.profile_pic}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default AdvisorList;
