import React, { useEffect, useRef } from 'react';
import { FaGlobe } from "react-icons/fa";

function Link({ title, time, icon, top = false, bottom = false }) {
    return (
        <div className='flex gap-10 text-[#CA5C59] font-semibold'>
            <div className={`w-[210px] py-6 whitespace-nowrap pr-8 border-r-[4px] border-[#CA5C59] timeline-text relative ${top && "pt-10"} ${bottom && "pb-10"} ${top && "timeline-top-icon"}`}>{time}</div>
            <div className={`text-2xl w-[600px] ${top && "pt-[14px]"} ${bottom && "pb-4"} self-center flex items-center gap-2 relative ${bottom && "timeline-bottom-icon"}`}>{icon}<span>{title}</span></div>
        </div>
    )
}
function SubLink({ title, time, icon }) {
    return (
        <div className='flex gap-10 text-[#333333] font-semibold ml-[30px]'>
            <div className='w-[180px] py-3 whitespace-nowrap pr-8 border-r-[4px] border-[#CA5C59] text-sm'>{time}</div>
            <div className={`text-xl w-[600px] self-center ${!time && "py-2"} flex items-center gap-2`}>{icon}<span>{title}</span></div>
        </div>
    )
}

export default function ItineraryUpdated() {
    let sectionRef = useRef();

    useEffect(() => {
        window.onscroll = () => {
            console.log(sectionRef.current.childNode);
        }
    }, []);

    return (
        <div id='itinerary' className='flex flex-col xlg:items-center gap-12 py-20 px-4 ss:px-8 sm:px-16'>
            <div className='font-bold 2xl:text-6xl ss:text-5xl xs:text-4xl text-3xl !leading-[120%] text-[#601212]'>
                <p>Timeline of the event</p>
            </div>
            <div ref={sectionRef} className='flex flex-col'>
                {/* Links */}
                <Link icon={<FaGlobe/>} top={true} title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
                <Link title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
                <Link title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
                <Link title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />

                {/* Sub Links */}
                <SubLink title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />

                {/* Links */}
                <Link title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
                <Link title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />

                {/* Sub Links */}
                <SubLink title={"Fireside Chat with ISF Pearls Fireside Chat with ISF Pearls Fireside Chat with ISF Pearls Chat with ISF Pearls Fireside Chat with ISF Pearls"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} />

                {/* Links */}
                <Link title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />

                {/* Sub Links */}
                <SubLink title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
                <SubLink title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />                

                {/* Links */}
                <Link bottom={true} title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
            </div>
        </div>
    );
}

{/* <div className='w-full sm:w-[450px] xlg:w-[800px] flex'>
    <div className='w-full xlg:w-[50%] xlg:ml-[5px] px-5  border-t-[5px] border-l-[5px] xlg:border-l-0 border-r-0 xlg:border-r-[5px] border-black rounded-tl-xl rounded-tr-none xlg:rounded-tl-none xlg:rounded-tr-xl'>
        <div className='relative px-6 py-4 flex flex-col gap-2 justify-center rounded-xl bg-[#CA5C59] text-white'>
            <p className='text-xl timeline-item'>Fireside Chat with ISF Pearls</p>
            <p>09:00 AM - 10:00 AM</p>
        </div>
    </div>
</div>
<div className='w-full sm:w-[450px] xlg:w-[800px] flex xlg:justify-end'>
    <div className='w-full xlg:-ml-[5px] xlg:w-[50%] -mt-3 px-5  border-t-[5px] border-l-[5px] border-black rounded-tl-xl'>
        <div className='relative px-6 py-4 flex flex-col gap-2 justify-center rounded-xl bg-[#CA5C59] text-white'>
            <p className='text-xl timeline-item'>Inauguration Of ISF -DELHI 2024 & Exhibition</p>
            <p>10:00 AM -10:30 AM</p>
        </div>
    </div>
</div> */}