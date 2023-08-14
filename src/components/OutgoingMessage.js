import React, {useState} from "react"
import eru from '../assets/eru.jpg'
import { ClarityUserLine } from "./icons/ClarityUserLine";
function OutgoingMessage(props){
    return(
        <>
            <div className="grid grid-cols-7 items-start gap-2 w-1/2 ml-auto mt-4">
                <div className="h-full w-fit ml-auto col-span-6">
                <p className="">
                     {/* {Date.now()} */}
                    </p>
                    <div className="bg-[#cee6ff] border p-2 ml-auto rounded-lg ">
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