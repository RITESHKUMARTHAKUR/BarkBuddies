import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { BiLogOut } from "react-icons/bi";
import { auth, db } from "../database/firebase-config";
import rit from "../../images/rit.jpg";
import altImg from "./../../images/profile-user.svg"
import { AuthContext } from "../../Context/AuthContext";
import { signOut } from "firebase/auth";

const User = () => {
  const {currentUser} = useContext(AuthContext);
  const [docData, setDocData] = useState(null);

  useEffect(() => {
    async function fetchDocData () {
      const docRef = doc(db, "profiles", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDocData(docSnap.data());
        
    
      } else {
        console.log("No such document!");
      }
    }

    fetchDocData();
  }, [currentUser]);
  
  return (
    <div className=" pt-[6rem] flex  items-center flex-col ">
      {/* upper */}
      <button onClick={() => signOut(auth)} className="self-start ml-4 bg-gray-200 p-2 rounded flex items-center gap-2 hover:bg-gray-300">
        <p className="font-poppins font-bold">Logout</p>
        <BiLogOut className="font-bold" />
      </button>

      <div>
        <div className=" flex justify-center  items-center  ">
          <img
            className=" h-[8em] w-[8em]  object-cover rounded-[50%]"
            src= {docData && docData.photoURL}
            alt="profile image"
          />
        </div>
        <div className=" flex m-5 text-lg ">
          <p>Name : </p>
          {docData && <p> &nbsp; {docData.name} </p> }
        </div>
        <div className=" flex m-5 text-lg ">
          <p>Email : </p>
          {docData && <p> &nbsp; {docData.email} </p> }
        </div>
        <div className=" flex m-5 text-lg ">
          <p>Phone No. : </p>
          {docData && <p> &nbsp; {docData.phone} </p> }
        </div>
      </div>

      {/* lower */}

      {/* <div className="container px-5 py-8 flex justify-evenly">
        <div className="flex flex-wrap  -m-4 ">
          <div className=" flex  flex-col">
            <h1 className=" mb-5 font-seibold text-lg">More Dogs in your area:</h1>

            <div className=" flex  justify-between">
              <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
                <Link
                  to="/DomgiProfile"
                  className="   lg:h-60   block relative h-48 rounded-t-xl overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover  hover:scale-150 duration-300 object-center w-[490px] h-[250px] block "
                    src={doggie1}
                  />
                </Link>
                <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
                  <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">
                    German Shepherd
                  </h3>

                  <p className="ml-3 text-black ">24 months</p>
                </div>
              </div>
              <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
                <Link
                  to="/DomgiProfile"
                  className="   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover  hover:scale-150 duration-300 object-center w-[490px] h-[250px] block"
                    src={domgie2}
                  />
                </Link>
                <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
                  <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">
                    German Shepherd
                  </h3>

                  <p className="ml-3 text-black ">24 months</p>
                </div>
              </div>
              <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
                <Link
                  to="/DomgiProfile"
                  className="   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover  hover:scale-150 duration-300 object-center w-[490px] h-[250px] block"
                    src={domgie3}
                  />
                </Link>
                <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
                  <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">
                    German Shepherd
                  </h3>

                  <p className="ml-3 text-black ">24 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default User;
