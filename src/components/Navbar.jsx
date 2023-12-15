import React, { useEffect, useRef, useState } from 'react';
import { Color } from '../utils/Color';
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle, AiOutlineMenuUnfold } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
    const [style, setStyle] = useState("-150%");
    const navRef = useRef(null);
    const linkRef = useRef(null);

    // useEffect(() => {
    //     if(window.scrollY > 20){
    //         navRef.current.classList.add("bg-white");
    //         navRef.current.classList.add("drop-shadow-md");
    //         linkRef.current.classList.remove("text-white");
    //         linkRef.current.classList.add("text-[#F56F6C]");
    //     } else {
    //         navRef.current.classList.remove("bg-white");
    //         navRef.current.classList.remove("drop-shadow-md");
    //         linkRef.current.classList.add("text-white");
    //         linkRef.current.classList.remove("text-[#F56F6C]");
    //     }
    //     window.onscroll = (e) => {
    //         if(window.scrollY > 20){
    //             navRef.current.classList.add("bg-white");
    //             navRef.current.classList.add("drop-shadow-md");
    //             linkRef.current.classList.remove("text-white");
    //             linkRef.current.classList.add("text-[#F56F6C]");
    //         } else {
    //             navRef.current.classList.remove("bg-white");
    //             navRef.current.classList.remove("drop-shadow-md");
    //             linkRef.current.classList.add("text-white");
    //             linkRef.current.classList.remove("text-[#F56F6C]");
    //         }
    //     }
    // }, []);

    return (
        <div ref={navRef} className={`duration-300 absolute top-0 left-0 z-[20] w-full flex justify-center items-center py-4 px-8 sm:px-16`}>
            <div className='w-full max-w-screen-2xl flex justify-between'>
                <Link to="/">
                    <img className='w-[100px]' src={require("../assets/logo.png")} />
                </Link>
                <div ref={linkRef} className='hidden ss:flex gap-8 items-center text-lg text-white font-medium'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <HashLink smooth={true} to={"/#events"}>Events</HashLink>
                </div>
                <div className='flex ss:hidden gap-8 items-center font-medium'>
                    <button onClick={() => {
                        setStyle("0%");
                    }}>
                        <AiOutlineMenuUnfold size={24} />
                    </button>
                </div>
            </div>
            <div style={{
                background: Color.primary,
                left: style
            }} className={`fixed top-0 duration-300 h-screen w-screen ss:w-[60vh] sm:w-[40vh] py-12 px-8 bg-white flex flex-col gap-8 z-[30]`}>
                {/* <img className='w-[120px]' src={require("../assets/logo.png")} /> */}
                <AiOutlineCloseCircle onClick={() => {
                    setStyle("-150%");
                }} size={24} color='white' className='absolute top-3 right-3 cursor-pointer' />
                <div className='flex flex-col gap-4 text-lg font-medium text-white'>
                    <Link onClick={() => {
                        setStyle("-150%");
                    }} to="/">Home</Link>
                    <Link onClick={() => {
                        setStyle("-150%");
                    }} to="/about">About</Link>
                    <HashLink onClick={() => {
                        setStyle("-150%");
                    }} smooth={true} to={"/#events"}>Events</HashLink>
                </div>
            </div>
        </div>
    );
}