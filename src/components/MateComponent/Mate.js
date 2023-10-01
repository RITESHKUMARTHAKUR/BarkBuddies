import {AiOutlineFilter} from "react-icons/ai"
import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import {db } from "../database/firebase-config";
import {BiUpload} from "react-icons/bi"
import { MdDelete } from "react-icons/md";
import {Link} from "react-router-dom"
const Mate = () => {
  
  const [fetchedData,setFetchData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'Mating'))
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
        <button className="bg-[#D9D9D9] p-1 px-2 flex justify-center items-center">
          <Link to="/uploadMate"> Upload <BiUpload className=" inline-block float-right ml-2 " /></Link>
        </button>
      </div>

      

      <div className=" flex flex-col mt-6  justify-center items-center">
        {fetchedData.map((task,id) => (
          <div key={task.id} id={task.id} className=" overflow-hidden lg:w-[50%] md:w-1/2  w-full hover:shadow-md hover:shadow-gray-600  duration-100 cursor-pointer mb-4   flex">
            <Link  to="/DomgiProfile" className="lg:h-45   block relative h-48  overflow-hidden w-[45%]">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[490px] h-[300px] block "
                src={task.data.photo}
              />
            </Link>
            <div className=" bg-[#B9A89B] pb-5 w-[55%] flex flex-col">
              <h3 className=" text-black  font-bold text-lg tracking-widest title-font ml-2  mb-2 mt-3">
                {task.data.breed}
              </h3>
              <p className="ml-3 text-black ">{task.data.year} Year {task.data.months} Months</p>
              <p className="ml-3 text-black ">{task.data.gender}</p>
              <p className="ml-3 text-black ">{task.data.nature}</p>
              <p className="ml-3 text-black ">{task.data.disease}</p>
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
