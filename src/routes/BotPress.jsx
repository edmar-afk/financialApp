import Header from "../components/chatbot/Header";function BotPress() {	return (
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
                  'botId': '77be6080-c61a-4f70-9888-1ce133920f30',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '77be6080-c61a-4f70-9888-1ce133920f30',
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
                  'stylesheet': 'https://webchat-styler-css.botpress.app/prod/code/8315adcf-40cb-42f5-aa58-1d3f73baea43/v65335/style.css'
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
				width="100%"
				height="100%"></iframe>
		</>
	);
}

export default BotPress;
