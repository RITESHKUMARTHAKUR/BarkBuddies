import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaUserCircle } from "react-icons/fa";

// import logoWhite from "../images/logoWhite.png";
import BarkBuddieslogo from "../../images/BarkBuddieslogo.png";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const links = [
    {
      id: 3,
      link: "adopt",
    },
    {
      id: 4,
      link: "mate",
    },
    {
      id: 5,
      link: "store",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 z-10 bg-[#FFB267]  px-4 fixed text-black ">
      <div className= "  w-32   md:w-[18rem] ml-2 ">
      <Link to="/" smooth duration={500}>
        <img className="rounded-3xl " src={BarkBuddieslogo} alt="" />
  </Link>
      </div>

      <ul className="hidden md:flex ml-auto  text-lg">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" font-medium px-3 cursor-pointer capitalize hover:scale-110 duration-150 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search bar */}

      <div class="flex justify-center ml-auto mt-8">
        <div class="mb-3 xl:w-96">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch ">
            <input
              type="search"
              class=" ml-[100px] hidden md:flex relative m-0  w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent text-white bg-clip-padding px-3 py-1.5 text-base font-normal  outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"

            />
            <span
              class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* User's Profile */}

      <div className=" hidden  md:flex bg-transparent">

        <h1><FaUserCircle size={35}/></h1>
      </div>

      <div
        onClick={() => setNav(!Nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {Nav && (
        <ul className="flex flex-col justify-center items-center text-gray-500 w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" px-3 cursor-pointer capitalize text-gray-500 hover:scale-110 duration-150 text-4xl py-6"
            >
              <Link
                onClick={() => setNav(!Nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          {/* <li className=' text-4xl capitalize py-6 cursor-pointer'>home</li> */}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
