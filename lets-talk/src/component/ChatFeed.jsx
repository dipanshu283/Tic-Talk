import MessageForm from "./MessageForm";
import Mymsg from "./Mymsg";
import TheirMsg from "./TheirMsg";

const ChatFeed =(props)=>{
  const { chats, activeChat, userName, messages } = props; //destrucuturing
  // console.log(props);
  const chat = chats && chats[activeChat];
  // console.log("hello " , chat);
   

  const renderReadReceipts = (message, isMyMessage) =>  chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {
    // console.log(messages);
    // console.log(Object);
    // console.log(userName);
  
    const keys = Object.keys(messages);
  

    return keys.map((key, index) => {
      //  console.log(messages[key].id);
      // console.log(keys[index-1]);;
      const message = messages[key];

      // console.log(message);
      // console.log(message.sender_username);
      // console.log(message.text);
      const lastMassagekey = index === 0 ? null : keys[index - 1];
      // console.log();
      const isMyMessage = userName === message.sender.username;
      // console.log(message);
      // console.log(lastMassagekey);
      // console.log(message[lastMassagekey]);
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <Mymsg message={message} /> : <TheirMsg message={message} lastMessage= {messages[lastMassagekey]} />}
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

   if(!chat) return <div/>;
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
            {chat?.title}</div>
            <div className="chat-subtitle">
                {chat.people.map((person) => `${person.person.username} `)}
            </div>   
        </div>
        {renderMessages()}
      <div style={{height : '100px'}}/>
      <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat}/>
      </div>
    </div>
  );
}

export default ChatFeed;
