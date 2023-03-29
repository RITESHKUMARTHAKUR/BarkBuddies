import React, { useEffect, useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import doggie1 from "../../images/Adoption/doggie1.png";
import domgie2 from "../../images/Adoption/domgie2.jpg";
import domgie3 from "../../images/Adoption/domgie3.jpg";
import domgie4 from "../../images/Adoption/domgie4.jpg";
import domgie5 from "../../images/Adoption/domgie5.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase-config";
import { Link } from "react-router-dom";
import DomgiProfile from "../DomgiProfileComponent/DomgiProfile";

const User = () => {
  return (
    <div className=" pt-[6rem] bg-[#f5f5f5] flex  h-screen items-center flex-col ">
      {/* upper */}

      <div>
        <div>
          <div className=" flex bg-[#D9D9D9] p-20 rounded-full ">
            <img src="" alt="photo" />
          </div>
          <div className=" flex m-5 text-lg ">
            <p>Name : </p>
            <p>Harsh Khatri</p>
          </div>
          <div className=" flex m-5 text-lg ">
            <p>Email : </p>
            <p>harsh@gmail.como</p>
          </div>
          <div className=" flex m-5 text-lg ">
            <p>Phone No. : </p>
            <p>1234567890</p>
          </div>
        </div>
      </div>

      {/* lower */}

      <div className="container px-5 py-8 flex justify-evenly">
        <div className="flex flex-wrap  -m-4 ">
          <div className=" flex  flex-col">
            <h1 className=" mb-5">More Dogs in your area</h1>

            <div className=" flex ">
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
      </div>
    </div>
  );
};

export default User;
