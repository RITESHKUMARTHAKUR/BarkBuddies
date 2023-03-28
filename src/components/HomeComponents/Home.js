import React from 'react';
import HomeBanner from "../../images/landing/homeBanner.png"
import { TiLocation } from "react-icons/ti";
import AdoptLogo from "../../images/Dog.png";
import BreedLogo from "../../images/Breeding.png";


const Home = () => {
  return (
    <div className='font-poppins'>
        <img src={HomeBanner} alt="Doggie banner" className="relative object-cover h-screen w-screen" />
        <span className='absolute text-white  top-24 left-[20%] text-3xl '>Get Love and Loyalty,<br/> in the Purest form </span>
        <div className='absolute flex justify-center items-center  bottom-10 w-full text-center'>
        <input type="text" className='relative rounded-[0.2em] pl-2 h-8 w-[20%]' placeholder='Find a buddy near you...' />
        <TiLocation size={30} />
        </div>

        <div>
          <center className='py-4'>
          <p className='font-bold text-3xl'>Links section</p>
          </center>
          <div className='flex justify-evenly py-10 '>
            <div className='bg-[#C6E9EE] w-fit px-12 pt-8 flex rounded-3xl items-center flex-col'>
              <img src={AdoptLogo} className="w-32" alt="Adopt logo" />
              <p className='my-4 font-bold'>ADOPT</p>
            </div>
            <div className='bg-[#F5DFC7] w-fit px-12 pt-8 flex rounded-3xl items-center flex-col'>
              <img src={BreedLogo} className="w-32" alt="Adopt logo" />
              <p className='my-4 font-bold'>MATE</p>
            </div>
            
          </div>
        </div>

        <div className='h-screen bg-[#FFB267]'>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/>
        </div>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502"/>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    </div>
  )
}

export default Home