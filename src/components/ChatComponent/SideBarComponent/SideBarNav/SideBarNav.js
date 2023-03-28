import React from 'react'

const SideBarNav = () => {
  return (
    <div className='h-12 bg-blue-500 flex items-center justify-between'>
        <div className="chats">
            Logo
        </div>
        <div className="profile flex items-center justify-center">
            <img src="https://unsplash.com/photos/BlGmdY18CFQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc5OTQ1MTQ5&force=true" 
            alt="profile image" 
            className='w-6 h-6 mr-2 rounded-full object-cover'  />
            <h3 className='mr-2'>RiteshThakur</h3>
        </div> 
    </div>
  )
}

export default SideBarNav