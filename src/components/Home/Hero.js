import React from 'react';

export default function Hero() {
  return (
    <div className='flex flex-col min-h-[90vh] relative'>
      <img className='absolute top-0 left-0 w-full h-full object-cover z-[1]' src={require("../../assets/background.png")} />
      <div className='z-[13] bg-[#034D5A] text-white w-full flex-1 flex flex-col gap-12 justify-center items-center bg-opacity-90'>
        <h1 className='text-5xl !capitalize text-center leading-[120%]'> breaking <span className='text-[#F56F6C]'>barriers</span> through<br /> social <span className='text-[#F56F6C]'>innovation</span></h1>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />sed do eiusmod tempor incididunt ut labore</p>
      </div>
    </div>
  )
}
