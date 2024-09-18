import {
	getClient,
	Container,
	Header,
	MessageList,
	Composer,
	ComposerInput,
	ComposerButton,
	UploadButton,
	WebchatProvider,
} from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";
import TopBar from "../components/TopBar";
const { theme, style } = buildTheme({
	themeName: "",
	themeColor: "#634433",
});

// Add your Client ID here ⬇️
const clientId = "53afdf74-df03-454c-a63d-54a18029b60c";

export default function ChatBot() {
	const client = getClient({ clientId });
	const [isWebchatOpen, setIsWebchatOpen] = useState(true);

	return (
		<>
			<TopBar />
			<div className="w-full h-full">
				<style>{style}</style>
				<WebchatProvider
					client={client}
					theme={theme}>
					<Container>
						<MessageList />
						<Composer>
							<ComposerInput />
							<ComposerButton />
						</Composer>
					</Container>
				</WebchatProvider>
			</div>
		</>
	);
}
