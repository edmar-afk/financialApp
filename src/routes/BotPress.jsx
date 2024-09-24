import Header from "../components/chatbot/Header";
function BotPress() {
	return (
		<>
			<Header />
			<iframe
				className="h-screen mt-8 pb-8"
				srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with bot',
                  'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                  'botName': 'Financial Advisor Chatbot',
                  'botId': 'dce3d5cf-fe21-483f-9618-2416b53e3d30',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': 'dce3d5cf-fe21-483f-9618-2416b53e3d30',
                  'enableConversationDeletion': true,
                  'showPoweredBy': false,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': true,
                  'disableAnimations': false,
                  'closeOnEscape': false,
                  'showConversationsButton': true,
                  'enableTranscriptDownload': false,
                  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/911b5e7e-abdf-4701-b9a4-5fa31a4a24e4/v91198/style.css'
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
				width="100%"
				height="100%"></iframe>
		</>
	);
}

export default BotPress;
