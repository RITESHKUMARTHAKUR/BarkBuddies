import React from "react";
import HomeBanner from "../../images/landing/homeBanner.png";
import { TiLocation } from "react-icons/ti";
import pic1 from "./../../images/ngo/1.png";
import pic2 from "./../../images/ngo/2.png";
import pic3 from "./../../images/ngo/3.png";
import AdoptLogo from "../../images/Dog.png";
import AboutPhoto from "./../../images/aboutphoto.jpeg";
import BreedLogo from "../../images/Breeding.png";
import { Link } from "react-router-dom";
import image1 from "../../images/landing/image1.png"
import image2 from "../../images/landing/image2.png"

const Home = () => {
  return (
    <div className="font-poppins">
      <img
        src={HomeBanner}
        alt="Doggie banner"
        className="relative object-cover h-screen w-screen"
      />
      <span className="absolute text-white  top-[25rem] left-[20%] text-[5.875rem]  leading-[6.25rem]  opacity-[0.7] text-stroke-2 text-black">
        Get Love and Loyalty,
        <br /> in the Purest form{" "}
      </span>
      <div className="absolute flex justify-center items-center  bottom-10 w-full text-center">
        <input
          type="text"
          className="relative rounded-[0.2em] pl-2 h-8 w-[20%]"
          placeholder="Find a buddy near you..."
        />
        <TiLocation size={30} />
      </div>

      <div>
        <center className="py-4">
          <p className="font-bold text-3xl">Links section</p>
        </center>
        <div className="flex justify-evenly py-10 ">
          <Link
            to="/adopt"
            className="bg-[#C6E9EE] w-fit px-12 pt-8 flex rounded-3xl items-center flex-col"
          >
            <img src={AdoptLogo} className="w-32" alt="Adopt logo" />
            <p className="my-4 font-bold">ADOPT</p>
          </Link>
          <Link
            to="/mate"
            className="bg-[#F5DFC7] w-fit px-12 pt-8 flex rounded-3xl items-center flex-col"
          >
            <img src={BreedLogo} className="w-32" alt="Adopt logo" />
            <p className="my-4 font-bold">MATE</p>
          </Link>
        </div>
      </div>

      <div className="h-screen flex items-center flex-col justify-center bg-[#FFB267]">
        <center className="text-3xl font-bold pb-[3em]">About US</center>
        <div className="flex bg-white h-[20em] w-[60%] items-center">
          <img
            src={AboutPhoto}
            className="w-[15em] -ml-12"
            alt="about dog photo"
          />
          <div className="mx-8 self-start mt-8  flex flex-col gap-4 ">
            <p className="font-bold text-4xl">Bark Buddies</p>
            <p>Give a shelter, get a buddy</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              nisi fuga officiis illum facilis reiciendis iure nam suscipit,
              nesciunt cum, distinctio, cupiditate ab id fugiat eaque dolorum
              eum sit natus!
            </p>
            <button className="bg-[#0E0808] text-white w-[23%]">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[25em] relative  overflow-x-hidden">
        <img
          src={pic1}
          className="w-1/3 object-cover object-center"
          alt="pic1"
        />
        <img
          src={pic2}
          className="w-1/3 object-cover object-center"
          alt="pic2"
        />
        <img
          src={pic3}
          className="w-1/3 object-cover object-center"
          alt="pic3"
        />

        <div className="absolute  flex justify-center flex-col items-center w-full top-6 left-0">
          <span className="bg-white text-base px-16 py-2 mb-6">
            Planning to adopt a pet
          </span>
          <div className="flex justify-center gap-4">
            <div className="bg-white flex flex-col justify-center items-center p-3 gap-6 bg-opacity-80 w-[20em] h-[16em]">
              <p className="text-[26px]">Check list for new Adopters</p>
              <p className="text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                vero earum asperiores tempora sint. Recusandae velit illo culpa
                vel aliquam molestiae placeat rerum nihil corporis nulla, iste
                suscipit ipsum quaerat.
              </p>
              <button className="bg-[#FFB267] py-1 px-[0.6em]">
                Learn More
              </button>
            </div>
            <div className="bg-white flex flex-col justify-center items-center p-3 gap-6 bg-opacity-80 w-[20em] h-[16em]">
              <p className="text-[26px]">Pet Healthcare Near You</p>
              <p className="text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                vero earum asperiores tempora sint. Recusandae velit illo culpa
                vel aliquam molestiae placeat rerum nihil corporis nulla, iste
                suscipit ipsum quaerat.
              </p>
              <button className="bg-[#FFB267] py-1 px-[0.6em]">
                Learn More
              </button>
            </div>
            <div className="bg-white flex flex-col justify-center items-center p-3 gap-6 bg-opacity-80 w-[20em] h-[16em]">
              <p className="text-[26px]">NGO's Near You</p>
              <p className="text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                vero earum asperiores tempora sint. Recusandae velit illo culpa
                vel aliquam molestiae placeat rerum nihil corporis nulla, iste
                suscipit ipsum quaerat.
              </p>
              <button className="bg-[#FFB267] py-1 px-[0.6em]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className=" flex justify-center items-center flex-col pt-[3rem] pb-[3rem]">
        <h2 className=" text-4xl mb-[2rem]">Pet Care</h2>

        <div className="flex justify-between items-center w-[60%] gap-10 ">
          <div className="flex justify-center items-center bg-[#B9A89B]  w-full    px-[2rem]  gap-[2rem]  py-[1.5rem] text-[0.9rem] ">   
    
            <div>
              <img className=" w-[70rem]" src={image2} alt="" />
            </div>
            <div>
              <div>
                <p>New Adopt</p>
              </div>
              <div className=" flex flex-col gap-3">
                <p>
                  Adopted a new pet ? Read about how you can care more them with
                  our verified and tested resources for your dog so that you
                  both are healthy and can have fun together.
                </p>
                <button className="bg-[#524439] py-1 px-[0.6em] text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#B9A89B] w-full  p-[0.5rem]   px-[2rem]  gap-[2rem]  py-[1.5rem] text-[0.9rem]  ">
            <div>
              <img className="w-[70rem]" src={image1} alt="" />
            </div>
            <div>
              <div>
                <p>New Adopt</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>
                  Adopted a new pet ? Read about how you can care more them with
                  our verified and tested resources for your dog so that you
                  both are healthy and can have fun together.
                </p>
                <button className="bg-[#524439] py-1 px-[0.6em] text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
