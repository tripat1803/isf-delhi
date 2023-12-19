import React, { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SpeakerArr } from '../utils/SpakerData';

export default function SpeakerInfo() {

  let params = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState({});

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if(params && params.id){
      if(SpeakerArr[params.id]){
        setData(SpeakerArr[params.id]);
      } else {
        navigate("/not-found");
      }
    } else {
      navigate("/not-found");
    }
  }, [params]);

  return (
    <div className="p-20">
      <div className="flex gap-10 items-center p-1">
        <div className="w-7/12 my-10 p-4 flex flex-col gap-5">
          <div>
            <p className="-ml-[3px] text-5xl mb-1 font-semibold text-[#f56f6c] cursor-pointer hover:text-[#c95a58]">{data?.name}</p>
            <p className="font-semibold text-xl">{data?.designation}</p>
          </div>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Porttitor eget dolor morbi non arcu. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sit amet cursus sit amet dictum sit amet justo. Eu lobortis elementum nibh tellus molestie nunc non. Gravida quis blandit turpis cursus. Arcu dui vivamus arcu felis bibendum ut tristique et. Placerat duis ultricies lacus sed turpis tincidunt id. Mauris nunc congue nisi vitae. Dignissim diam quis enim lobortis scelerisque. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Rutrum quisque non tellus orci ac auctor augue. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Interdum varius sit amet mattis vulputate. Vel elit scelerisque mauris pellentesque pulvinar. Eleifend mi in nulla posuere. Habitasse platea dictumst quisque sagittis purus sit amet volutpat.</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img className="w-full h-full object-contain rounded-lg" src={data?.image} alt="" />
        </div>
      </div>
    </div>
  );
}