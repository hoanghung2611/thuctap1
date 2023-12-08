import React from "react";
import { TfiCup } from "react-icons/tfi";
import { RiLightbulbLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";

function QualityCertification({data}) {
    let IconComponent;
  if (data.icon === 'TfiCup') {
    IconComponent = TfiCup;
  } else if (data.icon === 'RiLightbulbLine') {
    IconComponent = RiLightbulbLine;
  } else if (data.icon === 'MdWorkOutline') {
    IconComponent = MdWorkOutline;
  }else {
    IconComponent = FaRegSmile;
  }

    return(
        <div className='px-4 col-span-1'>
        <div className='text-5xl 'style={{textAlign:"-webkit-center"}}>< IconComponent/></div>
        <h2 className='text-[#F58634] my-3 font-bold' >{data.point}</h2>
        <span className='text-xl'>{data.text}</span>
    </div>
    )
}

export default QualityCertification