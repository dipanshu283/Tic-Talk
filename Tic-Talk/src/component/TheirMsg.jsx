import React from "react";

const TheirMsg= ({ message, lastMessage })=> {
    // console.log(lastMessage);
  const isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username;
  const sendTime = message.created.substring(0,19);


  return (<>

        <div> {isFirstMessage && (<div> <span style={{ marginLeft:'40%', position:'relative'}}>{sendTime}</span></div> )}</div>
    
    <div className="message-row">
      {isFirstMessage && (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message?.sender?.avatar})`} }
        />
      )}
      { message.attachements && message.attachements.length > 0 
      ? (
        <img
          src={message.attachements[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft:isFirstMessage?"4px" :'48px' }}
        />
      ) 
      : (
        <div
          className="message"
          style={{
            float: "left",
            marginLeft:isFirstMessage?"4px" :'48px',
            marginBottom:'10px',
            backgroundColor: "#CABCDC",
          }}
        >
          {message.text}

        </div>
        
      )}
    </div>
    </>

  );
}

export default TheirMsg;
