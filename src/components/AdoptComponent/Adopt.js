import React, { useEffect, useState } from 'react'
import {AiOutlineFilter} from "react-icons/ai"
import doggie1 from '../../images/Adoption/doggie1.png'
import domgie2 from '../../images/Adoption/domgie2.jpg'
import domgie3 from '../../images/Adoption/domgie3.jpg'
import domgie4 from '../../images/Adoption/domgie4.jpg'
import domgie5 from '../../images/Adoption/domgie5.jpg'
import { collection, getDocs } from "firebase/firestore";
import {db} from "../database/firebase-config";


const Adopt =  () => {
  const [data,setData] = useState([]);
    useEffect(()  => {
      const fun =  async() => {
        const querySnapshot = await getDocs(collection(db, "Adoption"));
        const adopdata = [];
        querySnapshot.forEach((childSnapshot) => {
          data.push(childSnapshot.data());
        });
        console.log(data)
        setData(adopdata);
      }
      fun();
    },[])
 
  return ( 



      <section className="   pt-24 body-font ">

        {/* buttons */}

      <div className=' flex justify-between pl-3 pr-3 '>
        <button className='bg-[#D9D9D9] p-1 px-2'>Filter <AiOutlineFilter  className=' inline-block' / ></button>
        
      </div>


      
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap justify-between -m-4">
      <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
        <a className= "   lg:h-60   block relative h-48 rounded-t-xl overflow-hidden" >
          <img   alt="ecommerce" className="object-cover object-center w-[490px] h-[250px] block" src={doggie1}/>
        </a>
        <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
          <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">German Shepherd</h3>
      
          <p className="ml-3 text-black ">24 months</p>
        </div>
      </div>
      <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
        <a className= "   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden" >
          <img alt="ecommerce" className="object-cover object-center w-[490px] h-[250px] block" src={domgie2}/>
        </a>
        <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
          <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">German Shepherd</h3>
      
          <p className="ml-3 text-black ">24 months</p>
        </div>
      </div>
      <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
        <a className= "   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden" >
          <img alt="ecommerce" className="object-cover object-center w-[490px] h-[250px] block"  src={domgie3}/>
        </a>
        <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
          <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">German Shepherd</h3>
      
          <p className="ml-3 text-black ">24 months</p>
        </div>
      </div>
      <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
        <a className= "   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden" >
          <img alt="ecommerce" className="object-cover object-center w-[490px] h-[250px] block"  src={domgie4}/>
        </a>
        <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
          <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">German Shepherd</h3>
      
          <p className="ml-3 text-black ">24 months</p>
        </div>
      </div>
      <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
        <a className= "   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden" >
          <img alt="ecommerce" className="object-cover object-center w-[490px] h-[250px] block"  src={domgie5}/>
        </a>
        <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
          <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">German Shepherd</h3>
      
          <p className="ml-3 text-black ">24 months</p>
        </div>
      </div>
      <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
        <a className= "   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden" >
          <img alt="ecommerce" className="object-cover object-center w-[490px] h-[250px] block" src="https://dummyimage.com/420x260 "/>
        </a>
        <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
          <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">German Shepherd</h3>
      
          <p className="ml-3 text-black ">24 months</p>
        </div>
      </div>
      

    
      
    </div>
  </div>
</section>
    
  )
}

export default Adopt