import React, { useState } from 'react'
import FrozenGoods from './FrozenGoods'
// import { Link, Route, Routes } from 'react-router-dom'
// import Rice from './Rice'
// import Salad from './Salad'
// import VegetarianSalty from './VegetarianSalty'
// import Drinks from './Drinks'
// import Vegetable from './Vegetable'

const List = () => {
  const [category, setCategory] = useState("frozenGoods");
  return (
    <div className='xl:mx-20 md:mx-10 px-4 pb-8'>
        <h2 className='ml-20 py-7 font-Dancing text-left '>Món ăn theo danh mục</h2>
        <div className='pt-9 pb-16'>
            <ul>
                <li className='inline-block px-4 py-2 mx-3 '><h4 className={`hover:text-[#6eab49] cursor-pointer ${category == "frozenGoods" ?'text-[#6EAB49] border-b-2 border-[#6EAB49]' : 'text-black'}`} onClick={()=>setCategory('frozenGoods')}>Hàng chay cấp đông</h4></li>
                <li className='inline-block px-4 py-2 mx-3'><h4 className={`hover:text-[#6eab49] cursor-pointer  ${category == "rice" ?'text-[#6EAB49] border-b-2 border-[#6EAB49]' : 'text-black'}`} onClick={()=>setCategory('rice')}>Món Cơm</h4></li>
                <li className='inline-block px-4 py-2 mx-3'><h4 className={`hover:text-[#6eab49] cursor-pointer  ${category == "salad" ?'text-[#6EAB49] border-b-2 border-[#6EAB49]' : 'text-black'}`} onClick={()=>setCategory('salad')}>Món Nộm</h4></li>
                <li className='inline-block px-4 py-2 mx-3'><h4 className={`hover:text-[#6eab49] cursor-pointer  ${category == "vegetarianSalty" ?'text-[#6EAB49] border-b-2 border-[#6EAB49]' : 'text-black'}`} onClick={()=>setCategory('vegetarianSalty')}>Món Chay Mặn</h4></li>
                <li className='inline-block px-4 py-2 mx-3'><h4 className={`hover:text-[#6eab49] cursor-pointer  ${category == "drinks" ?'text-[#6EAB49] border-b-2 border-[#6EAB49]' : 'text-black'}`} onClick={()=>setCategory('drinks')}>Đồ Uống</h4></li> 
                <li className='inline-block px-4 py-2 mx-3'><h4 className={`hover:text-[#6eab49] cursor-pointer  ${category == "vegetable" ?'text-[#6EAB49] border-b-2 border-[#6EAB49]' : 'text-black'}`} onClick={()=>setCategory('vegetable')}>Rau Củ</h4></li>
                </ul>
        </div>

        <FrozenGoods category={category}/>

    </div>
  )
}

export default List