import React, {useState} from "react"
import eru from '../assets/eru.jpg'
import { ClarityUserLine } from "./icons/ClarityUserLine";
function OutgoingMessage(props){
    return(
        <>
            <div className="grid grid-cols-7 gap-2 w-1/2 ml-auto mt-4">
                <div className="bg-transparent border h-full w-fit p-2 ml-auto rounded-lg col-span-6">
                    <p>{props.message}</p>
                </div>
                <div>
                    <ClarityUserLine height="1em" width="1em"/>
                </div>
            </div>
        </>
    )
}

export default OutgoingMessage;