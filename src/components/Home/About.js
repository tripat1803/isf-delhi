import React from 'react'

export default function About() {
    return (
        <div id='about' className='flex flex-col items-center justify-between py-20 px-8 sm:px-16'>
            <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center gap-12">
                <div className='w-full sm:w-[65%] lg:w-[45%] relative'>
                    <img className='absolute top-0 -left-[20px] w-[90px] h-[90px] object-contain' src={require("../../assets/icon1.png")} />
                    <img className='absolute bottom-0 right-[20px] w-[80px] h-[80px] object-contain' src={require("../../assets/icon2.png")} />
                    <img className='w-[80%] h-full object-contain' src={require("../../assets/hero-bg.png")} />
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <h4 className='text-[#CA5C59] text-xl font-semibold'>About Us</h4>
                    {/* <h2 className='text-4xl font-semibold'>Lorem ipsum dolor sit amet Lorem ipsum</h2> */}
                    <p className='text-[#333333] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <p className='text-[#444444] opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}
