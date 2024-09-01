import AdvisorChatHead from "./AdvisorsChatHead";
function AdvisorList() {
	return (
		<>
			<div>
				<hr className="w-48 h-1 mx-auto my-4 bg-purple-600 border-0 rounded md:my-10" />
				<p className="">Need financial advice? These people might be able to help you.</p>
				<div className="flex flex-row mt-5 overflow-x-scroll whitespace-nowrap">
					<AdvisorChatHead
						name="Edmar"
						count={1}
					/>
					<AdvisorChatHead
						name="Edmar"
						count={2}
					/>
					<AdvisorChatHead
						name="Edmar"
						count={3}
					/>
					<AdvisorChatHead
						name="Edmar"
						count={4}
					/>
					<AdvisorChatHead
						name="Edmar"
						count={5}
					/>
					<AdvisorChatHead
						name="Edmar"
						count={6}
					/>
				</div>
			</div>
		</>
	);
}

export default AdvisorList;
