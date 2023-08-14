import React from "react";
// import GroupCard from "../components/GroupCard";
import ChatSidebar from "../components/ChatSidebar";
import Person from "../components/person";
import ChatsScreen from "../components/ChatsScreen";

function Groups(){
    return (
        <>
        <div className='flex h-scren text-kk bg-gray-100'>
          <ChatSidebar/>
          {/* <p className="text-black">Group Name</p> */}
          <div className="h-full w-full mr-2 ">
            {/* <p className="text-black">Group Name</p> */}
                <div className="sm:grid sm:grid-cols-3 md:grid-cols-4 min-h-screen gap-3 bg-white h-full my-2 rounded-xl">
                    <div className=" w-full rounded-s-xl border-e-2">
                        <Person receiverId={'person.id'} name={'Grou name'} email={'person.email'}/>
                        <Person receiverId={'person.id'} name={'Group name'} email={'person.email'}/>
                    </div>

                    <div className="w-full p-5 sm:col-span-2 md:col-span-3">
                    <p className="text-black sticky top-0 bg-white">Group Name</p>
                        <ChatsScreen test="sjlkfj"/>
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