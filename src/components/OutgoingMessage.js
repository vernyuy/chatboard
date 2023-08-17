import React, {useState} from "react"
import eru from '../assets/eru.jpg'
import { ClarityUserLine } from "./icons/ClarityUserLine";
function OutgoingMessage(props){
    return(
        <>
            <div className="grid grid-cols-7 items-start gap-2 w-1/2 ml-auto mt-4">
                <div className="h-full ml-auto col-span-6">
                <p className="">
                     {/* {Date.now()} */}
                    </p>
                    <div className="bg-[#c4dffb] p-2 rounded-none rounded-s-3xl rounded-br-3xl">
                        <p>{props.message}</p>
                    </div>
                </div>
                <div>
                    <ClarityUserLine height="1em" width="1em" color="green"/>
                </div>
            </div>
        </>
    )
}

export default OutgoingMessage;