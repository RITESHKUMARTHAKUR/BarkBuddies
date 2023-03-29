import {AiOutlineFilter} from "react-icons/ai"
import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import {db } from "../database/firebase-config";
import { MdDelete } from "react-icons/md";

const Mate = () => {
  
  const [fetchedData,setFetchData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'mate'))
    onSnapshot(q, (querySnapshot) => {
      setFetchData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[]);

  // const deleteData = (event) => {
  //   console.log(event.id);
  // }
  

  // const [data,setData] = useState([]);
  // useEffect(()  => {
  //     const fun =  async() => {
  //       const querySnapshot = await getDocs(collection(db, "mate"));
  //       querySnapshot.forEach((childSnapshot) => {
  //         data.push(childSnapshot.data());
  //       });
  //       console.log( "fetched data",data )
  //       setData(data);
  //     }
  //     console.log("console log data",data)
  //     fun();
  //   },[data])

  return (
    <div className=" pt-28">
      <div className=" flex justify-between pl-3 pr-3 ">
        <button className="bg-[#D9D9D9] p-1 px-2">
          Filter <AiOutlineFilter className=" inline-block" />
        </button>
      </div>

      

      <div className=" flex flex-col mt-6  justify-center items-center">
        {fetchedData.map((task,id) => (
          <div key={task.id} id={task.id} className="lg:w-[50%] md:w-1/2  w-full hover:shadow-md hover:shadow-gray-600  duration-100 cursor-pointer mb-4   flex">
            <a className="   lg:h-60   block relative h-48  overflow-hidden w-[45%]">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[490px] h-[250px] block "
                src={task.data.photo}
              />
            </a>

            <div className=" bg-[#B9A89B] pb-5 px-20 w-[55%] flex flex-col ">
              <h3 className=" text-black  font-bold text-lg tracking-widest title-font ml-2  mb-2 mt-3">
                {task.data.name}
              </h3>
              <p className="ml-3 text-black ">{task.data.breed}</p>
              <p className="ml-3 text-black ">{task.data.age}</p>
              <p className="ml-3 text-black ">{task.data.gender}</p>
              <p className="ml-3 text-black ">{task.data.nature}</p>
              <p className="ml-3 text-black ">{task.data.description}</p>
            </div>
            {/* <button onClick={deleteData(event => event.target)} >
              <MdDelete/>
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mate;
