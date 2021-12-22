import React from "react";
import { useState } from "react";
import axios from "axios";

function LoadingForm(props) {
    const [username, setusername] = useState("");
  const [secret, setsecret] = useState("");

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const authObject = {'Project-ID' : "22d4bae1-7b87-429d-9ce8-c98bc7100c44" , "User-Name" : username , "User-Secret" : secret}

        try{
           await  axios.get('https://api.chatengine.io/chats',{headers : authObject});
           localStorage.setItem('username' , username);
           localStorage.setItem('secret' ,secret);
           window.location.reload();
        }
        catch(error){

        }
    }
  


  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e)=> setusername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={secret}
            onChange={(e)=> setsecret(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align ="center" >

              <button className="button">
                  <span>Start Chatting</span>
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoadingForm;
