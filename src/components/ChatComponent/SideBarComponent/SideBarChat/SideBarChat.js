import React from 'react';
import Aryan from "./../../../../images/aryan.jpeg";

const SideBarChat = () => {
  return (
    <div className='overflow-scroll overflow-x-hidden max-h-96'>
        <input type="text" className='text-xs outline-none border-none pl-2'  placeholder='find someone...'/> 
            
            <div className='mt-4    flex items-center'>
                <img src={Aryan} 
                alt="" className='w-12 h-12 object-cover rounded-full' />
                <span className='ml-3 leading-none'>
                <p className='text-sm'>Ritesh Kumar Thakur</p>
                <p className='text-xs'>Hello!</p>
                </span>
            </div>
            <div className='mt-4    flex items-center'>
                <img src="https://unsplash.com/photos/t3zrEm88ehc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHx8fDE2Nzk5NzA3NTE&force=true" 
                alt="" className='w-12 h-12 object-cover rounded-full' />
                <span className='ml-3 leading-none'>
                <p className='text-sm'>Ritesh Kumar Thakur</p>
                <p className='text-xs'>Hello!</p>
                </span>
            </div>
    </div>
  )
}

export default SideBarChat