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
function ChatSidebar (){

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {user, isLogout} = useSelector(state=>state.user)
  const logout = ()=>{
    dispatch(logOut())
  }

  useEffect(()=>{
    if(isLogout){
      navigate('/')
    } 
  },[])

  return (
    <>
    
      <Sidebar backgroundColor='rgba(12,123,213,0.0)' width='12%' collapsedWidth='5%' breakPoint='sm'
        collapsed={collapsed} className='h-screen bg-black'>
            <div className='bg-blue-600 h-32'></div>
        <Menu className=' pt-5'>
            <MenuItem icon={<GroupIcon/>} component={<Link to="/groups" />} className='tsext-black hover:bg-blue-700'>
                Groups
            </MenuItem>
            <MenuItem icon={<AddPerson/>} component={<Link to="/people" className='tesxt-black'/>}>
              People
            </MenuItem>

          <MenuItem icon={<InboxIcon/>} component={<Link to="/home" className='text-sblack'/>}> 
            Inbox
          </MenuItem>
          <MenuItem icon={<HelpIcon/>} className='tesxt-black'> 
            Help
          </MenuItem>

          <MenuItem icon={<HelpIcon/>} onClick={logout} className='texsst-black'> 
            LogOut
          </MenuItem>
          <MenuItem className='text-black'> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }} className=' absolute l-[10px] z-10'>
        <div>
          {
          collapsed?<svg onClick={() => setCollapsed(!collapsed)} className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11-2v16"/><path d="m9 10l2 2l-2 2"/>
            </g>
          </svg>:<svg onClick={() => setCollapsed(!collapsed)} className='hover:cursor-pointer'  xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16"/><path d="m15 10l-2 2l2 2"/>
            </g>
          </svg>
          }
        </div>
      </main>
    </>
  );
}

export default ChatSidebar;