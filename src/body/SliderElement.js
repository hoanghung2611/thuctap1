import React, { useState } from 'react'
import SliderChildren from '../components/SliderChildren'

const SliderElement = ({next}) => {

    const [data, setData] = useState([
        {
            image: 'https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:"Cà Chua Việt Nam",
            text: "Ăn cà chua có tác dụng gì",
            next:"back",
            submit:"MUA HÀNG NGAY",
        },
        {
          image: 'https://images.pexels.com/photos/952353/pexels-photo-952353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title:"Chuyên gia dinh dưỡng",
          text: "10 loại rau củ quả bạn nên ăn mỗi tuần",
          next:"next",
          submit:"MUA HÀNG NGAY",
      },
      ])

  return (
    <div className='setshow mx-20'>
    {
        data&& data.filter(x => x.next == next).map((item,index)=>{
          return <SliderChildren data={item}/>
        })
      }
    </div>
  )
}

export default SliderElement