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
    if (params && params.id) {
      if (SpeakerArr[params.id]) {
        setData(SpeakerArr[params.id]);
      } else {
        navigate("/not-found");
      }
    } else {
      navigate("/not-found");
    }
  }, [params]);

  return (
    <div className="flex gap-10 items-center py-12 px-8 sm:px-16">
      <div className="w-7/12 my-10 p-4 flex flex-col gap-6">
        <div>
          <p className="-ml-[3px] text-5xl mb-1 font-semibold text-[#f56f6c] cursor-pointer hover:text-[#c95a58]">{data?.name}</p>
          <p className="font-semibold text-xl">{data?.designation}</p>
        </div>
        <div className="flex flex-col gap-3">
          {
            (data.body && data.body.length != 0) && data.body.map((item) => {
              return (
                <p key={item}>{item}</p>
              )
            })
          }
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img className="w-[400px] h-[550px] object-contain rounded-lg overflow-hidden" src={data?.image} alt="" />
      </div>
    </div>
  );
}