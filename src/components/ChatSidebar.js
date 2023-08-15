import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GroupIcon } from './icons/GroupIcon';
import { AddPerson } from './icons/AddPerson';
import { InboxIcon } from './icons/InboxIcon';
import { HelpIcon } from './icons/HelpIcon';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../features/auth/userSlice';
import { DataStore } from 'aws-amplify';
import { BxsConversation } from './icons/BxsConversation';
import { PhChatDots } from './icons/PhChatDots';
function ChatSidebar (){

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const [isLogout, setIsLogout] = useState(false)
  const {user} = useSelector(state=>state.user)
  const logout = async()=>{
    localStorage.removeItem('user')
    console.log("logging out")
    const test = await DataStore.clear();
    console.log('Data cleared',test)
    setIsLogout(true)
    dispatch(logOut())
  }

  useEffect(()=>{
    if(isLogout){
      navigate('/')
    } 
  },[user, isLogout])

  return (
    <>
    
      <div className='rounded-xl overflow-hidden m-4 h-5/6 pl-5 pt- bg-white text-black font-poppins'>
      <main style={{ }} className='flex justify-end mt-1'>
        <div>
          {
          collapsed?<svg xmlns="http://www.w3.org/2000/svg" onClick={() => setCollapsed(!collapsed)} className='hover:cursor-pointer' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"></path></svg>
          
          // <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setCollapsed(!collapsed)} className='hover:cursor-pointer'width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"></path></svg>
          :<svg xmlns="http://www.w3.org/2000/svg" onClick={() => setCollapsed(!collapsed)} className='hover:cursor-pointer'width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"></path></svg>
        }
        </div>
      </main>
      <Sidebar backgroundColor='#fff' width='100%' collapsedWidth='40%' breakPoint='sm' style={{borderRight:"none", }}
        collapsed={collapsed} className='h-full'>
            {/* <div className='bg-blue-600 h-32'></div> */}
        <Menu className=''>
            <MenuItem icon={<GroupIcon/>} style={{ padding:0,}}  component={<Link to="/groups" />} className='text-black text-[14px]'>
                Groups
            </MenuItem>
            <MenuItem icon={<BxsConversation/>} style={{ padding:0}}  component={<Link to="/people" className='text-black'/>}>
              Live chat
            </MenuItem>

            <div className='grid grid-cols-3 items-baseline gap-0 my-2 border-e-2 border-blue-700'>
              <button className=' bg-blue-700 rounded-lg text-blue-700 p-1 max-w-[30px] text-center h-8 shadow-black w-8 px-auto'><PhChatDots/></button>
              <span className='text-blue-700 -ml-3'>All</span><span className='text-blue-700 -ml-8'>3</span>
            </div>
            <MenuItem icon={<BxsConversation/>} style={{ padding:0}}  component={<Link to="/people" className='text-black'/>}>
              Block
            </MenuItem>

            <MenuItem icon={<BxsConversation/>} style={{ padding:0}}  component={<Link to="/people" className='text-black'/>}>
              Trash
            </MenuItem>

          <MenuItem icon={<HelpIcon/>} style={{ padding:0}}  onClick={logout} className='text-black'> 
            Log out
          </MenuItem>
          <MenuItem className='text-black text-[16px] '> Examples</MenuItem>
        </Menu>
      </Sidebar>
      </div>
      
    </>
  );
}

export default ChatSidebar;