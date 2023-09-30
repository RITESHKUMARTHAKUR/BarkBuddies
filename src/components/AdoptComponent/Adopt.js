import React, { useEffect, useState } from 'react'
import {AiOutlineFilter} from "react-icons/ai"
import {BiUpload} from "react-icons/bi"
import { collection, query,onSnapshot } from "firebase/firestore";
import {db} from "../database/firebase-config";
import {Link} from "react-router-dom"

const Adopt =  () => {
  const [fetchedData,setFetchData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'Adoption'))
    onSnapshot(q, (querySnapshot) => {
      setFetchData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[]);
 
  return ( 



      <section className="   pt-24 body-font ">

        {/* buttons */}

      <div className=' flex justify-between pl-3 pr-3 '>
        <button className='bg-[#D9D9D9] p-1 px-2'>Filter <AiOutlineFilter  className=' inline-block' / ></button>
        
        <button className="bg-[#D9D9D9] p-1 px-2 flex justify-center items-center">
          <Link to="/uploadAdpot"> Upload <BiUpload className=" inline-block float-right ml-2 " /></Link>
         
        </button>
      </div>


      
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap justify-between -m-4">
    {fetchedData.map((task,id) => (
        <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
        <Link to={`/domgiprofile/${task.id}`} className= "  hover:scale-105 duration-300  lg:h-60  block relative h-48 rounded-t-xl overflow-hidden" >
          <img alt="dogPic" className="object-cover object-center w-[490px] h-[300px] block" src={task.data.photo}/>
        </Link>
        <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
          <h3 className=" text-black font-semibold  text-lg tracking-widest title-font ml-2 ">{task.data.name}</h3>
      
          {/* <p className="ml-3 text-black ">{task.data.age} Years</p> */}
        </div>
      </div>
    ))}
    
      
      

    
      
      </div>
    </div>
  </section> 
  );
}

export default Adopt