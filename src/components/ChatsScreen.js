import { useEffect, useState, useRef, useId } from "react"
import IncomingMessage from "./IncomingMessage"
import MessageFormField from "./MessageFormField"
import OutgoingMessage from "./OutgoingMessage"
import { Message, User } from "../models"
import { DataStore, Predicates, SortDirection } from "aws-amplify"

function ChatsScreen(props){
    const [messages, setMessages] = useState([])
    const user = localStorage.getItem('user')
    const userId = JSON.parse(user).attributes.sub
    // console.log("mesage>>>>>>>>",JSON.parse(user).attributes.sub)
    const ref = useRef();
    console.log("kkkkreceivloged",userId)
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
    },[messages.length])

    async function fetchMessages(){
        const logUser = await DataStore.query(User, (p)=> p.cognitoId.eq(userId))
        const chatP = await DataStore.query(User, (p)=> p.cognitoId.eq(props.senderId))
        console.log(logUser)
        await DataStore.query(Message,(msgs)=>msgs.
        or(m=>[
            m.and(
            msgs => [msgs.receiver.eq(logUser[0].cognitoId), msgs.userMessageId.eq(chatP[0].id)]
        ), 
        m.and(
            msgs => [msgs.receiver.eq(chatP[0].cognitoId), msgs.userMessageId.eq(logUser[0].id)]
        )] ),
        {
            sort: s => s.createdAt(SortDirection.ASCENDING)
          }
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
                                if(msg.receiver == userId ){
                                    return <IncomingMessage key={msg.id} sender={props.senderId} message={msg.message} time={msg.createdAt}/>
                                }
                                else{
                                    return <OutgoingMessage key={msg.id} message={msg.message} time={msg.createdAt}/>
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

export default ChatsScreen