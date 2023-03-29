import React from 'react';
import { Link } from "react-router-dom";
import BrandLogo from "./../../images/BarkBuddieslogo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className='h-[50vh] text-white items-center flex bg-[#524439]' >
        <div className='w-1/3 flex items-center flex-col'>
            <span className=' bg-[#FFB267]  py-12  rounded-[50%]'>
                <img src={BrandLogo} alt="" className='h-6' />
            </span>
            <div>
            <div className='flex items-center gap-2 pt-4'>
                        <BsTelephoneFill/>
                        <p>12345678</p>   
            </div>
            <div className='flex items-center gap-2 pt-4'>
                        <MdEmail/>
                        <p>example@mail.com</p>
                    
            </div>
            </div>
                
            <div>
                <span></span>
            </div>
        </div>
        <div className='w-1/3 flex items-center flex-col'>
            <div>
            <p className='text-2xl'>Site Map</p>
            <ol>
                <li className='flex items-center'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Home
                    </Link>
                </li>
                <li className='flex items-center'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Mate
                    </Link>
                </li>
                <li className='flex items-center'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Adopt
                    </Link>
                </li>
                <li className='flex items-center'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Store
                    </Link>
                </li>
                <li className='flex items-center'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        About us
                    </Link>
                </li>
            </ol>
            </div>
        </div>
        <div className='w-1/3 flex  flex-col'>
            <p className='text-2xl'>Site Map</p>
            <ol>
                <li className='flex items-center'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Ngos Near You
                    </Link>
                </li>
                <li className='flex items-center'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Ngos Near You
                    </Link>
                </li>
                <li className='flex items-center'>
                    <MdOutlineKeyboardArrowRight/>
                    <Link to="">
                        Checklist for New Adopters
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Store
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Adoption FAQ
                    </Link>
                </li>
            </ol>
        </div>
        
        
    </div>
  )
}

export default Footer