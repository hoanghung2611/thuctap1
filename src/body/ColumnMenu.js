import React, { useState } from 'react'
import SubMenu from '../components/SubMenu'

const ColumnMenu = () => {
    const [data,setdata] =useState([
        
           "Tất Cả Danh Mục",
        
            "Món Chay Mặn",
        
        
            "Hàng Chay Cấp Đông",
        
       
           "Món Cơm",
        
        
            " Đồ Uống",

            "Món Nộm",
       
           "Rau Củ",
      
    ])
  return (
    <div>
        {
            data.map((item,index) =>{
                return <SubMenu data={item}/>

            })
        }
    </div>
  )
}

export default ColumnMenu