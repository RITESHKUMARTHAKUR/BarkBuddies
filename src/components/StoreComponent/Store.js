import React from "react";
import { AiOutlineFilter } from "react-icons/ai";
import image1 from "../../images/Store/image1.jpeg";
import image2 from "../../images/Store/image2.jpeg";
import image3 from "../../images/Store/image3.jpeg";
import image4 from "../../images/Store/image4.jpeg";

// import image5 from '../../images/Store/image5.jpeg'

const Store = () => {
  const links = [
    {
      id: 1,
      rate:"Rs.120",
      name:"Bed",
      src: image1,
    },
    {
      id: 2,
      rate:"Rs.20",

      name:"Brush",
      src: image2,
    },
    {
      id: 3,
      rate:"Rs.1200",

      name:"Shampoo",

      src: image3,
    },
    {
      id: 4,
      rate:"Rs.1220",

      name:"Ball",

      src: image4,
    },
  ];

  return (
    <div className=" pt-[6rem]">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap justify-between -m-4">
          {links.map(({ id, src ,rate,name}) => (
            <div
              key={id}
              className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4   flex justify-center   flex-col "
            >
              <a className="   lg:h-60 relative h-48 rounded-t-xl overflow-hidden flex justify-center">
                <img
                  alt="ecommerce"
                  className="object-cover object-center  block cursor-pointer hover:scale-150 duration-300"
                  src={src}
                />
              </a>
              <div className=" bg-[#524439] rounded-b-3xl pb-5">
                <h3 className=" text-white semi-bold  text-xl tracking-widest title-font ml-3 ">
                  {name}
                </h3>

                <p className="ml-3  text-white">{rate}</p>
                <p className="ml-3 text-blue-400  ">amazon.in</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
