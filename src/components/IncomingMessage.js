import React, {useEffect, useState} from "react"
import eru from '../assets/eru.jpg'
import { ClarityUserLine } from "./icons/ClarityUserLine";
import { DataStore } from "aws-amplify";
import { User } from "../models";
function IncomingMessage(props){
    const [sender, setSender] = useState([])
    console.log(props.sender)

    useEffect(()=>{
        getSender()
    },[])
    async function getSender (){
        const test = await DataStore.query(User, (user)=>user.cognitoId.eq(props.sender) )
            // console.log(test)
            setSender(test)
        // })
    }
    // console.log(sender)
    return(
        <>
            <div className="grid grid-cols-7 gap-10 w-1/2 mt-4">
                <div className="rounded-full bg-red-">
                    {/* <ClarityUserLine height="0.5em" width="0.5em"/> */}
                    {sender.map(s=> <ClarityUserLine name={s.email.split('')[0].toUpperCase()} height="0.5em" width="0.5em"/> )} 
                    {/* <img  bg-stone-50" src="/assets/eru.jpg"/> */}
                </div>
                <div className="h-full w-fit col-span-6">
                    {/* {sender.map(s=>s.email.split('')[0].toUpperCase())}  */}
                     {/* <p className="pl-2">{props.time.split('T')[1].split('.')[0]}</p> */}
                <div className="bg-transparent w-fit bg-[#fcfafa] p-2 rounded-md">
                    <p>{props.message}</p>
                </div>
                <p className="pl- text-[12px]">{props.time.split('T')[1].split('.')[0].split(':')[0]}:{props.time.split('T')[1].split('.')[0].split(':')[1]}</p>
                </div>
            </div>
        </>
    )
}

export default IncomingMessage;