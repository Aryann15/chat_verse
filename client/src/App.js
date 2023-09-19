import React,{useState , useRef, useEffect} from "react";
import styled from "styled-component";
import io from "socket.io-client"

const App  =() =>  {
 const [uourId , setYourId] = useState ()
 const [messages , setMessages] = useState ([])
 const [message , setMessage] = useState ()
 
 const socketRef = useRef();

 useEffect(()=>{
  socket.current = io.connect('/');
 },
 [])

}