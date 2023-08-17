import ChatSidebar from "../components/ChatSidebar";
import Person from "../components/person";
import ChatsScreen from "../components/ChatsScreen";
import { NavLink } from "react-router-dom";
import { AddPerson } from "./icons/AddPerson";
import pic1 from '../pic1.jpeg'
import { InboxIcon } from "./icons/InboxIcon";
import { User } from "../models";
import { DataStore, Storage } from "aws-amplify";
import { useEffect, useState } from "react";

function Navbar(){
    const user = JSON.parse(localStorage.getItem('user'));
    const [person, setPerson] = useState([])
    console.log(">>>>>", user)
    useEffect(()=>{
            
             getUser()
    },[])
    
    async function getUser(){
        console.log(await DataStore.query(User))
        await DataStore.query(User, (p)=>p.cognitoId.eq(user.attributes.sub)).then(data=>{
            setPerson(data)
            data.map(d=>getFileProperties(d.profileImageUrl))
            console.log(data)
        })
    }
    const [url, setUrl] = useState('')
    // async function getImage(key){
    //     const res = await Storage.get(key)
    // }
    async function getFileProperties(key) {
        console.log(key)
        try {
          const result = await Storage.get(key);
          console.log('File Properties ', result);
          setUrl(result)
        } catch (error) {
          console.log('Error ', error);
        }
      }
    return (
        <>
            <div className="h-fit flex justify-start pr-4">
                <div className="p-4 w- mr-8">
                    <span className="font-poppins text-3xl text-black font-bold">Chat<strong className="text-blue-700">Board</strong></span>
                </div>
                <div className="w-9/12 flex justify-s justify-start gap-2">
                    <div className="my-auto w-2/12">
                        <NavLink to="#" className="flex">
                            <span className="my-auto mr-2"><AddPerson color="gray" height="1.2em" width="1.2em"/></span> 
                            <span className="font-poppins  text-[12px]">Contacts</span>
                        </NavLink>
                    </div>
                    <div className="my-auto w-2/12">
                        <NavLink to="#" className="flex">
                            <span><AddPerson/></span> 
                            <span className="font-poppins  text-[12px]">Pipeline</span>
                            
                        </NavLink>
                    </div>
                    <div className="my-auto h-full w-2/12  font-poppins ">
                        <NavLink to="#" className="flex text-blue-700 truncate border-b-2 my-auto w-fit h-full border-blue-700 text-[12px]">
                            <span className="my-auto mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="1.2em" height="1.2em" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 0 0-2.54-3.8a199.81 199.81 0 0 1-33-110C47.64 139.09 140.72 48 255.82 48C356.2 48 440 117.54 459.57 209.85a199 199 0 0 1 4.43 41.64c0 112.41-89.49 204.93-204.59 204.93c-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 0 0-11.13-2.07a30.7 30.7 0 0 0-12.08 2.43L81.5 462.78a15.92 15.92 0 0 1-4.66 1.22a9.61 9.61 0 0 1-9.58-9.74a15.85 15.85 0 0 1 .6-3.29Z"></path>
                                    <circle cx="160" cy="256" r="32" fill="currentColor"></circle>
                                    <circle cx="256" cy="256" r="32" fill="currentColor"></circle>
                                    <circle cx="352" cy="256" r="32" fill="currentColor"></circle>
                                    </svg>
                                </span> 
                                <span className="my-auto">Conversations</span>
                        </NavLink>
                    </div>
                    <div className="my-auto w-2/12">
                        <NavLink to="#" className="flex font-poppins">
                            <span className="my-auto mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="1.18em" height="1.18em" color="gray" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153ZM6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14ZM7.25 8A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"></path></svg></span> 
                            <span className="my-auto text-[14px]">Campaigns</span>
                        </NavLink>
                    </div>
                </div>
                <div className="flex justify-end w-4/12">
                    <div className="my-auto">
                        <div className="flex border-r px-2 my-auto">
                            <span className="my-auto mr-2">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76c-24.3-12.24-26.3-13.24-45.4.95c-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39s-47.34-61.62-50.53-76.48s5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3c-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64s54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z"></path></svg></span> 
                            <span className="my-auto mr-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14ZM48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2Zm160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2Zm-98-90v64a6 6 0 0 1-12 0v-54.29l-7.32 3.66a6 6 0 1 1-5.36-10.74l16-8A6 6 0 0 1 110 120Zm59.57 29.25L148 178h20a6 6 0 0 1 0 12h-32a6 6 0 0 1-4.8-9.6L160 142a10 10 0 1 0-16.65-11a6 6 0 1 1-10.35-6a22 22 0 1 1 36.62 24.26Z"></path></svg>
                                <p className=" h-1 w-1 rounded-full absolute"></p>
                            </span>
                            <p className="text-[14px] font-poppins">{Date(Date.now()).split(' ')[1]} - {Date(Date.now()).split(' ')[2]} - {Date(Date.now()).split(' ')[3]}</p>
                            <span className="my-auto ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" color="gray" height="1em" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" fill="currentColor"></path></svg></span>
                        </div>
                    </div>

                    {person.map(p=>
                    <div key={p.cognitoId} className="my-auto flex">
                        <div className={`h-8 w-8 bg-gray-400 rounded-full mx-2`}>
                            {/* {setKey(p.profileImageUrl)} */}
                            {console.log("uuuuu",url)}
                            <img className="h-full w-full rounded-full" src={url}/> 
                        </div>
                        
                        <span className="my-auto font-poppins text-[14px]">{p.username}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" className="my-auto mx-1" color="blue" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 10H4l5.5-6M4 14h16l-5.5 6"></path></svg>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Navbar