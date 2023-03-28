import {AiOutlineFilter} from "react-icons/ai"
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../database/firebase-config";


import doggie1 from "../../images/Adoption/doggie1.png";
import domgie2 from "../../images/Adoption/domgie2.jpg";
import domgie3 from "../../images/Adoption/domgie3.jpg";
import domgie4 from "../../images/Adoption/domgie4.jpg";
import domgie5 from "../../images/Adoption/domgie5.jpg";

const Mate = () => {
    const [data,setData] = useState([]);
    useEffect(()  => {
      const fun =  async() => {
        const querySnapshot = await getDocs(collection(db, "mate"));
        const matedata = [];
        querySnapshot.forEach((childSnapshot) => {
          data.push(childSnapshot.data());
        });
        console.log(data)
        setData(matedata);
      }
      fun();
    },[])


  return (
    <div className=' pt-28'>

      <div className=' flex justify-between pl-3 pr-3 '>
        <button className='bg-[#D9D9D9] p-1 px-2'>Filter <AiOutlineFilter  className=' inline-block' / ></button>
        
      </div>

      <div className=" flex flex-col mt-6  justify-center items-center">
        {data.map((matesData) => (
          
            <div className="lg:w-[50%] md:w-1/2  w-full hover:shadow-md hover:shadow-gray-600  duration-100 cursor-pointer mb-4   flex">
            <a className="   lg:h-60   block relative h-48  overflow-hidden w-[45%]">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[490px] h-[250px] block "
                src={doggie1}
              />
            </a>
            <div className=" bg-[#B9A89B] pb-5 px-20 w-[55%] flex flex-col ">
              <h3 className=" text-black  font-bold text-lg tracking-widest title-font ml-2  mb-2 mt-3">
               {matesData.name}
              </h3>

              <p className="ml-3 text-black ">{matesData.breed}</p>
              <p className="ml-3 text-black ">{matesData.age}</p>
              <p className="ml-3 text-black ">{matesData.nature}</p>
              <p className="ml-3 text-black ">{matesData.description}</p>
              <p className="ml-3 text-black ">{matesData.gender}</p>
            </div>
          </div>
          
        ))}
          
          


         


          
        </div>

    </div>
  )
}

export default Mate
