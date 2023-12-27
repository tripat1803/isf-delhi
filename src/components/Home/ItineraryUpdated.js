import React, { useRef } from 'react';
import { FaGlobe, FaHandshake } from "react-icons/fa";
import { GiInauguration, GiCoffeeCup, GiForkKnifeSpoon, GiBullseye } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRocketchat } from "react-icons/fa";


function Link({ title, time, icon, top = false, bottom = false }) {
    return (
        <div className='flex gap-10 text-[#CA5C59] font-semibold'>
            <div className={`w-[210px] py-6 whitespace-nowrap pr-8 border-r-[4px] border-[#CA5C59] timeline-text relative ${top && "pt-10"} ${bottom && "pb-10"} ${top && "timeline-top-icon"}`}>{time}</div>
            <div className={`text-2xl w-[600px] ${top && "pt-[14px]"} ${bottom && "pb-4"} self-center flex items-center gap-3 relative ${bottom && "timeline-bottom-icon"}`}>{icon}<span>{title}</span></div>
        </div>
    )
}
function SubLink({ title, time, icon }) {
    return (
        <div className='flex gap-10 text-[#333333] font-semibold ml-[30px]'>
            <div className='w-[180px] py-3 whitespace-nowrap pr-8 border-r-[4px] border-[#CA5C59] text-sm'>{time}</div>
            <div className={`text-xl w-[600px] self-center ${!time && "py-2"} flex items-center gap-3`}>{icon}<span>{title}</span></div>
        </div>
    );
}

export default function ItineraryUpdated() {
    let sectionRef = useRef();

    // useEffect(() => {
    //     window.onscroll = () => {
    //         console.log(sectionRef.current.childNode);
    //     }
    // }, []);

    return (
        <div id='itinerary' className='flex flex-col xlg:items-center gap-12 py-20 px-4 ss:px-8 sm:px-16'>
            <div className='font-bold 2xl:text-6xl ss:text-5xl xs:text-4xl text-3xl !leading-[120%] text-[#601212]'>
                <p>Timeline of the event</p>
            </div>
            <div ref={sectionRef} className='flex flex-col'>
                {/* Links */}
                <Link icon={<FaRocketchat className='text-3xl' />} top={true} title={"Fireside Chat with ISF Pearls"} time={"09:00 AM - 10:00 AM"} />
                <Link icon={<GiInauguration className='text-3xl'/>} title={"Inauguration Of ISF -DELHI 2024 & Exhibition"} time={"10:00 AM - 10:30 AM"} />
                <Link icon={<GiCoffeeCup className='text-3xl'/>} title={"Networking Break Tea /Coffee"} time={"10:30 AM - 11:00 AM"} />
                <Link icon={<IoPeopleSharp className='text-3xl' />} title={"Special Key Notes"} time={"11:00 AM - 12:00 PM"} />

                {/* Sub Links */}
                <SubLink title={"Special Keynote By Air Marshal RKS Shera PVSM, AVSM, VSM (Retd.)"} time={"11:00 AM - 11:20 AM"} />
                <SubLink title={"Special  Keynote By Ms. Hargunjit Kaur IAS  Secretary- Industries, Finance and Tourism, Chandigarh Administration"} time={"11:20 AM - 11:40 AM"} />
                <SubLink title={"Special Keynote By Dr. Satish Kumar CSIR- CSIO, Chandigarh"} time={"11:40 AM - 12:00 PM"} />

                {/* Links */}
                <Link icon={<GiForkKnifeSpoon className='text-3xl'/>} title={"Lunch"} time={"12:00 PM - 01:00 PM"} />
                <Link icon={<GiBullseye className='text-3xl'/>} title={"The  Spotlight  ISF - DELHI 2024"} time={"01:00 PM - 03:00 PM"} />

                {/* Sub Links */}
                <SubLink title={"Conference Inauguration"} />
                <SubLink title={"Lightning of Lamp-marking the Inauguration"} />
                <SubLink title={"Inaugural Speech by Hon'ble Dr. J.A. Chowdary "} />
                <SubLink title={"Guest of Honour-Dr. Madhu Chitkara, Pro-Chancellor, Chitkara University"} />
                <SubLink title={"Guest of Honour-Mr. Arvind Kumar, Director General, STPI"} />
                <SubLink title={"Guest of Honour-Dr. Jitendra Kumar, Managing Director , BIRAC"} />
                <SubLink title={"Guest of Honour-Mr. T.C. Gupta  Chairperson  Right To Service Commission, Govt. of  Haryana"} />
                <SubLink title={"Special Address by Chief Guest"} />
                <SubLink title={"MoU Exchanges and Award Session"} />

                {/* Links */}
                <Link icon={<FaHandshake className='text-3xl' />} title={"The ISF-DELHI 2024 Odyssey"} time={"03:00 PM - 05:30 PM"} />

                {/* Sub Links */}
                <SubLink title={"Panel Discussion - What Next for Incubators and Accelerators"} time={"03:00 PM - 04:00 PM"} />
                <SubLink title={"Round Table Discussion - Investments Landscape for Startups"} time={"04:00 PM - 05:30 PM"} />                

                {/* Links */}
                <Link icon={<FaGlobe className='text-3xl'/>} bottom={true} title={"CXO Networking Dinner (By Invite Only)"} time={"09:00 AM - 10:00 AM"} />
            </div>
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
        </div>
    );
}
