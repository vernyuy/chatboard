
import { Auth } from "aws-amplify";
import { DataStore } from 'aws-amplify';
import { User, Message, MessageType, MessageStatus } from "../../models";

const sendMessage = async (msg)=>{
    try{
        const test = await DataStore.save(
            new Message({
                messageType: MessageType.TEXT,
                messageStatus: MessageStatus.SENT,
                message: msg.content,
                messageUserId: msg.sender,
                messageTo: msg.receiver, 
                messageMessageToId: msg.receiver, 
                createdOn: Date(Date.now()),

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