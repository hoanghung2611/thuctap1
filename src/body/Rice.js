import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import CartProduct from '../components/CartProduct'

const Rice = () => {
    const [data, setdata] = useState([ 
        {
            image: 'https://res.cloudinary.com/doedovklj/image/upload/v1688397846/xyz-abc_638240198430863982image.webp',
            sale: 25,
            name: "Cơm sushi chay",
            price: 95000,
        },
    ])
  return (
    <div className='grid grid-cols-4 mx-20 font-VietnamPro  gap-3'>
    {
        data && data.map((item, index)=>{
            return   <CartProduct data={item} />
        })
    }

</div>
  )
}

export default Rice