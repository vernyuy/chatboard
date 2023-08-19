import React, { useEffect, useState } from "react";
import GroupCard from "../components/GroupCard";
import ChatSidebar from "../components/ChatSidebar";
import Person from "../components/person";
import ChatsScreen from "../components/ChatsScreen";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import Modal from "../components/Modal";
import { DataStore } from "aws-amplify";
import { ChatRoom } from "../models";

function Groups(){
    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)
    const [groups, setGroups] = useState([])
    useEffect(()=>{
        getGroups()
    }, [])

    const getGroups = async  ()=>{
        const grps = await DataStore.query(ChatRoom)
        console.log("groups", grps)
        setGroups(grps)
    }

    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div className='flex h-screen overflow-y-hidden font-poppins bg-slate-200'>
                <div className="w-1/4">
                <ChatSidebar/>
                </div>
          <div className="h-full w-full mr-2 ">
                <div className="bg-whitele h-full my-4 rounded-xl">


          
          <Modal onClose={handleOnClose} visible={showModal}/>


          <div className="rounded-xl bg-white h-5/6 ">
                    <button onClick={()=>setShowModal(true)} className="bg-blue-700 text-[12px] font-poppins text-white py-1 px-2 rounded-md hover:scale-95 transition">
                        Open Modal
                    </button>

                    <div className=" grid grid-cols-4 gap-y-8 w-full py-4 ">
                        {
                            groups.map(g=><GroupCard key={g.id} id={g.id} name={g.name}/>)
                        }
                        {/* <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/> */}
                        {/* <Person receiverId={'person.id'} name={'Grou name'} email={'person.email'}/>
                        <Person receiverId={'person.id'} name={'Group name'} email={'person.email'}/> */}
                    </div>
          </div>

                    <div className="w-full p-5 sm:col-span-2 md:col-span-3">
                    {/* <ChatsScreen senderId={'userId'}/> */}
                        {/* sdjflkdjgl */}
                        {/* <IncomingMessage message="Incoming message"/>
                        <OutgoingMessage message="Incoming message"/>
                        {people.map(person=><Person receiverId={person.id} name={person.username} email={person.email}/>)} */}
                    </div>
                    {/* sdjflkdjgl
                    {people.map(person=><Person receiverId={person.id} name={person.username} email={person.email}/>)} */}
                </div>
            </div>
        </div>
        </>
    )
}

export default Groups;