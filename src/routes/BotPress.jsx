import Header from "../components/chatbot/Header";function BotPress() {	return (	<>
		<Header />
		<iframe
			className="h-screen mt-8 pb-8"
			srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with bot',
                  'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                  'botName': 'Financial Advisor Chatbot',
                  'botId': 'cd49f825-58ad-4344-88cc-429727759fce',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': 'cd49f825-58ad-4344-88cc-429727759fce',
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
