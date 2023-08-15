import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../features/message/messageSlice";
import { DataStore } from "aws-amplify";
import { Message } from "../models";
function MessageFormField(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = localStorage.getItem('user')
    const userId = JSON.parse(user).attributes.sub
    console.log("mesage>>>>>>>>",JSON.parse(user).attributes.sub)
    const [message, setMessage] = useState('')
    useEffect(()=>{
        DataStore.observe(Message).subscribe(msg=>{
            console.log("New, message = ", msg.model)
        })
    }, [])
    const sendMsg = async(e)=>{
        e.preventDefault();
        // console.log(message)
        // const test = await DataStore.query(Message).then(
        //     async(data)=>{
        //         console.log(data)
        //         // data.map(element => {
        //         //     console.log(element)
        //         // });
        //     //    console.log(  data[0].chatRooms) 
        //     }
        // )
        // console.log(test)

        dispatch(sendMessage({
            sender: userId,
            receiver: props.receiverId,
            content: message
        }))
    }
    return(
        <>
            <div className="h-20  bg-slate-200">
                <div className=" h-18 shadow-xl border bg-white mx-4  justify-evenly rounded-xl flex">
                <div className="my-auto ml-1 rounded-md">
                    <span className="my-auto h-full cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" color="gray" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64Zm-80 64a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48ZM96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416Zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84Z"></path></svg></span>
                </div>
                
                <div className="w-full h-12 my-auto">
                    <input type="text" className="h-full w-9/12 outline-none rounded-none bg-transparent border-none text-black font-poppins text-[14px] px-3" placeholder="Leave a message" onChange={e=>setMessage(e.target.value)} />
                </div>
                <div className="my-auto mx-2 cursor-pointer rounded-md text-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" color="gray" height="1.7em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path strokeDasharray="60" strokeDashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path strokeDasharray="14" strokeDashoffset="14" d="M8 14C8.5 15.5 9.79086 17 12 17C14.2091 17 15.5 15.5 16 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="14;0"></animate></path></g><g fill="currentColor" fillOpacity="0"><ellipse cx="9" cy="9.5" rx="1" ry="1.5"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.2s" values="0;1"></animate></ellipse><ellipse cx="15" cy="9.5" rx="1" ry="1.5"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></animate></ellipse></g></svg>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path strokeDasharray="60" strokeDashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path strokeDasharray="14" strokeDashoffset="14" d="M8 14C8.5 15.5 9.79086 17 12 17C14.2091 17 15.5 15.5 16 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="14;0"></animate></path></g><g fill="currentColor" fillOpacity="0"><ellipse cx="9" cy="9.5" rx="1" ry="1.5"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.2s" values="0;1"></animate></ellipse><ellipse cx="15" cy="9.5" rx="1" ry="1.5"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></animate></ellipse></g></svg> */}
                <div className="my-auto bg-blue-700 p-1 cursor-pointer rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={sendMsg} width="1.5em" height="1.5em" color="white" viewBox="0 0 24 24"><path fill="currentColor" d="m21.426 11.095l-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909l-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg>
                </div>
                </div>
            </div>
        </>
    )
}

export default MessageFormField