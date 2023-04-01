import React, { useState } from "react";
import logoWhite from "../../images/logoWhite.png";
import { FcGoogle } from 'react-icons/fc'
import { Link } from "react-router-dom";
import {signInWithPopup} from "firebase/auth";
import { auth,googleProvider} from "../database/firebase-config";
import { useNavigate } from "react-router-dom";
import {db} from "../database/firebase-config";
import { setDoc,doc, Timestamp } from "firebase/firestore"; 




function Login() {
  const navigate = useNavigate();
  const [err,setErr] = useState(false);


  const signInWithgoogle = async () => {
    try{
    await signInWithPopup(auth , googleProvider).then((user) =>{
      addDataToFirestore(user);
      navigate("/Home")

    })
    } catch(err){
      setErr(true)
      console.error(err);
    }
  }
  
  const addDataToFirestore = async (userDetails) => {
    // console.log("Created user:", userDetails.user.uid );
    await setDoc(doc(db, "profiles", userDetails.user.uid ), {
      name:  userDetails.user.displayName ,
      email: userDetails.user.email,
      created: Timestamp.now()
    } );
  };



  return (
    <div className=" min-h-screen bg-[#524439] text-white pt-20 ">
      <div className=" flex items-center  w-full flex-col ">
        <div className="  flex items-center justify-center mt-24 lg:my-8">
          <img className=" w-1/3 rounded-3xl sm:w-1/5 lg:w-1/6" src={logoWhite} alt="" />
        </div>

        <h1 className=" font-bold text-5xl my-10 sm:mt-4 ">Welcome!</h1>

        <div>

          <div className=" flex justify-center flex-col items-center my-10">
          <button onClick={signInWithgoogle} className=" text-lg font-semibold border border-gray-500 px-11 py-3 hover:border-black hover:bg-gray-500 duration-100 hover:text-black"><FcGoogle className=" inline-block mx-2  " size={25} /> Continue with Google</button>
            {err ? <p className="text-red-600">*something went wrong</p> :null}
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
