import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import CartProduct from '../components/CartProduct';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import {dataProduct} from '../data/Product'
const FrozenGoods = ({category}) => {
    const [data, setData] = useState(dataProduct);
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:mx-20 md:mx-10 font-VietnamPro  gap-3'>
        {
            data && category !== 'frozenGoods' && data.filter(x=>x.category == category).map((item, index)=>{
                return <CartProduct data={item} />
            })
        }
           {
            data && category === 'frozenGoods' && data.filter(x=>x.category == category).map((item, index)=>{
                return   <CartProduct data={item} />
            })
        }
        {/* {
            data && category === 'all' && data.map((item, index)=>{
                return   <CartProduct data={item} />
            })
        } */}
        
                       
    </div>
  )
}

export default FrozenGoods