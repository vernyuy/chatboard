import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector"
function MessageFormField(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isSending, isSent, isError} = useSelector((state)=>state.msg)
    const [message, setMessage] = useState('')
    const sendMessage = (e)=>{
        e.preventDefault();
        console.log(message)
        // dispatch()
    }
    return(
        <>
            <div className="grid grid-cols-10 w-full gap-5 shadow-2xl shadow-black mt-5">
                {/* <div className="w-fit my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
                </div> */}
                <div className="col-span-8">
                    <textarea rows={3} type="text" className="h-12 w-full rounded-lg bg-transparent border border-slate-900 text-black px-3" placeholder="Leave a message" onChange={e=>setMessage(e.target.value)} />
                </div>
                <div className="w-fit my-auto col-span-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" onClick={sendMessage} height="2.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3"/></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.426 11.095l-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909l-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg> */}
                </div>
            </div>
        </>
    )
}

export default MessageFormField