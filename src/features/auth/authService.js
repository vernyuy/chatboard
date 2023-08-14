
import { Auth } from "aws-amplify";
// import {User} from '../../models'
import { createSlice } from "@reduxjs/toolkit";
import { DataStore } from 'aws-amplify';
import { User, UserStatus } from "../../models";

const signup = async (user)=>{
    try{
        console.log("signing up")
         const test1 = await Auth.signUp({
            username: user.username,
            password: user.password,
            attributes:{
                email: user.mail
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
        }).then(data=>{
          const test = DataStore.save(
            new User({
                username: user.username,
                email:user.email,
                cognitoId: data.userSub,
                profileImageUrf:"test",
                // createdAt: AWS,
                // updatedAt: Date.now.toString(),
                userStatus: UserStatus.ACTIVE
            })
        )
        console.log(test)
        })
        console.log(test1)
        // const test = await DataStore.save(
        //     new User({
        //         username: user.username,
        //         email:user.email,
        //         cognitoId: test1.userSub,
        //         profileImageUrf:"test",
        //         // createdAt: AWS,
        //         // updatedAt: Date.now.toString(),
        //         userStatus: UserStatus.ACTIVE
        //     })
        // )
        // console.log(test)
        //     ))
    }catch(error){
        console.log(error)
        throw error
    }
}

const signin = async (user)=>{
    try {
        const userInfo = await Auth.signIn(user.email, user.password);
        console.log(">>>>>>>>>>>>>>>>",userInfo)
        localStorage.setItem('user', JSON.stringify(userInfo))
        // navigate('/home')
        return userInfo
      } catch (error) {
        // console.log(error.UserNotFoundException);
        // const {code, message} = error
        // if(){
            // console.log(error.code)
            // console.log(message)
        // }
        // if(err.m)
        throw error
      }
}

const confirmUser = async (user) => {
    try {
      const res = await Auth.confirmSignUp(user.username, user.code);
      console.log(res);
      return res;
    } catch (error) {
      console.log('error confirming sign up', error);
      throw error
    }
  }

  const resendCode = async (user) =>{
    try{
        const res = await Auth.resendSignUp(user.username)
        console.log(res, "code sent");
    }catch(err){
        console.log(err)
    }
  }

  const logOut = async() => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
const authService = {
    signup,
    signin,
    confirmUser,
    resendCode,
    logOut
}

export default authService