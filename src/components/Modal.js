import { DataStore } from "aws-amplify";
import React, { useState } from "react";
import { ChatRoom, User } from "../models";

export default function Modal ({visible, onClose}) {
    const [name, setName] = useState();
    const [description, setDescription] = useState()
    if(!visible) return null
    const handleOnClose = (e)=>{
        if(e.target.id === 'container'){
        onClose()}
    }

    const loggedInUser = JSON.parse(localStorage.getItem('user')).attributes.sub
    console.log("group", loggedInUser)

    const creatChatRoom = async(e)=>{
        e.preventDefault()
        const roomOwner = await DataStore.query(User, (u)=>u.cognitoId.eq(loggedInUser) )
        const test = await DataStore.save(
            new ChatRoom({
                name: name,
                User: roomOwner[0]
            })
         )
         console.log("group", test)
    }
  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 z-50 w- bg-blakjck bg-slate-200 bg-opacity-70 backdrop-blur-sm mx-auto flex items-center justify-center">
      <div className="bg-white p-2 rounded-xl w-72 shadow-2xl">
        <h1 className="font-semibold text-center text-xl text-gray-700 my-4">
          Create ChatRoom
        </h1>
        {/* <p className="text-center text-gray-700 mb-5">Sign in</p> */}

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 text-[12px] font-poppins rounded mb-5"
            placeholder="chat room name"
            onChange={(e)=>setName(e.target.value)}
          />
          <textarea
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 text-[12px] font-poppins"
            placeholder="chat room description"
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button onClick={creatChatRoom} className="px-2 py-1  bg-blue-700 shadow-sm text-white rounded-md text-[12px] font-poppins">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}