import React, { useState } from 'react'
import QualityCertification from '../components/QualityCertification'

const Certification = () => {
    const [data,setdata] = useState([
        {
            icon:"TfiCup",
            point:100,
            text:"Được Cấp Chứng Nhận Cơ Sở An Toàn Thực Phẩm"
        },
        {
            icon:"RiLightbulbLine",
            point:100,
            text:"Đảm Bảo Tiêu Chuẩn An Toàn Vệ Sinh Thực Phẩm"
        },
        {
            icon:"MdWorkOutline",
            point:100,
            text:"Tận Tâm, Trách Nhiệm, Nhiệt Tình"
        },
        {
            icon:"FaRegSmile",
            point:1000,
            text:"Khách Hàng Hài Lòng"
        },
    ])
  return (
    <div className='bg-[#f7f7f7]  pb-20 pt-24 '>
        <div className='grid grid-cols-4 mx-40'>
                {
                    data.map((item,index) =>{
                        return <QualityCertification data={item}/>
                    })
                }
        </div>
    </div>
  )
}

export default Certification