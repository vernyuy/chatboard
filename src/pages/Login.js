import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login, signin, reset } from "../features/auth/userSlice";
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

function Login(){
    const localUser = localStorage.getItem('user')
    // const login = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const {user, message, isError, isLoading, isSuccess} = useSelector((state)=>state.user)
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        if(isSuccess && localUser){
            navigate('/people')
        }
        if(message === "User is not confirmed."){
            navigate('/confirm-signup', {state:{username:email}})
        }
        // dispatch(reset())
    }, [navigate, dispatch, isError, isLoading, isSuccess, message, user])

      const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(signin({
            email: email,
            password: pwd,
            loggedIn: true
        }))
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
                  <p className="text-center text-sm font-bold mb-4">Login to start chatting</p>
                <div>
                  {/* <div className="absolute top-0 left-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 36 36"><path fill="currentColor" d="m19.41 18l7.29-7.29a1 1 0 0 0-1.41-1.41L18 16.59l-7.29-7.3A1 1 0 0 0 9.3 10.7l7.29 7.3l-7.3 7.29a1 1 0 1 0 1.41 1.41l7.3-7.29l7.29 7.29a1 1 0 0 0 1.41-1.41Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg></div> */}
                    <p className="text-red-800">{message}</p>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <label for="input-group-1" className="block mb-2 text-xs font-medium text-grsday-900 dark:text-black">Email</label>
                        <div className="flex">
                        <input type="text" id="website-admin" value={email} onChange={(e) => setEmail(e.target.value)} className=" rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-blue-300 p-2.5  dark:bg-gray-50 dark:border-blue-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="me@me.com"/>
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
                        <input type="submit"  className="text-white mt-5 bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800" value="Log in"/>}
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
                    Don't have an account? <NavLink to="/signup" className={'text-blue-500 underline '}>Create account</NavLink>
                </div>
                </div>
                </div>
        </>
    )
}

export default Login;