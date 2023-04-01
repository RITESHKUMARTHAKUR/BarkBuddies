import React, { useEffect, useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../database/firebase-config";
import {BiUpload} from "react-icons/bi"
import {Link} from "react-router-dom"

const Adopt = () => {
  const [fetchedData, setFetchData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Adoption"));
    onSnapshot(q, (querySnapshot) => {
      setFetchData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <section className="   pt-24 body-font ">
      

      <div className=" flex justify-between pl-3 pr-3 ">
        <button className="bg-[#D9D9D9] p-1 px-2 flex justify-center items-center">
          Filter <AiOutlineFilter className=" inline-block ml-2" />
        </button>
        <button className="bg-[#D9D9D9] p-1 px-2 flex justify-center items-center">
          <Link to="/upload"> Upload <BiUpload className=" inline-block float-right ml-2 " /></Link>
         
        </button>
      </div>

      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap justify-between -m-4">
          {fetchedData.map((task, id) => (
            <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
              <a className="   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden">
                <img
                  alt="doc photo"
                  className="object-cover object-center w-[490px] h-[250px] block"
                  src={task.data.photo}
                />
              </a>
              <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
                <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">
                  {task.data.breed}
                </h3>

                <p className="ml-3 text-black ">{task.data.age} Years</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adopt;
