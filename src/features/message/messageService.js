
import { Auth } from "aws-amplify";
import { DataStore } from 'aws-amplify';
import { User, Message } from "../../models";

const sendMessage = async (msg)=>{
    try{
        const test = await DataStore.save(
            new Message({
                message: msg.content,
                user: msg.sender,
                message: msg.receiver,
            })
        )
        console.log(test)
        //     ))
    }catch(error){
        console.log(error)
        throw error
    }
}

const authService = {
    sendMessage,
}

export default messageService