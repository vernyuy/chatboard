import React, {useEffect, useState} from "react"
import eru from '../assets/eru.jpg'
import { ClarityUserLine } from "./icons/ClarityUserLine";
import { DataStore, Storage } from "aws-amplify";
import { User } from "../models";
import pic from '../pic.jpeg'
function IncomingMessage(props){
    const [sender, setSender] = useState([])
    const [senderImage, setSenderImage] = useState()
    console.log(props.sender)

    useEffect(()=>{
        getSender()
    },[])
    async function getSender (){
        const test = await DataStore.query(User, (user)=>user.cognitoId.eq(props.sender) )
            console.log("userTest",test[0].profileImageUrl)
            setSender(test)
            const res = await Storage.get(test[0].profileImageUrl)
            console.log('userTest', res)
        setSenderImage(res)
        // })
    }
    // console.log(sender)
    return(
        <>
            <div className=" w-1/2 gap-6 mt-4">
                <div className="rounded-full flex mb-2">
                    {sender.map(s=> <ClarityUserLine name={senderImage}/> )} 
                    <p className="text-[12px] ml-2 mt-1">{props.time.split('T')[1].split('.')[0].split(':')[0]}:{props.time.split('T')[1].split('.')[0].split(':')[1]}</p>
                
                </div>
                <div className="h-full w-fit col-span-11">
                    <div className=" w-fit bg-[#fff] p-2 rounded-none rounded-e-3xl rounded-bl-3xl">
                        <p>{props.message}</p>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default IncomingMessage;