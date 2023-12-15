import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Itinerary() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-3000px",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "3000 top",
                    scrub: 0.6,
                    pin: true
                },
            }
        );

        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    return (
        <div className='overflow-hidden'>
            <div ref={triggerRef} className='flex flex-col gap-10 justify-center py-20 h-[100vh] px-4 ss:px-8 sm:px-16'>
                <div className='w-full font-bold 2xl:text-6xl ss:text-5xl xs:text-4xl text-3xl !leading-[120%] text-[#601212]'>
                    <p>Timeline of the event</p>
                </div>
                <div ref={sectionRef} className='flex w-[2700px] relative'>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>09:00 AM - 10:00 AM</p>
                            <p className='text-2xl font-semibold'>Fireside Chat with ISF Pearls</p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>10:00 AM -10:30 AM</p>
                            <p className='text-2xl font-semibold'>Inauguration Of ISF -DELHI 2024 & Exhibition</p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>10:30 AM -11:00 AM</p>
                            <p className='text-2xl font-semibold'>Networking Break Tea /Coffee</p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>11:00  - 11:20 AM</p>
                            <p className='text-2xl font-semibold'>Special Keynote By Air Marshal RKS Shera PVSM, AVSM, VSM (Retd.) </p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>11:20 - 11:40 AM</p>
                            <p className='text-2xl font-semibold'>Special  Keynote By Ms. Hargunjit Kaur IAS  Secretary- Industries, Finance and  Tourism, Chandigarh Administration</p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>11:40 - 12:00 PM</p>
                            <p className='text-2xl font-semibold'>Special Keynote By Dr. Satish Kumar CSIR- CSIO, Chandigarh </p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>12:00 PM - 01:00 PM</p>
                            <p className='text-2xl font-semibold'>Lunch</p>
                        </div>
                    </div>
                    <div className='w-[400px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-2'>
                            <p className='text-lg'>01:00 PM - 03:00 PM</p>
                            <p className='text-sm'>
                                <ul className='list-disc flex flex-col gap-[2px] list-box'>
                                    <l1>Conference Inauguration</l1>
                                    <l1>Lightning of Lamp-marking the Inauguration</l1>
                                    <l1>Inaugural Speech by Hon’ble Dr. J.A. Chowdary</l1>
                                    <l1>Guest of Honour-Dr. Madhu Chitkara, Pro-Chancellor, Chitkara University</l1>
                                    <l1>Guest of Honour-Mr. Arvind Kumar, Director General, STPI</l1>
                                    <l1>Guest of Honour-Dr. Jitendra Kumar, Managing Director , BIRAC</l1>
                                    <l1>Guest of Honour-Mr. T.C. Gupta  I.A.S.,  Chairperson  Right To Service Commission, Govt. of  Haryana</l1>
                                    <l1>Special Address by Chief Guest</l1>
                                    <l1>MoU Exchanges and Award Session</l1>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>3:00  - 4:00 PM</p>
                            <p className='text-2xl font-semibold'>Panel Discussion - What Next for Incubators and Accelerators</p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>4:00 - 5:30 PM</p>
                            <p className='text-2xl font-semibold'>Round Table Discussion - Investments Landscape for Startups</p>
                        </div>
                    </div>
                    <div className='w-[300px] shrink-0 flex flex-col gap-4'>
                        <div className='flex flex-row min-h-[80px] items-center'>
                            <div className='w-8 h-8 grid place-items-center rounded-full bg-[#F56F6C] text-white'></div>
                            <div className='flex-1 w-1 h-1 bg-[#F56F6C]'></div>
                        </div>
                        <div className='pb-8 pr-6 text-xl 2xl:text-2xl flex flex-col gap-1'>
                            <p className='text-lg'>6:00 PM</p>
                            <p className='text-2xl font-semibold'>CXO Networking Dinner (By Invite Only)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
