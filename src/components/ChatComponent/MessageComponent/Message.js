import React from 'react';
import { FaPaperclip } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
const Message = () => {
  return (
    <div className='relative bg-blue-200 w-full' style={{    display: "flex",
      flexDirection: "column"}} >
        <h3 style={{  background:"rgb(59 130 246 / var(--tw-bg-opacity))",  alignSelf: "center",
    padding: "0.5em 0",
    /* display: flex; */
    width: "100%", textAlign:"center"}}>Message</h3>
        <div className='flex '>
                <img src="https://unsplash.com/photos/BlGmdY18CFQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc5OTQ1MTQ5&force=true" 
                alt="" className='w-10 h-10 object-cover rounded-full' />
                <div className='ml-2 flex flex-col'>
                <p className='text-sm'>Ritesh Thakur</p>
                <p className='text-xs'>How are you</p>
                </div>
        </div>
        <div className='flex absolute bottom-0 pr-[1em]  h-8 bg-gray-200 items-center justify-between w-full' >
            
            <input type="text" name="" className='w-full bg-transparent outline-none' placeholder='type your message here...'/>
            <div className='flex end gap-2'>
                <FaPaperclip/>
                <RiSendPlaneFill/>
            </div>
        </div>
    </div>
  )
}

export default Message