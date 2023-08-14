import { useEffect, useState } from "react"
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

    useEffect(()=>{
        // document.getElementById('msg').scrollTo(0, 400)
        fetchMessages()
        const subscription = DataStore.observe(Message).subscribe(()=> fetchMessages())
        return () => subscription.unsubscribe()
    },[])

    async function fetchMessages(){
        DataStore.observeQuery(Message, Predicates.ALL, {
            sort: (s) => s.createdAt(SortDirection.ASCENDING)
        }).subscribe(snapshot=>{
            const {items, isSynced} = snapshot
            console.log(`[Snapshot] item count: ${items}, isSynced: ${isSynced}`);

            // .then((data)=>{
            //     console.log(data)
                setMessages(items)
            // })
        })
    }
    
    return(
        <>
        <div className="sm:grid sm:grid-cols-3 md:grid-cols-4 max-h-screen gap-3 bg-white h-full my-2 rounded-xl">
                    {/* <div className=" w-full rounded-s-xl border-e-2">
                        {/* <Person receiverId={'person.id'} name={'person.username'} email={'person.email'}/>
                        <Person receiverId={'person.id'} name={'person.username'} email={'person.email'}/> /}
                    </div> */}

                    <div id="msg" className="w-full p-5 sm:col-span-3 md:col-span-4 overflow-y-scroll">
                        {/* sdjflkdjgl */}
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
                        {/* <IncomingMessage message="Incoming message"/>
                        <OutgoingMessage message="Incoming message"/>
                        <IncomingMessage message="Incoming message"/>
                        <OutgoingMessage message="Incoming message"/>
                        <IncomingMessage message="Incoming message"/>
                        <OutgoingMessage message="Incoming message"/>
                        <IncomingMessage message="Incoming message"/>
                        <OutgoingMessage message="Incoming message"/>
                        <IncomingMessage message="Incoming message"/>
                        <OutgoingMessage message="Incoming message"/> */}
                        {/* {people.map(person=><Person receiverId={person.id} name={person.username} email={person.email}/>)} */}
                        <div className="sticky w-full bottom-0">
                            <MessageFormField receiverId={props.senderId}/>
                        </div>
                    </div>
               </div>
        </>
    )
}

export default ChatsScreen