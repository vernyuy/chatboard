import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authService from './authService';
import sendMessage from './messageService'

// const user  = JSON.parse(localStorage.getItem('msg'));

const initialState = {
  isSending: false,
  isSent: false,
  isError:false
};

// Signup
export const sendMessage = createAsyncThunk('message/send', async(msg, thunkApi)=>{
  try{
    return await authService.sendMessage(msg)
  }catch(err){
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
    console.log(err)
    return thunkApi.rejectWithValue(message)
  }
}) 

export const messageSlice = createSlice({
    name: 'msg',
    initialState:{
        isSending: false,
        isSent: false,
        isError:false
      },
    reducers: {
      reset: (state)=> {
        state.isSending = false
        state.isSent = false
      },
    },

  extraReducers : (builder)=>{
    builder
      .addCase(sendMessage.pending, (state)=>{
        state.isSent = false
        state.isSending = true
        isError = false
      })
      .addCase(sendMessage.fulfilled, (state, action)=>{
        state.isSent = true
        state.isSending = false
        isError = false
      })
      .addCase(sendMessage.rejected, (state, action)=>{
        state.isSent = false
        state.isSending = false
        isError = false
      })
  }
})

export const selectMessage = (state)=> state.msg

export default messageSlice.reducer