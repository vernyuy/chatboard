import React from "react";
import GroupCard from "../components/GroupCard";
import ChatSidebar from "../components/ChatSidebar";

function Groups(){
    return (
        <>
        <div className='flex h-scren text-white'>
          <ChatSidebar/>
          <div className="overflow-y-scroll h-screen w-1/2 ">
                <h3 className="text-lg text-slate-900">All Groups</h3>
                

                {/* {people.map((p, index)=><p className="text-black" key={index}>{p.email}</p>)} */}
                <div className="grid grid-cols-3 px-3.5">
                    <GroupCard name="test" email="test@test.com"/>
                </div>

            </div>
        </div>
            
        </>
    )
}

export default Groups;