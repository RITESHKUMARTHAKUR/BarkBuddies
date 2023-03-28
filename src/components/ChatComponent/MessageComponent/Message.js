import React from 'react';
import { FaPaperclip } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
const Message = () => {
  return (
    <div className='relative bg-blue-200 w-full'>
        <h3>Message</h3>
        <div className='flex '>
                <img src="https://unsplash.com/photos/BlGmdY18CFQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc5OTQ1MTQ5&force=true" 
                alt="" className='w-10 h-10 object-cover rounded-full' />
                <div className='ml-2 flex flex-col'>
                <p className='text-sm'>Ritesh Thakur</p>
                <p className='text-xs'>How are you</p>
                </div>
        </div>
        <div className='flex absolute bottom-0 h-12 items-center' >
            
            <input type="text" name="" className='w-96' placeholder='type your message here...'/>
            <div className='flex end gap-2'>
                <FaPaperclip/>
                <RiSendPlaneFill/>
            </div>
        </div>
    </div>
  )
}

export default Message