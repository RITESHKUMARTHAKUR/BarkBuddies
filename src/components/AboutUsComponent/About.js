import React from "react";
import Logo from "../../images/BarkBuddieslogo.png";
import Ritesh from "../../images/rit.jpg"
import Harsh from "../../images/Harsh.png"
import Aryan from "../../images/Aryan.png"
import Darshan from "../../images/Darshan.png"

const About = () => {
  return (
    <div className="pb-16 flex items-center gap-10 flex-col pt-24">
      <img className="w-[29%]" src={Logo} alt="Bark Buddies Logo" />
      <p className="w-9/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere
        nobis repudiandae qui ullam vel labore sit in non id asperiores animi
        porro similique, sequi obcaecati atque ea? Tempore, repellendus. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Laudantium explicabo
        hic sunt nihil asperiores soluta id atque tempora consequatur earum
        aliquam cupiditate ratione vero culpa ipsum accusamus voluptatibus
        iusto, aliquid quos autem corrupti perspiciatis et? Expedita dicta
        laborum, et inventore iusto porro laboriosam alias cumque asperiores
        esse veniam aperiam molestias voluptatem architecto, totam.
      </p>
      <div className="flex flex-col items-center">
        <p className="font-bold text-[2em]">Our Team</p>
        <div className="grid grid-cols-2 px-36 pt-6 gap-4">
            <div className="flex items-center bg-[#D9D9D9] rounded-lg ">
                <img className="w-[25%] h-[100%] rounded-lg object-cover" src={Ritesh} alt="Ritesh pic" />
                <div className="px-4 py-4">
                    <span>
                    <p>RITESH THAKUR</p>
                    <p className="text-sm text-[#616161]">Full Stack</p>
                    </span>
                    <p className="text-xs pt-4 text-[#616161]">This guy is happy because he got a good team, bichare ko akele kaam nahi karna pad raha</p>
                </div>
            </div>
            <div className="flex items-center bg-[#D9D9D9] rounded-lg ">
                <img className="w-[25%] h-[100%]  rounded-lg object-cover" src={Harsh} alt="Ritesh pic" />
                <div className="px-4 py-4">
                    <span>
                    <p>HARSH KHATRI</p>
                    <p className="text-sm text-[#616161]">Frontend</p>
                    </span>
                    <p className="text-xs pt-4 text-[#616161]">This guy is always happy, especially dance karte samay.</p>
                </div>
            </div>
            <div className="flex items-center bg-[#D9D9D9] rounded-lg ">
                <img className="w-[25%] h-[100%]  rounded-lg object-cover" src={Darshan} alt="Ritesh pic" />
                <div className="px-4 py-4">
                    <span>
                    <p>DARSHAN</p>
                    <p className="text-sm text-[#616161]">BACKEND</p>
                    </span>
                    <p className="text-xs pt-4 text-[#616161]">Yeh maja karne aay tha, kaam kar raha hai...aur thoda sa maja bhi </p>
                </div>
            </div>
            <div className="flex items-center bg-[#D9D9D9] rounded-lg ">
                <img className="w-[25%] h-[100%]  rounded-lg object-cover" src={Aryan} alt="Ritesh pic" />
                <div className="px-4 py-4">
                    <span>
                    <p>ARYAN SONI</p>
                    <p className="text-sm text-[#616161]">UI/UX</p>
                    </span>
                    <p className="text-xs pt-4 text-[#616161]">Hello Channel, This is my guys..!..!..!</p>
                </div>
            </div>
            
            
        </div>
      </div>
    </div>
  );
};

export default About;
