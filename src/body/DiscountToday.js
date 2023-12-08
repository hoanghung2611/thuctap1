import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import CartProduct from '../components/CartProduct'
import { discountProduct } from '../data/SaleToday'
const DiscountToday = () => {
    const [data,setdata] = useState(discountProduct)
    return (

        <div className=' xl:mx-20 md:mx-10 px-4 pb-8'>
            <div className='grid xl:grid-cols-4 md:grid-cols-3  sm:grid-cols-2   mx-20 font-VietnamPro py-10 '>
                {
                    data.map((item,index)=>{
                       return <CartProduct data={item}/>
                    })
                }
            </div>
        </div>
        
      )
}

export default DiscountToday