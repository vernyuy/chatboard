
import { Auth } from "aws-amplify";
import { DataStore } from 'aws-amplify';
import { User, Message, MessageType } from "../../models";

const sendMessage = async (msg)=>{
    console.log('kkk', msg)
    try{
        const sender = await DataStore.query(User, (user)=>user.cognitoId.eq(msg.sender))
        console.log("aaaa>>>>>>",sender[0])
        const test = await DataStore.save(
            new Message({
                messageType: MessageType.TEXT,
                message: msg.content,
                user: sender[0],
                receiver: msg.receiver  
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