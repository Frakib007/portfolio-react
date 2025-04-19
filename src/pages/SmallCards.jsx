import React from 'react';
import { FaBootstrap, FaReact, FaVuejs, FaAngular } from 'react-icons/fa';
import { SiTailwindcss, SiSvelte } from 'react-icons/si';
import smallCardData from '../data/smallcard.json';

const iconMapping = {
  FaBootstrap: FaBootstrap,
  SiTailwindcss: SiTailwindcss,
  FaReact: FaReact,
  FaVuejs: FaVuejs,
  FaAngular: FaAngular,
  FaSvelte: SiSvelte,
};

const SmallCard = () => {
  return (
    <div className=" flex justify-center gap-20 bg-[#292929] p-6 ">
      {smallCardData.map((item, index) => {
        const IconComponent = iconMapping[item.icon];
        if (!IconComponent) {
          console.error(`Icon ${item.icon} not found in iconMapping`);
          return null;
        }
        return (
          <div key={index} className="inline-flex w-[146px] h-[51px] px-[14px] py-[9px] items-center gap-[15px] bg-[#7A7A7A] rounded-lg shadow-md">
            <IconComponent size={32} />
            <p className='text-white font-medium'>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmallCard;