import React, { useContext } from 'react'
import { AuthContext } from '../../../../Context/AuthContext'

const SideBarNav = () => {
  const {currentUser, currentUserData} = useContext(AuthContext)
  console.log(currentUserData)
  return (
    <div className='h-12 bg-[#524439]  flex items-center justify-between '>
       
        <div className="profile   flex items-center justify-center">
            <img   src={currentUser.photoURL}
            alt="profile image" 
            className='w-10 mr-2 ml-2 h-10 outline-white outline-2  rounded-full object-cover'  />
            <h3 className='mr-2 text-white'>{currentUser.displayName}</h3>
        </div> 
    </div>
  )
}

export default SideBarNav