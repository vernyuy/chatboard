
import { Auth } from "aws-amplify";
// import {User} from '../../models'
import { createSlice } from "@reduxjs/toolkit";
import { Amplify} from "@aws-amplify/core";
import { DataStore } from "@aws-amplify/datastore"
import { User, UserStatus } from "../../models";

const signup = async (user)=>{
    try{
        console.log("signing up")
         const test1 = await Auth.signUp({
          username: user.username,
            password: user.password,
            email: user.mail,
            attributes:{
              email: user.email,
            },
        })
        // .then(async data=> {
        //   const test = 
        console.log(user)
        // })
        let date = new Date()
        console.log(date.toISOString())
       const result = await DataStore.save(
          new User(
            {
              username: user.username,
              email:user.email,
              cognitoId: test1.userSub,
              profileImageUrl:user.key,
              userStatus: UserStatus.ACTIVE,
              
              // updatedAt: date.toISOString().toString(),
            }
          )
        ).finally(()=>{
          console.log('hello')
        })
        console.log(result)
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
      const data = await Auth.signIn(user.email, user.password)
      localStorage.removeItem('user')
        localStorage.setItem('user',JSON.stringify(data))
          return data
      } catch (error) {
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