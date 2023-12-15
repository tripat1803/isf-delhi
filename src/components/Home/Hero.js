import React from 'react';

export default function Hero() {
  return (
    <div id='home' className='flex flex-col min-h-[100vh] relative'>
      <img className='absolute top-0 left-0 w-full h-full object-cover z-[1]' src={require("../../assets/background.png")} />
      <div className='z-[13] bg-[#034D5A] py-12 px-4 ss:px-8 sm:px-16 text-white w-full flex-1 flex flex-col gap-8 justify-center items-center bg-opacity-90 relative'>
        <h1 className='text-5xl font-semibold !capitalize text-center leading-[120%]'> breaking <span className='text-[#F56F6C]'>barriers</span> through<br /> social <span className='text-[#F56F6C]'>innovation</span></h1>
        <div className='grid grid-cols-2 ss:grid-cols-3 gap-2 p-3'>
          <div className='px-5 py-2 bg-[#CA5C59] text-center flex items-center justify-center'>Fireside Chats</div>
          <div className='px-5 py-2 bg-[#CA5C59] text-center flex items-center justify-center'>Keynote Sessions</div>
          <div className='px-5 py-2 bg-[#CA5C59] text-center flex items-center justify-center'>Investor Pitch</div>
          <div className='px-5 py-2 bg-[#CA5C59] text-center flex items-center justify-center'>Panel Discussions</div>
          <div className='px-5 py-2 bg-[#CA5C59] text-center flex items-center justify-center'>Startup Street</div>
          <div className='px-5 py-2 bg-[#CA5C59] text-center flex items-center justify-center'>Networking</div>
        </div>
      </div>
    </div>
  );
}