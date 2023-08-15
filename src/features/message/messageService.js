
import { Auth } from "aws-amplify";
import { DataStore } from 'aws-amplify';
import { User, Message, MessageType } from "../../models";

const sendMessage = async (msg)=>{
    try{
        const sender = await DataStore.query(User, msg.sender)
        const test = await DataStore.save(
            new Message({
                messageType: MessageType.TEXT,
                message: msg.content,
                user: sender,
                receiver: msg.receiver, 
                created_at: Date.now()
            })
        )
        console.log(test)
        //     ))
    }catch(error){
        console.log(error)
        throw error
    }
}

const messageService = {
    sendMessage,
}

export default messageService