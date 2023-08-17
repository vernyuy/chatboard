import React, { useEffect, useState } from "react";
import OutgoingMessage from "../components/OutgoingMessage";
import IncomingMessage from "../components/IncomingMessage";
import ChatSidebar from "../components/ChatSidebar";
import MessageFormField from "../components/MessageFormField";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
// import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import Login from "./Login";
import { useNavigate } from "react-router-dom";
import bg from '../chat_bg.jpeg'
import RecentChats from "../components/RecentChats";
import { DataStore } from "aws-amplify";
import { Message } from "../models";
import Person from "../components/person";
import ChatsScreen from "../components/ChatsScreen";

export function Home(){
  const {user} = useSelector(state => state.user);
  // console.log(user.attributes.sub)
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
    DataStore.query(Message, (msg)=>msg.messageMessageToId.eq('eoijojdfss')).then(
      async(data)=>{
          // console.log(data)
          data.map(element => {
              console.log(element)
              
          });
          setMessages(data)
        //  console.log(  messages) 
      }
  )
  }, [user, navigate])
    return (
        <>
        <div className='flex h-scren bg-gray-200 overflow-x-hidden text-black'>
          <ChatSidebar/>
          <div className="h-full w-full mr-2 ">
          <div className=" w-full rounded-s-xl border-e-2">
                        <Person receiverId={'person.id'} name={'person.username'} email={'person.email'}/>
                        <Person receiverId={'person.id'} name={'person.username'} email={'person.email'}/> 
                    </div>
          <ChatsScreen/>
        </div>
        </div>
        </>
      );
}