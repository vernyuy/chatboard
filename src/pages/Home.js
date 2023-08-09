import React, { useEffect } from "react";
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

export function Home(){
  const {user} = useSelector(state => state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  }, [user, navigate])
    return (
        <>
        <div className='flex h-scren bg-gray-200 overflow-x-hidden text-black'>
          <ChatSidebar/>
          <div className='max-h-screen col-span-6 mx-6'>
            <div className='sm:grid sm:grid-cols-7 gap-4 rounded-lg py-8 h-full sm:'> {/*style={{backgroundImage: `url(${bg})`}}*/}
              <div className='pt-8 shadow-sm shadow-black rounded-2xl h-full overflow-y-scroll px-5 col-span-5 bg-transparent' >
                 <IncomingMessage message="Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message"/>
                <OutgoingMessage message="Outgoing message"/> 
                 {/* <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>  */}
                <OutgoingMessage message="Outgoing message fce7b4e3-aa44-44c9-b4c1-cfc374e87c8d"/>
                <IncomingMessage message="Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message"/>
                <OutgoingMessage message="Outgoing message"/>
                <IncomingMessage message="Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message"/>
                <OutgoingMessage message="Outgoing message, Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message"/>
                <IncomingMessage message="Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message"/>
                <OutgoingMessage message="Outgoing message"/>
                <IncomingMessage message="Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message. Hello this is an incomming message"/>
                <OutgoingMessage message="Outgoing message"/>
                <IncomingMessage message="He Hello this is an incomming message"/>
                <div className=' sticky w-f -bottom-[2px] bg-transparent' >
                <MessageFormField />
                </div>
              </div>
              <div className='col-span-2 shadow-2xl px-3 overflow-y-scroll shadow-black rounded-2xl bg-slate-300 hidden sm:block'>
              <h1 className='text-3xl text-center sticky top-0'>
                Recent Chats
              </h1>
              <RecentChats/>
              <RecentChats/>
              <RecentChats/>
              <RecentChats/>
              <RecentChats/>
              <RecentChats/>
            </div>
            </div>
          </div>
        </div>
        </>
      );
}