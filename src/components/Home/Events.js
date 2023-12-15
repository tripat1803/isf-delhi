import React from 'react';

const SpeakerArr = [
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  }
];

function SpeakerCard({ data }) {
  return (
    <div className='w-full h-[20rem] rounded-lg flex items-end p-4 relative overflow-hidden'>
      <img className='absolute top-0 left-0 w-full h-full object-cover z-[1]' src={data.image} />
      <div className='bg-[linear-gradient(180deg,rgba(249,206,205,0.00)_50%,#7A3D3C_90%)] absolute top-0 left-0 w-full h-full z-[2]'></div>
      <div className='z-[13] text-white'>
        <p className='text-xl font-semibold'>{data.name}</p>
        <p className='text-sm'>{data.designation}</p>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <div className='flex flex-col gap-8 items-center py-12 px-8 sm:px-16'>
      <h1 className='text-5xl font-semibold text-[#601212]'>Event Speakers</h1>
      <div className='max-w-screen-xl grid grid-cols-[250px_250px_250px_250px] gap-8'>
        {
          SpeakerArr.slice(0, 8).map((item) => (
            <SpeakerCard key={item.name} data={item} />
          ))
        }
      </div>
      <div className='w-[250px]'>
        <SpeakerCard key={SpeakerArr[8].name} data={SpeakerArr[8]} />
      </div>
    </div>
  )
}
