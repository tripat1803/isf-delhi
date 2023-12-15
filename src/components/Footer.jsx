import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Footer() {
    return (
        <div style={{
            background: "#601212"
        }} className='flex justify-center items-center px-8 sm:px-16 py-20'>
            <div className='max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 xlg:grid-cols-3 gap-8'>
                <div className='w-full flex flex-col gap-4 text-white'>
                    <img className='w-[130px]' src={require("../assets/logo.png")} />
                    <p>Chitkara University Centre for
                        Entrepreneurship Education &
                        Development (CUCEED) has indeed
                        imbibed this rhythm of igniting young
                        minds to nurture the Nation’s vision of
                        STARTUP INDIA-STAND UP INDIA.</p>
                </div>
                <div className='w-full text-lg flex sm:justify-center text-white'>
                    <div className='w-[max-content] flex flex-col gap-4'>
                        <p className='text-2xl'>Navigation</p>
                        <HashLink smooth={true} to="/#home">Home</HashLink>
                        <HashLink smooth={true} to="/#about">About</HashLink>
                        <HashLink smooth={true} to={"/#speakers"}>Speakers</HashLink>
                        <HashLink smooth={true} to="/#itinerary">Itinerary</HashLink>
                    </div>
                </div>
                <div className='w-full text-white flex flex-col gap-4'>
                    <p className='text-2xl'>Contact Us</p>
                    <p>CEED, Chitkara University (Punjab)
                        Chandigarh-Patiala National Highway
                        Punjab 140401</p>
                    <p>yuvraj.vashisht@chitkara.edu.in</p>
                    <p>+91-9815090630</p>
                </div>
            </div>
        </div>
    )
}