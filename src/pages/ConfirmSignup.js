import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmSignup, resendSignupCode } from "../features/auth/userSlice";
import { useLocation } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function ConfirmSignup(){

    const [code, setCode] = useState()
    // const [pwd, setPwd] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const username = "navigate"
    const location = useLocation()
    console.log(location.state.username)

    const {isError, isSuccess, isConfirmed, user} = useSelector(state => state.user)
    console.log(user, isConfirmed, isSuccess)

    useEffect(()=>{
        if(isSuccess){
            navigate("/")
        }
        if(isError){
            console.log("Failed to confirm user singup")
        }
    }, [dispatch, navigate, isSuccess, isError, user])
    const confirmSignUp = () => {
        dispatch(confirmSignup({username: location.state.username, code}))
      }

      const resendCode = ()=>{
        dispatch(resendSignupCode({username:location.state.username}))
      }

    return(
        <>
        <div className="grid sm:grid-cols-2 w-screen mx-auto h-screen">
            <div className="col-span- w-full px-5 xxs:px-10 xxs:w-full xs:w-full xs:px-24 m-auto sm:w- sm:px-5 md:w-8/12 md:px-0">
                    <h4 className="font-bold text-blue-500 text-xl">Confirm Registration</h4>
                    <p>Please enter the code sent to your email</p>
                    <form>
                        <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <div className="relative mb-">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input type="text" id="input-group-1"value={code} onChange={(e) => setCode(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="code"/>
                        </div>
                        <label for="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                        <div className="xs:flex xs:justify-between">

                            <input type="button" onClick={confirmSignUp} className="text-white w-full sm:w-fit mt-5 bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="Confirm Signup"/>

                            <input type="button" onClick={resendCode} className="text-white w-full mt-5 sm:w-fit bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="Resend code"/>
                        </div>
                    </form>
                </div>
                <div className="col-span- bg-blue-700 px-5 rounded-s-[40px] hidden sm:block">
                <svg
      xmlns="http://www.w3.org/2000/svg"
    //   width="793"
    //   height="551.732"
        className="w-11/12 h-full"
      data-name="Layer 1"
      viewBox="0 0 793 551.732"
    >
      <ellipse cx="158" cy="539.732" fill="#e6e6e6" rx="158" ry="12"></ellipse>
      <path
        fill="#2f2e41"
        d="M120.772 122.42c27.497-11.696 61.745-4.286 95.191.857.311-6.228 4.084-13.808.132-18.153-4.801-5.279-4.359-10.825-1.47-16.403 7.388-14.265-3.197-29.444-13.884-42.065a23.67 23.67 0 00-19.756-8.292l-19.797 1.414a23.71 23.71 0 00-21.053 16.946c-4.727 6.43-7.257 12.84-5.664 19.219-7.081 4.839-8.27 10.68-5.089 17.264 2.698 4.146 2.67 8.182-.123 12.106a55.89 55.89 0 00-8.31 16.506zM774.209 476.963H213.79A18.791 18.791 0 01195 458.172q304.727-35.415 598 0a18.791 18.791 0 01-18.791 18.791z"
      ></path>
      <path
        fill="#3f3d56"
        d="M793 459.277l-598-1.105 69.306-116.616.332-.552V83.996a23.752 23.752 0 0123.754-23.754h407.9a23.752 23.752 0 0123.754 23.754v258.776z"
      ></path>
      <path
        fill="#fff"
        d="M287.85 76.823a7.746 7.746 0 00-7.737 7.737v234.336a7.747 7.747 0 007.737 7.738h412.3a7.747 7.747 0 007.737-7.738V84.56a7.747 7.747 0 00-7.737-7.737z"
      ></path>
      <path
        fill="#2f2e41"
        d="M289.578 357.584a3.325 3.325 0 00-3.013 1.93L265.21 405.94a3.316 3.316 0 003.012 4.702h449.092a3.316 3.316 0 002.965-4.799l-23.212-46.425a3.3 3.3 0 00-2.965-1.833z"
      ></path>
      <circle cx="492.342" cy="67.98" r="4.974" fill="#fff"></circle>
      <path
        fill="#2f2e41"
        d="M448.2 419.484a3.321 3.321 0 00-3.202 2.454l-5.357 19.896a3.316 3.316 0 003.202 4.179h101.874a3.315 3.315 0 003.133-4.401l-6.887-19.896a3.318 3.318 0 00-3.134-2.232z"
      ></path>
      <path
        fill="#2f2e41"
        d="M720.046 337.135L720.046 341.556 264.306 341.556 264.649 341.004 264.649 337.135 720.046 337.135z"
      ></path>
      <circle cx="707.335" cy="77.375" r="77.375" fill="#6c63ff"></circle>
      <path
        fill="#fff"
        d="M739.39 111.089h-64.11a4.426 4.426 0 01-4.422-4.422V67.98a4.426 4.426 0 014.421-4.422h64.111a4.426 4.426 0 014.421 4.422v38.687a4.426 4.426 0 01-4.421 4.422zm-64.11-43.11v38.688h64.113l-.003-38.687z"
      ></path>
      <path
        fill="#fff"
        d="M727.231 67.98h-39.793V50.294c0-12.81 8.368-22.107 19.897-22.107s19.896 9.297 19.896 22.107zm-35.371-4.422h30.95V50.294c0-10.413-6.364-17.686-15.475-17.686s-15.475 7.273-15.475 17.686z"
      ></path>
      <circle cx="707.335" cy="86.218" r="4.421" fill="#fff"></circle>
      <path
        fill="#e6e6e6"
        d="M653.32 247.15H334.68a5.908 5.908 0 01-5.9-5.901v-79.041a5.908 5.908 0 015.9-5.901h318.64a5.908 5.908 0 015.9 5.9v79.042a5.908 5.908 0 01-5.9 5.9zm-318.64-88.483a3.544 3.544 0 00-3.54 3.54v79.042a3.544 3.544 0 003.54 3.54h318.64a3.544 3.544 0 003.54-3.54v-79.041a3.544 3.544 0 00-3.54-3.54z"
      ></path>
      <circle cx="384.19" cy="198.695" r="24.036" fill="#e6e6e6"></circle>
      <path
        fill="#e6e6e6"
        d="M439.703 182.671a4.006 4.006 0 100 8.012h188.858a4.006 4.006 0 000-8.012zM439.703 206.708a4.006 4.006 0 100 8.012h81.266a4.006 4.006 0 100-8.012z"
      ></path>
      <path
        fill="#ffb8b8"
        d="M263.522 208.328l-58.903 31.316-.746-26.097c19.226-3.209 37.517-8.797 54.43-17.894l6.16-15.22A10.318 10.318 0 01282 177.755a10.318 10.318 0 01-.909 14.069z"
      ></path>
      <path
        fill="#2f2e41"
        d="M119.598 389.133a11.574 11.574 0 011.47-9.363l12.939-19.858a22.612 22.612 0 0129.335-7.74c-5.438 9.257-4.68 17.377 1.878 24.434a117.63 117.63 0 00-27.936 19.045 11.574 11.574 0 01-17.686-6.518z"
      ></path>
      <path
        fill="#2f2e41"
        d="M266.205 363.168a22.203 22.203 0 01-18.871 10.78l-85.96.65-3.728-21.622 38.026-11.184-32.062-24.605 35.044-41.008 63.65 59.324a22.203 22.203 0 013.9 27.666z"
      ></path>
      <path
        fill="#2f2e41"
        d="M147.953 511.045H127.82c-18.075-123.898-36.474-248.142 17.895-294.515l64.122 10.438-8.202 54.43-35.789 41.008z"
      ></path>
      <path
        fill="#2f2e41"
        d="M165.65 539.112a11.574 11.574 0 01-9.364-1.469l-21.859-2.938a22.612 22.612 0 01-7.74-29.335c9.256 5.438 17.377 4.68 24.433-1.88 4.986 10.068 13.2 9.454 21.047 17.936a11.574 11.574 0 01-6.518 17.686z"
      ></path>
      <path
        fill="#ffb8b8"
        d="M195.672 133.767l-37.28-8.947c6.19-12.674 6.7-26.776 3.727-41.754l25.35-.746c.795 18.626 3.198 36.027 8.203 51.447z"
      ></path>
      <path
        fill="#6c63ff"
        d="M205.918 249.418c-27.14 18.493-46.315.633-60.948-26.923 2.034-16.862-1.259-37.04-7.356-58.967a40.138 40.138 0 0124.505-48.4l32.061 13.42c27.224 22.19 32.582 46.227 22.369 71.579z"
      ></path>
      <path
        fill="#ffb8b8"
        d="M127.821 152.408l-29.824 15.657 52.938 31.316 7.366 18.17a9.637 9.637 0 01-5.79 12.73 9.637 9.637 0 01-12.76-8.544l-.746-12.663-67.283-22.204a15.733 15.733 0 01-9.873-9.611 15.733 15.733 0 015.903-18.303l54.104-37.118z"
      ></path>
      <path
        fill="#6c63ff"
        d="M157.646 155.39c-12.439-5.451-23.75.47-38.026 5.22l-2.237-39.518c14.176-7.556 27.692-9.593 40.263-3.728z"
      ></path>
      <circle cx="172.525" cy="78.093" r="23.802" fill="#ffb8b8"></circle>
      <path
        fill="#2f2e41"
        d="M201 75.09c-23.566 2.307-41.523-1.547-53-12.52v-8.838h51z"
      ></path>
    </svg>
                </div>
            </div>
        </>
    )
}

export default ConfirmSignup;