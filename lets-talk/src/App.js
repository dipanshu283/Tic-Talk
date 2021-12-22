
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import LoadingForm from './component/LoadingForm';
import './App.css';


export function App() {

	if(!localStorage.getItem('username')) return <LoadingForm/>
	return (
		<ChatEngine
		height='100vh'
		userName={localStorage.getItem('username')}
		userSecret={localStorage.getItem('secret')}
		projectID='22d4bae1-7b87-429d-9ce8-c98bc7100c44'
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
		/>
	);
}

export default App;


