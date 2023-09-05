import React, { useEffect, useState } from "react";
import { ClarityUserLine } from "./icons/ClarityUserLine";
import { NavLink } from "react-router-dom";
import { AddPerson } from "./icons/AddPerson";
// import pic from '../chat_bg.jpeg'
import pic1 from '../erik.jpg'

import pic from '../pic.jpeg'
import { Storage } from "aws-amplify";

function Person(props){
    const openMsg = props.cognitoId
    const [userImage, setUserImage] = useState()
    useEffect(()=>{
        getUserImage()
    },[])
    const getUserImage = async ()=>{
        const res =  await Storage.get(props.url)
        console.log("urll",res)
        setUserImage(res)
    }
    return (<>

<div className="h-fit py-2 mx-auto my-3">
    <div className="flex flexs-col items-center px-2 border-1 border-gray-200">
        <img className="w-8 h-8 rounded-full shadow-lg" src={userImage} alt=""/>
        <div className="my-sdauto  ml-2 w-9/12 overflow-x-ellipsis">
            <h5 className="text-black overflow-x-hidden flex font-poppins text-[12px] font-bold justify-between w-full">
                <p>{props.name}</p>
                    <p className="text-[10px] my-auto ml font-poppins">{Date(Date.now()).split(' ')[4].split(':')[0]} : {Date(Date.now()).split(' ')[4].split(':')[1]}</p>

                {/* {props.name} */}
            </h5>
            <p className="text-[8px] text-gray-500 overflow-ellipsis w-full  dark:text-gray-500" style={{textOverflow:"ellipsis"}}>{props.email}</p>
        </div>
    </div>
</div>
    </>);
}

export default Person