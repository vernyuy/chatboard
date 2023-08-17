import React from "react";
import GroupCard from "../components/GroupCard";
import ChatSidebar from "../components/ChatSidebar";
import Person from "../components/person";
import ChatsScreen from "../components/ChatsScreen";
import Navbar from "../components/Navbar";

function Groups(){
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
                    <div className=" grid h-5/6 grid-cols-4 gap-y-8 w-full py-4 rounded-xl bg-white">
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        <GroupCard/>
                        {/* <Person receiverId={'person.id'} name={'Grou name'} email={'person.email'}/>
                        <Person receiverId={'person.id'} name={'Group name'} email={'person.email'}/> */}
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