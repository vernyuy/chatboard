import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { DataStore, Storage } from 'aws-amplify';
import {User} from '../models'
import { signup, reset } from "../features/auth/userSlice";
import { useSelector, useDispatch } from "react-redux";
function Register(){

    // const [email, setEmail] = useState('')
    // const [pwd, setPwd] = useState('')
    const [username, setUsername] = useState()
    const [img, setImg] = useState()
    // const navigate = useNavigate()
    // const dispatch = useDispatch()


    const dispatch = useDispatch()
    const {user, message, isError, isLoading, isSuccess, isConfirmed} = useSelector((state)=>state.user)
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate()

    // useEffect(()=>{
    //     if(isSuccess){
    //         navigate('/people')
    //     }
    //     if(message === "User is not confirmed."){
    //         navigate('/confirm-signup', {state:{username:email}})
    //     }

    // }, [navigate, dispatch, isError, isLoading, isSuccess, message, user])

    // const {user, isLoading, isSuccess, isConfirmed, message} = useSelector((state)=>state.user)


    async function signUp(){
        try{
            const {user} = await Auth.signUp({
                username: username,
                password: pwd,
                attributes:{
                    email: email
                },
                autoSignIn:{
                    enabled: true
                },
                autoVerify:{
                    enabled:true
                },
                autoConfirmSignUp:{
                    enabled:true
                }
            })
            console.log(user)
            if(user){
                const test = await DataStore.save(
                    new User({
                      id: user.sub,
                      username: username,
                      email: email,
                      image:'afdjsojdfdsaf'
                    })
                  );
                console.log(test)
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(!isConfirmed && isSuccess){
            navigate("/confirm-signup", {state:{username: username}})
        }
        dispatch(reset())
    }, [navigate, dispatch, isConfirmed])

    const handleSubmit = (e)=>{
        // console.log("hello")
        e.preventDefault()
        onChange(img)
    }

    // const test = ()=>{
    //   undraw_online_discussion_re_nn7e.svg
    // }
    // const [url, setUrl] = useState('')

    

    async function onChange(e) {
      const file = e.target.files[0];
      try {
        await Storage.put(file.name, file, {
          contentType: "image/png", // contentType is optional
        }).then(data=>{
          dispatch(signup({
            username: username,
            password: pwd,
            email: email,
            key: data.key
          }))
        })
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }

    const loginGoogle = async (e) => {
      console.log("Google login")
      const test = await Auth.federatedSignIn({provider: 'Google' })
      console.log(test)
    }
    return(
        <>
        <div className="max-w-[350px] min-w-3/12 bg-gray-300 rounded-xl m-auto">
                <div className="col-span- min-w-[300px] max-w-[300px] p-5 xxs:w-full xs:w-full  m-auto sm:w- md:w-8/12 md:px-0 my-auto">
                  <p className="text-center text-sm font-bold mb-4">Sign up to start chatting</p>
                <div>
                  {/* <div className="absolute top-0 left-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 36 36"><path fill="currentColor" d="m19.41 18l7.29-7.29a1 1 0 0 0-1.41-1.41L18 16.59l-7.29-7.3A1 1 0 0 0 9.3 10.7l7.29 7.3l-7.3 7.29a1 1 0 1 0 1.41 1.41l7.3-7.29l7.29 7.29a1 1 0 0 0 1.41-1.41Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg></div> */}
                    <p className="text-red-800">{message}</p>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <label for="input-group-1" className="block mb-2 text-xs font-medium text-grsday-900 dark:text-black">Email</label>
                        <div className="flex">
                        <input type="text" id="website-admin" value={email} onChange={(e) => setEmail(e.target.value)} className=" rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-blue-300 p-2.5  dark:bg-gray-50 dark:border-blue-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="me@me.com"/>
                        </div>
                        
                        
                        <label for="website-admin" className="block my-2 text-xs font-medium text-gray-900">username</label>
                        <div className="flex">
                        <input type="text" id="website-admin" value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-blue-300 p-2.5  dark:bg-gray-50 dark:border-blue-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username"/>
                        </div>
                        
                        <label for="website-admin" className="block my-2 text-xs font-medium text-gray-900">profile image</label>
                        <div className="flex">
                        <input type="file" id="website-admin" onChange={(e) => setImg(e)} className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-blue-300 p-2.5  dark:bg-gray-50 dark:border-blue-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username"/>
                        </div>

                        <label for="website-admin" className="block my-2 text-xs font-medium text-gray-900">Password</label>
                        <div className="flex">
                        <input type="password" id="website-admin" value={pwd} onChange={(e) => setPwd(e.target.value)} className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-blue-300 p-2.5  dark:bg-gray-50 dark:border-blue-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"/>
                        </div>
                        {isLoading?
                        <button type=""  className="text-white mt-5 flex justify-center bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" width="2.5em" height="1.5em" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="0" fill="currentColor">
                                    <animate id="svgSpinnersPulse30" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/>
                                    <animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/>
                                </circle>
                                <circle cx="12" cy="12" r="0" fill="currentColor">
                                    <animate id="svgSpinnersPulse31" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/>
                                    <animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/>
                                </circle>
                                <circle cx="12" cy="12" r="0" fill="currentColor">
                                    <animate id="svgSpinnersPulse32" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/>
                                    <animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/>
                                </circle>
                            </svg>
                            <p>Submit...</p>
                        </button>: 
                        <input type="submit"  className="text-white mt-5 bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800" value="Sign up"/>}
                    </form>
                </div>
                <p className="text-sm text-center mt-6">or continue with</p>
                <div className="mt-6 col-span- h-fit w-full text-center mx-auto">
                    <button type="button" onClick={loginGoogle} className="text-black w-full justify-center shadow-md hover:bg-gray-600 bg-gray-200 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                        className="mr-4"
                        >
                        <defs>
                            <path
                            id="A"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                            ></path>
                        </defs>
                        <clipPath id="B">
                            <use xlinkHref="#A"></use>
                        </clipPath>
                        <path
                            fill="#fbbc05"
                            d="M0 37V11l17 13z"
                            clipPath="url(#B)"
                            transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
                        ></path>
                        <path
                            fill="#ea4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                            clipPath="url(#B)"
                            transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
                        ></path>
                        <path
                            fill="#34a853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                            clipPath="url(#B)"
                            transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
                        ></path>
                        <path
                            fill="#4285f4"
                            d="M48 48L17 24l-4-3 35-10z"
                            clipPath="url(#B)"
                            transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
                        ></path>
                    </svg>
                        Google
                    </button>
                    {/* <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>Open Google</button> */}
      
                </div>

                <div className="mt-5 col-span- text-center">
                    Already have an account? <NavLink to="/" className={'text-blue-500 underline '}>Login</NavLink>
                </div>
                </div>
                </div>


{/* 
        <div className="grid sm:grid-cols-2 w-screen mx-auto h-screen">
            <div className="col-span- w-full px-5 xxs:px-10 xxs:w-full xs:w-full xs:px-24 m-auto sm:w- sm:px-5 md:w-8/12 md:px-0">
                    {/* {email} *
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <div className="relative mb-">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input type="text" id="input-group-1"value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username"/>
                        </div>
                        <label for="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <div className="flex">

                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                        </span>
                        <input type="email" id="website-admin" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email"/>
                        </div>

                        <div className="flex mt-6">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                        </span>
                        <input type="password" id="website-admin" value={pwd} onChange={(e) => setPwd(e.target.value)} className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"/>
                        </div>

                        <div className="flex mt-6">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                        </span>
                        <input type="file" onChange={(e) => setImg(e)}  id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"/>
                        </div>

                        <input type="submit" className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium w-full rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="Sign In"/>
                    </form>
                    <div className="xs:flex justify-between">
                <div className="mt-12 col-span- h-fit w-fit mx-auto">
                    <button type="button" className="text-black w-full shadow-xl hover:bg-[#4285F4]/90 bg-gray-200 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                        className="mr-4"
                        >
                        <defs>
                            <path
                            id="A"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                            ></path>
                        </defs>
                        <clipPath id="B">
                            <use xlinkHref="#A"></use>
                        </clipPath>
                        <path
                            fill="#fbbc05"
                            d="M0 37V11l17 13z"
                            clipPath="url(#B)"
                            transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
                        ></path>
                        <path
                            fill="#ea4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                            clipPath="url(#B)"
                            transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
                        ></path>
                        <path
                            fill="#34a853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                            clipPath="url(#B)"
                            transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
                        ></path>
                        <path
                            fill="#4285f4"
                            d="M48 48L17 24l-4-3 35-10z"
                            clipPath="url(#B)"
                            transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
                        ></path>
                    </svg>
                        Continue with Google
                    </button>
                </div>

                <div className="mt-12 col-span- text-center">
                    <NavLink to="/" className={'text-blue-500 underline '}>Login Instead</NavLink>
                </div>
                </div>
                </div> */}
                {/* <div className="col-span- bg-blue-700 px-5 rounded-s-[40px] hidden sm:block">
                <svg
      xmlns="http://www.w3.org/2000/svg"
    //   width="770" 
    //   height="582"
        className="w-11/12 h-full"
      data-name="Layer 1"
      viewBox="0 0 783.86 582"
    >
      <path
        fill="#e6e6e6"
        d="M255.368 631.65a383.363 383.363 0 0017.91 105.973c.242.797.511 1.58.772 2.377h66.833c-.07-.714-.143-1.51-.213-2.377-4.456-51.228 21-359.303 51.72-412.623-2.692 4.325-142.204 143.873-137.022 306.65z"
        data-name="Path 133"
        transform="translate(-208.07 -159)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M260.383 737.623c.56.796 1.14 1.593 1.735 2.377h50.14c-.38-.678-.82-1.474-1.331-2.377-8.283-14.948-32.798-59.641-55.554-105.973-24.445-49.791-46.891-101.47-45.001-120.174-.586 4.216-17.509 132.817 50.011 226.147z"
        data-name="Path 134"
        transform="translate(-208.07 -159)"
      ></path>
      <path
        fill="#9e616a"
        d="M266.73 398.376a11.575 11.575 0 00-.335 1.792l-48.28 25.355-11.21-7.06-12.865 15.526 18.63 14.426a8.797 8.797 0 0010.557.162l50.194-36.464a11.543 11.543 0 10-6.691-13.737z"
      ></path>
      <path
        fill="#9e616a"
        d="M324.938 570.183L334.619 563.957 315.213 523.657 300.926 532.845 324.938 570.183z"
      ></path>
      <path
        fill="#2f2e41"
        d="M320.437 568.61l19.063-12.26h.001a14.445 14.445 0 0119.962 4.336l.254.395-31.213 20.073zM185.47 500.96l74.307-47.576s13.653-1.318 21.847 14.83l49.49 71.088-21.115 14.287-54.916-57.021-37.683 37.268s55.52-9.105 53.642 27.507c-1.49 29.056-77.477 19.089-108.78 13.737a41.049 41.049 0 01-28.764-19.691c-3.358-5.823-5.162-12.435-2.342-18.685 7.52-16.667 54.314-35.745 54.314-35.745z"
      ></path>
      <path
        fill="#6c63ff"
        d="M148.633 540.72l-21.414-4.334 6.102-105.101 24.64-30.18 14.68-2.6a17.736 17.736 0 0120.291 12.84l6.47 23.639c10.98 18.589-4.4 40.143-5.819 42.058l.8 32.599z"
      ></path>
      <path
        fill="#6c63ff"
        d="M168.572 405.221l1.359-4.806s14.744-10.868 37.275 17.295l-10.796 19.245-23.47-.938z"
      ></path>
      <path
        fill="#2f2e41"
        d="M202.49 367.818c4.178 17.124-12.288 18.396-31.82 23.16s-34.733 11.217-38.91-5.906-3.847-49.363 23.784-56.103c28.583-6.973 42.77 21.726 46.947 38.85z"
      ></path>
      <circle cx="164.74" cy="367.182" r="24.495" fill="#9e616a"></circle>
      <path
        fill="#2f2e41"
        d="M136.675 371.554l9.413-2.296 1.316-12.64 3.666 11.425 4.5-1.098.767-7.373 2.139 6.664 33.427-8.154a25.93 25.93 0 00-31.337-19.046l-4.844 1.181a25.93 25.93 0 00-19.047 31.337z"
      ></path>
      <path
        fill="#9e616a"
        d="M206.69 488.31a11.574 11.574 0 00-1.721.598l-45.955-29.359.574-13.236-19.862-3.476-3.293 23.332a8.797 8.797 0 005.093 9.248l56.552 25.515a11.543 11.543 0 108.613-12.621z"
      ></path>
      <path
        fill="#6c63ff"
        d="M161.677 405.902l-3.463-4.366s-13.906-4.479-21.416 14.297-.47 37.082-.47 37.082l32.857 2.816 2.347-30.51z"
      ></path>
      <path
        fill="#e6e6e6"
        d="M527.283 130.684L783.86 130.684 783.86 214.914 774.142 214.914 774.142 236.943 752.112 214.914 527.283 214.914 527.283 130.684z"
      ></path>
      <path
        fill="#fff"
        d="M534.41 138.886H776.7339999999999V206.26999999999998H534.41z"
      ></path>
      <path fill="#6c63ff" d="M553.896 158.559H670.569V162.1H553.896z"></path>
      <path fill="#e6e6e6" d="M553.896 170.808H757.247V174.349H553.896z"></path>
      <path fill="#e6e6e6" d="M553.896 183.056H757.047V186.597H553.896z"></path>
      <path
        fill="#e6e6e6"
        d="M630.506 0L373.928 0 373.928 84.23 383.647 84.23 383.647 106.26 405.676 84.23 630.506 84.23 630.506 0z"
      ></path>
      <path fill="#fff" d="M381.055 8.202H623.379V75.586H381.055z"></path>
      <path fill="#6c63ff" d="M402.485 28.524H519.158V32.065H402.485z"></path>
      <path
        fill="#e6e6e6"
        d="M402.485 40.772H605.836V44.312999999999995H402.485z"
      ></path>
      <path fill="#e6e6e6" d="M402.485 53.021H605.636V56.562H402.485z"></path>
      <path
        fill="#3f3d56"
        d="M312.865 379.645h-.455v-12.443A7.202 7.202 0 00305.21 360h-26.363a7.202 7.202 0 00-7.202 7.202v68.264a7.202 7.202 0 007.202 7.202h26.363a7.202 7.202 0 007.201-7.202v-46.964h.455z"
      ></path>
      <path
        fill="#fff"
        d="M305.5 361.874h-3.442a2.555 2.555 0 01-2.366 3.52H284.59a2.555 2.555 0 01-2.365-3.52h-3.214a5.378 5.378 0 00-5.379 5.378v68.164a5.378 5.378 0 005.379 5.378h26.49a5.378 5.378 0 005.377-5.378v-68.164a5.378 5.378 0 00-5.378-5.378z"
      ></path>
      <path
        fill="#fff"
        d="M598.506 248.549L283.441 248.549 283.441 351.98 295.375 351.98 295.375 379.03 322.426 351.98 598.506 351.98 598.506 248.549z"
      ></path>
      <path
        fill="#3f3d56"
        d="M294.375 381.444V352.98h-11.934V247.55h317.065v105.43H322.84zm-9.934-30.465h11.934v25.637l25.637-25.637h275.494V249.55H284.44z"
      ></path>
      <path
        fill="#6c63ff"
        d="M318.508 283.575H461.77599999999995V287.923H318.508z"
      ></path>
      <path fill="#e6e6e6" d="M318.508 298.615H568.212V302.963H318.508z"></path>
      <path fill="#e6e6e6" d="M318.508 313.656H567.968V318.004H318.508z"></path>
      <path
        fill="#3f3d56"
        d="M428.892 582h-381a1 1 0 010-2h381a1 1 0 110 2z"
      ></path>
    </svg>
                </div> 
            </div>*/}
        </>
    )
}

export default Register;