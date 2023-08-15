import { useEffect, useState, useRef } from "react"
import IncomingMessage from "./IncomingMessage"
import MessageFormField from "./MessageFormField"
import OutgoingMessage from "./OutgoingMessage"
import { Message } from "../models"
import { DataStore, Predicates, SortDirection } from "aws-amplify"

function ChatsScreen(props){
    const [messages, setMessages] = useState([])
    const user = localStorage.getItem('user')
    const userId = JSON.parse(user).attributes.sub
    console.log("mesage>>>>>>>>",JSON.parse(user).attributes.sub)
    const ref = useRef();

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
        DataStore.observeQuery(Message, Predicates.ALL, {
            sort: (s) => s.createdAt(SortDirection.ASCENDING)
        }).subscribe(snapshot=>{
            const {items, isSynced} = snapshot
            console.log(`[Snapshot] item count: ${items}, isSynced: ${isSynced}`);
            // if(isSynced){
                setMessages(items)
            // }
        })
    }
    
    return(
        <>
        <div className=" rounded-xl font-poppins">

                    <div id="msg" className="w-full p-5 sm:col-span-3 md:col-span-4 overflow-y-scroll bg-slate-200">
                        {
                            messages.map((msg=>{
                                if(msg.messageUserId == props.senderId && msg.messageMessageToId == userId ){
                                    return <IncomingMessage key={msg.id} sender={props.senderId} message={msg.message} time={msg.createdAt}/>
                                }
                                if(msg.messageMessageToId == props.senderId && msg.messageUserId == userId){
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