// import { Amplify } from 'aws-amplify';
import { Amplify} from "@aws-amplify/core";
import { DataStore } from "@aws-amplify/datastore"

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import ChatSidebar from './components/ChatSidebar'
import IncomingMessage from './components/IncomingMessage'
import OutgoingMessage from './components/OutgoingMessage'
import TextField from './components/MessageFormField'
import awsExports from './aws-exports';
import NavBar1 from './components/NavBar1';
import Login from './pages/Login';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import Register from './pages/Register';
import ConfirmSignup from './pages/ConfirmSignup';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from "./features/auth/userSlice";
import People from './pages/People';
import Groups from './pages/Groups';
import { useEffect } from 'react';
import { API, Auth } from "aws-amplify";
import GroupChat from "./pages/GroupChat";
Amplify.configure(awsExports);
DataStore.configure(awsExports);
Auth.configure(awsExports);

function App() {
  useEffect(()=>{
    DataStore.start()
  }, [])
  const user = useSelector(selectUser)
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Login />} />
          <Route path="room-chat" element={<GroupChat />} />
          <Route path="signup" element={<Register />} />
          <Route path="confirm-signup" element={<ConfirmSignup />} />
          <Route path="people" element={<People />} />
          <Route path="groups" element={<Groups />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;