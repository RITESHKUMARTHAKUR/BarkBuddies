import React, { useEffect, useState } from 'react';
import Message from './MessageComponent/Message';
import SideBar from './SideBarComponent/SideBar';

const Chat = () => {

  return (
  <div className="homeContainer font-poppins  bg-blue-300 h-screen flex justify-center items-center">
    <div className="chatBox w-4/5 border-gray-400 border-2 bg-white flex h-4/5" >
      <SideBar/>
      <Message/>
    </div>
  </div>
  )
}

export default Chat