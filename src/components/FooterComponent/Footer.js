import React from 'react';
import { Link } from "react-router-dom";
import BrandLogo from "./../../images/BarkBuddieslogo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className='md:h-[40vh] text-white items-center flex bg-[#524439]  flex-col py-8 justify-between content-evenly h-[42rem] md:flex-row' >
        <div className='w-1/3 flex items-center flex-col'>
            <span className=' bg-[#FFB267]  py-12  rounded-[50%]'>
                <img src={BrandLogo} alt="" className='h-6' />
            </span>
            <div className='flex flex-col items-center justify-center md:flex-row'>
            <div className='flex items-center gap-2 pt-4 '>
                        <BsTelephoneFill/>
                        <p>+918349258303</p>   
            </div>
            <div className='flex items-center gap-2 pt-4'>
                        <MdEmail/>
                        <p>BarkBuddies@mail.com</p>
                    
            </div>
            </div>
                
            <div>
                <span></span>
            </div>
        </div>
        <div className='w-1/3 flex items-center flex-col md:flex-row md:justify-center'>
            <div>
            <p className='text-2xl'>Site Map</p>
            <ol>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2 '>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Home
                    </Link>
                </li>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Mate
                    </Link>
                </li>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Adopt
                    </Link>
                </li>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Store
                    </Link>
                </li>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        About us
                    </Link>
                </li>
            </ol>
            </div>
        </div>
        <div className='w-1/3 flex  flex-col md:justify-center md:items-center'>
            <div>
            <p className='text-2xl'>Site Map</p>
            <ol>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Ngos Near You
                    </Link>
                </li>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Pet Healthcare Near You
                    </Link>
                </li>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Checklist for New Adopters
                    </Link>
                </li>
                <li className='flex items-center transition-all duration-200 ease hover:ml-2'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Adoption FAQ
                    </Link>
                </li>
                
            </ol>
        </div>
        
        </div>
    </div>
  )
}

export default Footer