import React, { useState } from 'react'
import Label from '../components/Label'

const Sticker = () => {
    const [data,setdata] = useState([
        "Món Chay Mặn",
        "Hàng Chay Cấp Đông",
        "Món Cơm",
        "Đồ Uống",
        "Món Nộm",
        "Rau Củ",
    ])
  return (
    
    <div>
        {
            data.map((item,index) => {
               return <Label data={item}/>                      
            })
        }
  </div>
          
  )
}

export default Sticker