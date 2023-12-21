import React, { useState } from 'react';
import { SpeakerArr } from '../../utils/SpakerData';
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";

function SpeakerCard({ keyName, data }) {
  let navigate = useNavigate();
  const [style, setStyle] = useState(false);
  return (
    <div onMouseEnter={() => {
      setStyle(true);
    }} onMouseLeave={() => {
      setStyle(false);
    }} onClick={() => {
      navigate("/" + keyName);
    }} className='w-full h-[20rem] rounded-lg flex items-end p-4 relative overflow-hidden cursor-pointer'>
      <img className='absolute top-0 left-0 w-full h-full object-cover z-[1]' src={data.image} />
      <div className='bg-[linear-gradient(180deg,rgba(249,206,205,0.00)_50%,#7A3D3C_90%)] absolute top-0 left-0 w-full h-full z-[2]'></div>
      <div className='z-[13] text-white flex flex-col gap-2'>
        <p className='text-xl font-semibold'>{data.name}</p>
        <p className='text-sm'>{data.designation}</p>
        <MdArrowOutward className='duration-300' style={style ? {
          fontSize: "20px"
        } : {
          fontSize: "0px"
        }} />
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <div id='speakers' className='flex flex-col gap-8 items-center py-12 px-8 sm:px-16'>
      <h1 className='text-5xl font-semibold text-[#601212]'>Eminent Guests</h1>
      <div className='max-w-screen-xl grid grid-cols-[270px] md:grid-cols-[270px_270px] lgx:grid-cols-[270px_270px_270px_270px] gap-8'>
        {
          Object.keys(SpeakerArr).slice(0, 8).map((item) => (
            <SpeakerCard key={SpeakerArr[item].name} keyName={item} data={SpeakerArr[item]} />
          ))
        }
      </div>
      <div className='w-[270px]'>
        <SpeakerCard key={SpeakerArr[Object.keys(SpeakerArr)[8]].name} keyName={Object.keys(SpeakerArr)[8]} data={SpeakerArr[Object.keys(SpeakerArr)[8]]} />
      </div>
    </div>
  )
}
