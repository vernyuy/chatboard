import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService';

const user  = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: null,
  isError:false,
  isSuccess: false,
  isLoading: false,
  message: '',
  isConfirmed: true
};

// Signup
export const signup = createAsyncThunk('auth/signup', async(user, thunkApi)=>{
  try{
    return await authService.signup(user)
  }catch(err){
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
    console.log(err)
    return thunkApi.rejectWithValue(message)
  }
}) 

// signin

export const signin = createAsyncThunk('auth/signin', async(user, thunkApi)=>{
  console.log(user)
  try{
    return await authService.signin(user)
  }catch(err){
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
    console.log(err)
    return thunkApi.rejectWithValue(message)
  }
})

export const confirmSignup = createAsyncThunk('auth/confirmSignup', async(user, thunkApi)=>{
  
  try{
    return await authService.confirmUser(user)
  }catch(err){
    console.log(err)
  }
}) 

export const resendSignupCode = createAsyncThunk('auth/confirmSignup', async(user, thunkApi)=>{
  
  try{
    return await authService.resendCode(user)
  }catch(err){
    console.log(err)
  }
}) 

export  const logOut = createAsyncThunk('auth/logout', async(user, thunkApi)=>{
  try{
    return await authService.logOut()
  }catch(err){
    console.log(err)
  }
})
export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state)=> {
      state.user = null
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
      state. message = ''
    },
    login: (state, action) =>{
            state.auth = action.payload
      // console.log(action.payload)
      // // try {
      //   const user = await Auth.signIn(action.payload.email, action.payload.password).then(
      //     (data)=>{
      //       console.log(data)
      //     }
      //   );
        
        // console.log(user.attributes)
        // navigate('/home')
      // } catch (error) {
      //   console.log('error signing in', error);
      // }
    },
    // logout: (state) =>{
    //   state.user = null
    // }
  },
  extraReducers : (builder)=>{
    builder
      .addCase(signup.pending, (state)=>{
        state.user = null
        state.isError = false
        state.isSuccess = false
        state.isLoading = true
        state.message = ''
        state.isConfirmed = true
      })
      .addCase(signup.fulfilled, (state, action)=>{
        state.isError = false
        state. message = ''
        // state.user = action.payload
        state.isLoading = false
        state.isSuccess = true
        state.isConfirmed = false;
        // console.log(action)
      })
      .addCase(signup.rejected, (state, action)=>{
        state.user = null
        state.isError = true
        state.isSuccess = false
        state.isLoading = false
        state. message = action.payload
        state.isConfirmed = true
        // state.isError = true;
        // state.isLoading = false
        // state.message = action.payload
        // state.user = null
      })
      .addCase(signin.pending, (state)=>{
        state.user = null
        state.isError = false
        state.isSuccess = false
        state.isLoading = true
        state. message = '';
        state.isConfirmed = true
      })
      .addCase(signin.fulfilled, (state, action)=>{
        state.isLoading = false
        state. message = ''
        state.isLoading = false;
        state.isSuccess = true;
        state.isConfirmed = true
        state.user = action.payload;
        console.log(action.payload)
      })
      .addCase(signin.rejected, (state, action)=>{
        state.isError = true
        state.message = action.payload
        state.user = null
        state.isSuccess = false
        state.isLoading = false
        state.isConfirmed = true
      })
      .addCase(confirmSignup.pending, (state)=>{
        state.user = null
        state.isError = false
        state.isSuccess = false
        state.isLoading = true
        state. message = '';
        state.isConfirmed = true;
      })
      .addCase(confirmSignup.fulfilled, (state, action)=>{
        state.isConfirmed = true;
        state.isLoading = false
        state.isSuccess = true;
        state.message = ''
        state.isError = false;
        state.isConfirmed = true
      })
      .addCase(confirmSignup.rejected, (state, action)=>{
        state.message = action.payload;
        state.isError = true
      })
      .addCase(logOut.fulfilled, (state)=>{
        state.user = null;
      })
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, reset } = userSlice.actions

export const selectUser = (state)=> state.auth

export default userSlice.reducer