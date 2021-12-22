import React from "react";

function TheirMsg({ message, lastMessage }) {
    console.log(lastMessage);
  const isFirstMessage =
    !lastMessage ||
    lastMessage.sender.username ===! message.sender.username;

  return (
    <div>
      {isFirstMessage ? (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})`  , marginBottom:"14px"} }
        />
      ) : null}
      {message?.attachements?.length > 0 ? (
        <img
          src={message.attachements[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft:isFirstMessage?"4px" :'48px' }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginLeft:isFirstMessage?"4px" :'4px',
            backgroundColor: "#CABCDC",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMsg;
