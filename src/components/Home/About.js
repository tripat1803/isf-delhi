import React from 'react';

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
                    <h4 className='text-[#CA5C59] text-3xl font-semibold'>About ISF Delhi 2024</h4>
                    {/* <h2 className='text-4xl font-semibold'>Lorem ipsum dolor sit amet Lorem ipsum</h2> */}
                    <p className='text-[#333333]'>The International Startup Foundation (ISF) is dedicated to transforming the startup landscape by empowering visionaries and fostering a vibrant entrepreneurial ecosystem. Our mission is crafted to assist entrepreneurs in unlocking their full potential.</p>
                    <p className='text-[#333333]'>Aligned with the commendable initiatives of the Government of India (GOI), such as Startup India, Digital India, and Make-in-India, the ISF - Delhi 2024 festival is set to unite over 50,000 startups. This gathering aims to propel their missions forward, contributing to the vision of an Atmanirbhar Bharat.</p>
                    <p className='text-[#333333]'>In collaboration with Chitkara University, the Center for Entrepreneurship and Economic Development (CEED) is deeply committed to this mission. CEED aspires to cultivate a new generation of Indian entrepreneurs, poised to make a global impact and extend their influence worldwide.</p>
                    {/* <div className='text-[#333333] flex gap-3 items-center text-xl'>
                        <span className='opacity-90'>Powered By</span> 
                        <img className='w-[50px] h-[50px]' src={require("../../assets/chitkara.jpeg")} />
                        <img className='w-[50px] h-[50px]' src={require("../../assets/india-tech.jpg")} />
                    </div>
                    <p className='text-[#444444] opacity-70 flex gap-2 items-center'><FaCalendarDays/> <span>January 9, 2024</span></p> */}
                </div>
            </div>
        </div>
    )
}