import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import {  useNavigate} from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
    const auth = getAuth();
    const LogOutUser = async() => {
        await signOut(auth).then(() => {
            navigate("/")
        })
    }

  return (
    <div className='pt-20'>
      <button onClick={LogOutUser} className=" text-lg font-semibold border border-gray-500 px-11 py-3 hover:border-black hover:bg-gray-500 duration-100 hover:text-black"> logout</button>
    </div>
  );
}

export default Logout;
