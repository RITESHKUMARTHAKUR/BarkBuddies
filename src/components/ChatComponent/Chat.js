import React, { useEffect, useState } from 'react';
import Message from './MessageComponent/Message';
import SideBar from './SideBarComponent/SideBar';

const Chat = () => {

  return (
  <div className="homeContainer font-poppins box-border bg-blue-300 h-screen flex justify-center items-center">
    <div className="chatBox mt-12 w-4/5 border-gray-400 border-2 bg-white min-h-[80%] flex" >
      <SideBar/>
      <Message/>
    </div>
  </div>
  )
}

export default Chat