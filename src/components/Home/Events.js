import React from 'react';

function EventsCard(){
    return (
        <div className='w-full h-[20rem] rounded-lg bg-[#CA5C59]'>

        </div>
    )
}

export default function Events() {
  return (
    <div className='flex flex-col gap-8 items-center py-12 px-8 sm:px-16'>
        <h1 className='text-5xl font-semibold text-[#601212]'>Events</h1>
        <div className='w-full max-w-screen-xl grid grid-cols-3 gap-8'>
            <EventsCard/>
            <EventsCard/>
            <EventsCard/>
            <EventsCard/>
            <EventsCard/>
            <EventsCard/>
            <EventsCard/>
            <EventsCard/>
            <EventsCard/>
        </div>
    </div>
  )
}
