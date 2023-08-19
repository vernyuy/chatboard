import { useEffect, useState, useRef, useId } from "react"
import IncomingMessage from "./IncomingMessage"
import MessageFormField from "./MessageFormField"
import OutgoingMessage from "./OutgoingMessage"
import { ChatRoom, Message, User } from "../models"
import { DataStore, Predicates, SortDirection } from "aws-amplify"

function GroupChatScreen(props){
    const [messages, setMessages] = useState([])
    const user = localStorage.getItem('user')
    const [userId, setUserId] = useState([])
    // console.log("mesage>>>>>>>>",JSON.parse(user).attributes.sub)
    const ref = useRef();
    // console.log("kkkkreceivloged",userId)
    console.log("kkkkksenderSidebar",props.senderId)
    useEffect(()=>{
        fetchMessages()
        const subscription = DataStore.observe(Message).subscribe(()=> fetchMessages())
      if (messages.length) {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } 
        return () => subscription.unsubscribe()
    },[messages.length, props.senderId, userId])

    async function fetchMessages(){
        const logUser = await DataStore.query(User, (p)=> p.cognitoId.eq(JSON.parse(user).attributes.sub))

        setUserId(logUser[0].id)
        console.log("kkkkreceivloged",logUser)
        const chatP = await DataStore.query(ChatRoom, (p)=> p.id.eq(props.senderId))
        await DataStore.query(Message,(msgs)=>msgs.receiver.eq(chatP[0].id)
        )
        .then(data=>{
            setMessages(data)
            console.log("kkkkk", data)
        })

        console.log(messages)
    }
    
    return(
        <>
        <div className=" rounded-xl font-poppins">

                    <div id="msg" className="w-full p-5 sm:col-span-3 md:col-span-4 overflow-y-scroll bg-slate-200">
                        {
                            messages.map((msg=>{
                            //    return <IncomingMessage key={msg.id} sender={props.senderId} message={msg.message} time={msg.createdAt}/>
                                if(msg.userMessageId == userId ){
                                    return <OutgoingMessage key={msg.id} message={msg.message} time={msg.createdAt}/>
                                }
                                else{
                                    return <IncomingMessage key={msg.id} conv='group' sender={msg.userMessageId} message={msg.message} time={msg.createdAt} />
                                }
                            }))
                        }
                    </div>
                    
                    <div className="sticky  bottom-0">
                            <MessageFormField receiverId={props.senderId}/>
                        </div>
               </div>
               <div ref={ref} />
        </>
    )
}

export default GroupChatScreen