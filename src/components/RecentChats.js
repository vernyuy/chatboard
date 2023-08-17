import React from "react";
import { ClarityUserLine } from "./icons/ClarityUserLine";
import { NavLink } from "react-router-dom";
import { AddPerson } from "./icons/AddPerson";
import pic from '../chat_bg.jpeg'

function RecentChats(props){
    return (<>

{/* <div className="w-full h-40 max-w-[12em] py-2 mx-auto my-3 bg-white border rounded-lg shadow-sm">
    <div className="sticky">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block mr-auto text-gray-500 dark:text-gray-400 rounded-lg text-sm p-1" type="button">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36" color="blue">
                        <path fill="currentColor" d="M18 2.5c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 0 0 4.88-.68l5.53 3.52a1 1 0 0 0 1.54-.84v-6.73a13 13 0 0 0 4-9.27C34 8.78 26.82 2.5 18 2.5Zm10.29 22.11a1 1 0 0 0-.32.73v5.34l-4.38-2.79a1 1 0 0 0-.83-.11a16 16 0 0 1-4.76.72c-7.72 0-14-5.38-14-12s6.28-12 14-12s14 5.38 14 12a11.08 11.08 0 0 1-3.71 8.11Z" className="clr-i-outline clr-i-outline-path-1"/>
                        <path fill="currentColor" d="M25 15.5H11a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" className="clr-i-outline clr-i-outline-path-2"/>
                        <path fill="currentColor" d="M21.75 20.5h-7.5a1 1 0 0 0 0 2h7.5a1 1 0 0 0 0-2Z" className="clr-i-outline clr-i-outline-path-3"/>
                        <path fill="currentColor" d="M11.28 12.5h13.44a1 1 0 0 0 0-2H11.28a1 1 0 0 0 0 2Z" className="clr-i-outline clr-i-outline-path-4"/>
                        <path fill="none" d="M0 0h36v36H0z"/>
                    </svg>
        </button>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-20 h-20 mb-3 rounded-full shadow-lg" src={pic} alt="Bonnie image"/>
        <h5 className=" text-xl font-medium text-gray-900 ">{props.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{props.email}</span>
        <div className="flex space-x-3">
            {/* <AddPerson color='blue'/> *
        </div>
    </div>
</div> */}
        <div className="mt-12 shadow-lg mx-auto w-full shadow-black p-2 rounded-2xl">
            <div className="flex justify-between">
                <div className="flex">
                <img className="w-20 h-20 rounded-full shadow-lg" src={pic} alt="Bonnie image"/>
                <div className="grid grid-cols-1 my-auto mx-5">
                    <h4 className="text-gray-800 text-lg font-bold">Username last</h4>
                    <h6 className="text-gray-500 text-sm font-bold">Email@email.com</h6>
                </div>
                </div>
                {/* <NavLink to='/home' state={{userId:"dhfsjf"}} className=" h-fit w-fit my-auto ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36" color="blue">
                        <path fill="currentColor" d="M18 2.5c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 0 0 4.88-.68l5.53 3.52a1 1 0 0 0 1.54-.84v-6.73a13 13 0 0 0 4-9.27C34 8.78 26.82 2.5 18 2.5Zm10.29 22.11a1 1 0 0 0-.32.73v5.34l-4.38-2.79a1 1 0 0 0-.83-.11a16 16 0 0 1-4.76.72c-7.72 0-14-5.38-14-12s6.28-12 14-12s14 5.38 14 12a11.08 11.08 0 0 1-3.71 8.11Z" className="clr-i-outline clr-i-outline-path-1"/>
                        <path fill="currentColor" d="M25 15.5H11a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" className="clr-i-outline clr-i-outline-path-2"/>
                        <path fill="currentColor" d="M21.75 20.5h-7.5a1 1 0 0 0 0 2h7.5a1 1 0 0 0 0-2Z" className="clr-i-outline clr-i-outline-path-3"/>
                        <path fill="currentColor" d="M11.28 12.5h13.44a1 1 0 0 0 0-2H11.28a1 1 0 0 0 0 2Z" className="clr-i-outline clr-i-outline-path-4"/>
                        <path fill="none" d="M0 0h36v36H0z"/>
                    </svg>
                </NavLink> */}
            </div>
        </div>
    </>);
}

export default RecentChats