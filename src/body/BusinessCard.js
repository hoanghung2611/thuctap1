import React, { useState } from 'react'
import TeamWrapper from '../components/TeamWrapper'
const BusinessCard = () => {
    const [data,setdata] = useState([
        {
            image: 'https://polyfood.store/assets/img/team/lead.jpg',
            name: "Lê Văn Thuận",
        },
        {
            image: 'https://polyfood.store/assets/img/team/member.jpg',
            name: "Trần Văn Giang",
        },
        {
            image: 'https://polyfood.store/assets/img/team/member.jpg',
            name: "Đồng Công Định",
        },
        {
            image: 'https://polyfood.store/assets/img/team/member.jpg',
            name: "Nguyễn Đăng Huy",
        },
        {
            image: 'https://polyfood.store/assets/img/team/member.jpg',
            name: "Nguyễn Đức Duy",
        },
        {
            image: 'https://polyfood.store/assets/img/team/member.jpg',
            name: "Đinh Đức Hải",
        },
    ])
  return (
    <div className='mx-40 pb-20 pt-24'> 
        <h2 className='text-3xl font-semibold mb-14 before:w-20 before:h-[2px] before:bg-black before:absolute before:mt-[46px] before:ml-[82px]'>Thành viên nhóm</h2>
        <div className='grid grid-cols-4 grid-row-span-2 '>
            {data.map((item,index)=>{
              return  <TeamWrapper data={item}/>
            })
            }
        </div>
    </div>
  )
}

export default BusinessCard