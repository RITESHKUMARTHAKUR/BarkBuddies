import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='h-[50vh] text-white flex bg-[#524439]' >
        <div className='w-1/3 flex items-center flex-col'>
            <span>
                
            </span>
        </div>
        <div className='w-1/3 flex items-center flex-col'>
            <p className='text-2xl'>Site Map</p>
            <ol>
                <li>
                    <Link to="">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Mate
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Adopt
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Store
                    </Link>
                </li>
                <li>
                    <Link to="">
                        About Us
                    </Link>
                </li>
            </ol>
        </div>
        <div className='w-1/3 flex items-center flex-col'>
            <p className='text-2xl'>Site Map</p>
            <ol>
                <li>
                    <Link to="">
                        Ngos Near You
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Pet Health Care near You
                    </Link>
                </li>
                <li>
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