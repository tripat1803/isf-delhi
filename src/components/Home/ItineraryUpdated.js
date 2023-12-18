import React from 'react';

export default function ItineraryUpdated() {
    return (
        <div className='flex flex-col xlg:items-center gap-12 py-20 px-4 ss:px-8 sm:px-16'>
            <div className='font-bold 2xl:text-6xl ss:text-5xl xs:text-4xl text-3xl !leading-[120%] text-[#601212]'>
                <p>Timeline of the event</p>
            </div>
            <div className='flex flex-col'>
                <div className='w-full sm:w-[450px] xlg:w-[800px] flex'>
                    <div className='w-full xlg:w-[50%] xlg:ml-[5px] px-5 py-6 border-t-[5px] border-l-[5px] xlg:border-l-0 border-r-0 xlg:border-r-[5px] border-black rounded-tl-xl rounded-tr-none xlg:rounded-tl-none xlg:rounded-tr-xl'>
                        <div className='relative px-6 py-4 flex flex-col gap-2 justify-center rounded-xl bg-[#CA5C59] text-white'>
                            <p className='text-xl timeline-item'>Fireside Chat with ISF Pearls</p>
                            <p>09:00 AM - 10:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[450px] xlg:w-[800px] flex xlg:justify-end'>
                    <div className='w-full xlg:-ml-[5px] xlg:w-[50%] -mt-3 px-5 py-6 border-t-[5px] border-l-[5px] border-black rounded-tl-xl'>
                        <div className='relative px-6 py-4 flex flex-col gap-2 justify-center rounded-xl bg-[#CA5C59] text-white'>
                            <p className='text-xl timeline-item'>Inauguration Of ISF -DELHI 2024 & Exhibition</p>
                            <p>10:00 AM -10:30 AM</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[450px] xlg:w-[800px] flex'>
                    <div className='w-full xlg:w-[50%] xlg:ml-[5px] -mt-3 px-5 py-6 border-t-[5px] border-l-[5px] xlg:border-l-0 border-r-0 xlg:border-r-[5px] border-black rounded-tl-xl rounded-tr-none xlg:rounded-tl-none xlg:rounded-tr-xl'>
                        <div className='relative px-6 py-4 flex flex-col gap-2 justify-center rounded-xl bg-[#CA5C59] text-white'>
                            <p className='text-xl timeline-item'>Networking Break Tea /Coffee</p>
                            <p>10:30 AM -11:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[450px] xlg:w-[800px] flex xlg:justify-end'>
                    <div className='w-full xlg:-ml-[5px] xlg:w-[50%] -mt-3 px-5 py-6 border-t-[5px] border-l-[5px] border-black rounded-tl-xl'>
                        <div className='relative px-6 py-4 flex flex-col gap-2 justify-center rounded-xl bg-[#CA5C59] text-white'>
                            <p className='text-xl timeline-item'>Special Keynote By Air Marshal RKS Shera PVSM, AVSM, VSM (Retd.) </p>
                            <p>11:00 AM - 11:20 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
