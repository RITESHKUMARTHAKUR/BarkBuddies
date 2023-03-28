import React from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {FaUserCircle } from "react-icons/fa";
import doggie1 from '../../images/Adoption/doggie1.png'
import domgie2 from '../../images/Adoption/domgie2.jpg'
import domgie3 from '../../images/Adoption/domgie3.jpg'
import domgie4 from '../../images/Adoption/domgie4.jpg'
import domgie5 from '../../images/Adoption/domgie5.jpg'

// import BarkBuddieslogo from "../../images/BarkBuddieslogo.png";
// import Background from "../../images/Adoption/Background.jpg";
import { useState } from "react";

const DomgiProfile = () => {
  const slides = [
    {
      url: { doggie1 },
    },
    {
      url: { domgie2 },
    },
    {
      url: { domgie3 },
    },

    {
      url: { domgie4 },
    },
    {
      url: { domgie5 },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" flex flex-col">
      <div className=" flex flex-row  justify-center pt-32">
        <div className="max-w-[50%] h-[30rem] w-full   px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-col  w-96 ">
          <div className=" bg-[#B9A89B] p-2  rounded-t-lg  flex flex-col pl-6">
            <div class="rounded-lg  h-32 overflow-hidden">
              <h2 className=" font-bold  text-lg">Breed</h2>
              <p className=" text-md font-semibold">Age:24 Months</p>
              <p>Description: </p>
            </div>

            <div className=" flex flex-row justify-between">
              <div>
                <p>Sector 6, Bhilai</p>
                <p>490006</p>
              </div>
              <div>
                <p className=" mr-2">20 days ago</p>
              </div>
            </div>
          </div>

          <div className=" bg-[#B9A89B]  mt-2 p-2 rounded-b-lg flex flex-col justify-center items-center">
            <div className=" flex mb-4 justify-center items-center">
              <FaUserCircle size={35} className=" mr-2" />
              <h2 className="  font-bold text-lg ">Ritesh</h2>
            </div>
            <div className=" p-2 text-white px-16 bg-[#3F3F3F]">
              <button className="">Chat</button>
            </div>
          </div>
        </div>
      </div>

      {/* next section */}
      <div className=" flex flex-col  mt-20">
        <div>
          <h1 className=" font-bold text-lg mb-6 ml-10">
            More dogs in your area
          </h1>
        </div>

              <div > 
        <div className=" flex justify-around ">
          <div className="lg:w-[30%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
            <a className="   lg:h-60   block relative h-48 rounded-t-xl overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[490px] h-[250px] block"
                src={doggie1}
              />
            </a>
            <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
              <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">
                German Shepherd
              </h3>

              <p className="ml-3 text-black ">24 months</p>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
            <a className="   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[490px] h-[250px] block"
                src={domgie2}
              />
            </a>
            <div className=" bg-[#B9A89B] rounded-b-3xl pb-5">
              <h3 className=" text-black semi-bold  text-lg tracking-widest title-font ml-2 ">
                German Shepherd
              </h3>

              <p className="ml-3 text-black ">24 months</p>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-1/2  w-full shadow-md shadow-gray-600 rounded-3xl mb-4  ">
            <a className="   lg:h-60  block relative h-48 rounded-t-xl overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[490px] h-[250px] block"
                src={domgie3}
              />
            </a>
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
  );
};

export default DomgiProfile;
