import React from 'react';
import SideBarChat from './SideBarChat/SideBarChat';
import SideBarNav from './SideBarNav/SideBarNav';


const SideBar = () => {
  return (
    <div className='flex-initial w-2/6  border-2 border-t-0 border-l-0 border-r-indigo-400 relative'>
        <SideBarNav/>
        <SideBarChat/>
        <button className='bg-slate-500  bottom-0 absolute w-full left-0 right-0 text-black rounded p-2'>Logout</button>
    </div>
  )
}

export default SideBar