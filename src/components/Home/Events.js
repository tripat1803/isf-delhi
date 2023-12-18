import React from 'react';

const SpeakerArr = [
  {
    name: "DR. MADHU CHITKARA",
    designation: "Pro Chancellor Chitkara University",
    image: require("../../assets/Speakers/madhu_chitkara.jpeg")
  },
  {
    name: "MR. ARVIND KUMAR",
    designation: "Director General STPI",
    image: require("../../assets/Speakers/ARVIND_KUMAR.webp")
  },
  {
    name: "DR. JITENDRA KUMAR",
    designation: "Managing Director BIRAC",
    image: require("../../assets/Speakers/JITENDRA_KUMAR.webp")
  },
  {
    name: "MR. T.C. GUPTA",
    designation: "Chairperson Right To Service Commission Govt. Of Haryana",
    image: require("../../assets/Speakers/TC_GUPTA.jpg")
  },
  {
    name: "MS. HARGUNJIT KAUR IAS",
    designation: "Secretary- Industries, Finance and Tourism Chandigarh Administration",
    image: require("../../assets/Speakers/HARGUNJIT_KAUR.jpg")
  },
  {
    name: "DR. SATISH KUMAR",
    designation: "CSIR- CSIO Chandigarh",
    image: require("../../assets/Speakers/SATISH_KUMAR.jpg")
  },
  {
    name: "AIR MARSHAL RKS SHERA (RETD.)",
    designation: "PVSM, AVSM, VSM",
    image: require("../../assets/Speakers/AIR_MARSHAL_RKS.jpg")
  },
  {
    name: "MR. ALOK MITTAL",
    designation: "President TiE Delhi NCR",
    image: require("../../assets/Speakers/ALOK_MITTAL.png")
  },
  {
    name: "DR. PARMEET SINGH CHADHA",
    designation: "CEO World Exports (India)",
    image: require("../../assets/Speakers/Parmeet_Singh_Chadha.png")
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
    <div id='speakers' className='flex flex-col gap-8 items-center py-12 px-8 sm:px-16'>
      <h1 className='text-5xl font-semibold text-[#601212]'>Eminent Guests</h1>
      <div className='max-w-screen-xl grid grid-cols-[270px] md:grid-cols-[270px_270px] lgx:grid-cols-[270px_270px_270px_270px] gap-8'>
        {
          SpeakerArr.slice(0, 8).map((item) => (
            <SpeakerCard key={item.name} data={item} />
          ))
        }
      </div>
      <div className='w-[270px]'>
        <SpeakerCard key={SpeakerArr[8].name} data={SpeakerArr[8]} />
      </div>
    </div>
  )
}
