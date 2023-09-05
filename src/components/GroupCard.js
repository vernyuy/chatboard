import React from "react";
import { ClarityUserLine } from "./icons/ClarityUserLine";
import { NavLink } from "react-router-dom";
import { AddPerson } from "./icons/AddPerson";
import pic from '../chat_bg.jpeg'
import pic1 from '../erik.jpg'
import pic2 from '../assets/eru.jpg'
import { DataStore } from "aws-amplify";
import { ChatRoom, GroupMember, User } from "../models";

function GroupCard(props){
    const loggedInUser = JSON.parse(localStorage.getItem('user')).attributes.sub

    const member =  DataStore.query(User, (u)=>u.cognitoId.eq(loggedInUser) )

    console.log("join", member)
    const joinGroup = async ()=>{
        const member = await DataStore.query(User, (u)=>u.cognitoId.eq(loggedInUser) )
        const group = await DataStore.query(ChatRoom, props.id)
        const join = await DataStore.save(
            new GroupMember({
                user: member[0],
                chatRoom: group
            })
        )

        console.log("join", join)
    }
    return (<>

        <NavLink to={'/room-chat'} className="shadow-lg mx-auto max-w-[15em] shadow-black p-5 bg-bl rounded-2xl">
            <div className="flesx justify-between">
                <NavLink onClick={joinGroup} to={'/room-chat'} state={{userId:"dhfsjf"}} className=" h-fit text-[12px] my-auto flex justify-end w-full mt-0">
                    join
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" color="blue">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M3 21v-2a4 4 0 0 1 4-4h4c.96 0 1.84.338 2.53.901M16 3.13a4 4 0 0 1 0 7.75M16 19h6m-3-3v6"/>
                    </svg>
                </NavLink>
                
                <div className="grid grid-cols-2">
                    <div>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute z-39 mt-6" src={pic} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-1 mt-6" src={pic1} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-2 mt-6" src={pic2} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-3 mt-6" src={pic} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-4 mt-6" src={pic1} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-5 mt-6" src={pic2} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-6 mt-6" src={pic1} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-7 mt-6" src={pic2} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-8 mt-6" src={pic} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-9 mt-6" src={pic1} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-10 mt-6" src={pic2} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-11 mt-6" src={pic1} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-12 mt-6" src={pic2} alt="Bonnie image"/>
                        <img className="w-5 h-5 mb-3 rounded-full shadow-lg absolute  ml-14 mt-6" src={pic1} alt="Bonnie image"/>
                    </div>
                    <div className="mt-6">
                         <h4 className="text-blue-800 text-[14px] font-poppins font-bold">{props.name}</h4>
                    </div>
                </div>
                <div className="grid grid-cols-1 my-auto mx-5">
                    <h6 className="text-gray-500 text-[10px] font-poppins font-bold">Created By: <span className="text-bold font-poppins text-[12px] ml-1">Fonchu</span></h6>
                </div>
            </div>
        </NavLink>
    </>);
}

export default GroupCard