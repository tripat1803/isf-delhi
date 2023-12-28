import React from 'react';
import { FaRocketchat, FaGlobe } from 'react-icons/fa';
import { CgNotes } from "react-icons/cg";
import { GiDiscussion } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function Hero() {
  return (
    <div id='home' className='flex flex-col min-h-[100vh] relative'>
      <img className='absolute top-0 left-0 w-full h-full object-cover z-[1]' src={require("../../assets/background.jpg")} />
      <div className='z-[13] bg-black py-18 px-4 ss:px-8 sm:px-16 text-white w-full flex-1 flex flex-col gap-8 justify-center items-center bg-opacity-70 relative'>
        <h1 className='text-5xl font-semibold !capitalize text-center leading-[120%] mt-6'> breaking <span className='text-[#F56F6C]'>barriers</span> through<br /> social <span className='text-[#F56F6C]'>innovation</span></h1>
        <div className='grid grid-cols-2 ss:grid-cols-3 gap-3 p-3 text-sm'>
          <div className='px-2 py-3 rounded-lg bg-[#CA5C59] text-center flex flex-col items-center justify-center gap-2'><FaRocketchat className='text-3xl' /><span>Fireside Chats</span></div>
          <div className='px-2 py-3 rounded-lg bg-[#CA5C59] text-center flex flex-col items-center justify-center gap-2'><CgNotes className='text-3xl' /><span>Keynote Sessions</span></div>
          <div className='px-2 py-3 rounded-lg bg-[#CA5C59] text-center flex flex-col items-center justify-center gap-2'><FaMoneyBillTrendUp className='text-3xl' /><span>Investor Pitch</span></div>
          <div className='px-2 py-3 rounded-lg bg-[#CA5C59] text-center flex flex-col items-center justify-center gap-2'><GiDiscussion className='text-3xl' /><span>Panel Discussions</span></div>
          <div className='px-2 py-3 rounded-lg bg-[#CA5C59] text-center flex flex-col items-center justify-center gap-2'><BsGraphUpArrow className='text-3xl' /><span>Startup Street</span></div>
          <div className='px-2 py-3 rounded-lg bg-[#CA5C59] text-center flex flex-col items-center justify-center gap-2'><FaGlobe className='text-3xl'/><span>Networking</span></div>
        </div>
      </div>
    </div>
  );
}