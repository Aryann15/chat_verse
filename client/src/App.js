import React, { useState, useRef, useEffect } from "react";
import styled from "styled-component";
import io from "socket.io-client";

const App = () => {
  const [yourId, setYourId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();

  const socketRef = useRef();

  useEffect(() => {
    socket.current = io.connect("/");
    socketRef.current.on("your id",id =>{
      setYourId(id);
    })
    socketRef.current.on ("message",(msg)=>{
      receivedMessage(message)
    })

  }, []);
  function receivedMessage (message) {
    setMessage(oldMsgs =>[...oldMsgs, message])
  }

  function sendMessage (e){
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourId,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }


  
return {

}

};
