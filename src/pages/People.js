import { DataStore } from "aws-amplify";
import ChatSidebar from "../components/ChatSidebar";
import Person from "../components/person";
import { User } from "../models";
import { useState, useEffect } from "react";


function People(){
    const [people, setPeople] = useState([])
    // useEffect(async()=>{
    //     // async ()=>{
            // await DataStore.query(User).then(data=>{
            //     setPeople(data)
            //     console.log(data.username)
            // })
    //         // console.log(people)
    //     // }
    // },[])
    // const fetchPeople = 
    // useEffect(async()=>{
    //     await DataStore.query(User).then(data=>{
    //         setPeople(data)
    //         console.log(people)
    //     })
    // })
    // people.map(p=>{

    //     <Person name="test"/>
    //     console.log(p.email)
    // })
    return (
        <>
        <div className='flex h-scren text-white'>
          <ChatSidebar/>
          <div className="overflow-y-scroll h-screen w-1/2 ">
                <h3>People you may know</h3>
                

                {/* {people.map((p, index)=><p className="text-black" key={index}>{p.email}</p>)} */}
                <div className="grid grid-cols-3">
                    <Person name="test" email="test@test.com"/>
                    <Person name="test"/>
                    <Person name="test"/>
                    <Person name="test" email="test@test.com"/>
                    <Person name="test"/>
                    <Person name="test"/>
                    <Person name="test" email="test@test.com"/>
                    <Person name="test"/>
                    <Person name="test"/>
                    <Person name="test" email="test@test.com"/>
                    <Person name="test"/>
                    <Person name="test"/>
                    <Person name="test" email="test@test.com"/>
                    <Person name="test"/>
                    <Person name="test"/>
                </div>
                {/* <button onClick={fetchPeople} className="bg-blue-500">GET</button> */}

            </div>
        </div>
            
        </>
    )
}

export default People