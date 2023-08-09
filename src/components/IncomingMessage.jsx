import React, {useState} from "react"
import eru from '../assets/eru.jpg'
import { ClarityUserLine } from "./icons/ClarityUserLine";
function IncomingMessage(props){
    return(
        <>
            <div className="grid grid-cols-7 gap-2 w-1/2 mt-4">
                <div className="w-10 h-10 rounded-full">
                    <ClarityUserLine height="1em" width="1em"/>
                    {/* <img  bg-stone-50" src="/assets/eru.jpg"/> */}
                </div>
                <div className="bg-transparent border h-full w-fit p-2 rounded-lg col-span-6">
                    <p>{props.message}</p>
                </div>
            </div>
        </>
    )
}

export default IncomingMessage;