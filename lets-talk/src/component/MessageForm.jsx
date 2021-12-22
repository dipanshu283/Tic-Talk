import React, { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

function MessageForm(props) {
  const [value, setvalue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setvalue("");
    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });
  };
  const handleChange = (event) => {
    setvalue(event.target.value);
    isTyping(props, chatId);
  };
  const handleUpload= (event)=>{
    sendMessage(creds , chatId , { files : event.target.files ,text:'' })
    // console.log(event.target.files);
  } 

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span>
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input 
      type="file"
       multiple={false}
       id="upload-button"
       style={{display:"none"}}
       onChange={handleUpload} />
       <button className="send-button"> <SendOutlined className="send-icon"/></button>
    </form>
  );
}

export default MessageForm;
