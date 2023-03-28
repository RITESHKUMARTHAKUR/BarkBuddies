import React, { useState } from "react";
import logoWhite from "../../images/logoWhite.png";
import { FcGoogle } from 'react-icons/fc'
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";
import {signInWithPopup} from "firebase/auth";
import { auth,googleProvider} from "../database/firebase-config";
import { Navigate,useNavigate} from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  //   const [password, setPassword] = useState("");


  const signInWithgoogle = async () => {
    try{
    await signInWithPopup(auth , googleProvider).then(() =>{
      // addDataToFirestore();
      navigate("/Home")

    })
    } catch(err){
      console.error(err);
    }
  }
  


  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-500 to-black text-white pt-20 ">
      <div className=" flex items-center  w-full flex-col ">
        <div className="  flex items-center justify-center mt-24 lg:my-8">
          <img className=" w-1/3 rounded-3xl sm:w-1/5 lg:w-1/6" src={logoWhite} alt="" />
        </div>

        <h1 className=" font-bold text-5xl my-10 sm:mt-4 ">Welcome!</h1>

        <div>

          <div className=" flex justify-center flex-col items-center my-10">
          <button onClick={signInWithgoogle} className=" text-lg font-semibold border border-gray-500 px-11 py-3 hover:border-black hover:bg-gray-500 duration-100 hover:text-black"><FcGoogle className=" inline-block mx-2  " size={25} /> Continue with Google</button>
            <div className=" my-2 flex items-center justify-center">
            <p className=" text-lg">
              Don't have an account? <button className=" text-green-500 hover:text-green-800">  <Link to="/"> Sign up</Link> </button>
            </p>
          </div>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default Login;
