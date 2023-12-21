import React from 'react';
import { FaCalendarDays } from "react-icons/fa6";

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
                    <h4 className='text-[#CA5C59] text-xl font-semibold'>About ISF</h4>
                    {/* <h2 className='text-4xl font-semibold'>Lorem ipsum dolor sit amet Lorem ipsum</h2> */}
                    <p className='text-[#333333] text-xl'>The mission of the International Startup Foundation (ISF) is to revolutionize the startup landscape by empowering entrepreneurs and nurturing a dynamic startup ecosystem. This initiative is designed to help entrepreneurs realize their utmost potential.</p>
                    <p className='text-[#333333] text-xl'>This festival is complementary to the great initiatives of Government of India (GOI) such as Startup India, Digital India, Make-in-India, etc and will bring together more than 50,000+ startups to advance their missions and drive towards an Atmanirbhar Bharat.</p>
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