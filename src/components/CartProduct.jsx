import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function CartProduct({data}) {
    
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
  return (
    <div className='col-span-1 row-span-1 pr-3 mb-6'>
    <Link to={`/cartProduct/${data.id}`}><img className='h-[270px] w-[290px] relative' src={data.image}/></Link>
    <div className='absolute'>
        <span className='bg-[#87D068] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-253px] ml-52'>{data.sale >0 ? `-${ data.sale}%`:"" }</span>
    </div>
    <div className='grid grid-cols-4 text-[14px] font-bold pt-5'>
        <div className='col-span-3 inline-block text-left'>
            <h3><Link className='hover:text-[#f58634] transition-all duration-300 ease-in text-[16px] '  to={`/cartProduct/${data.id}`}>{data.name}</Link></h3>
            <div>
                <span className='mr-4'>{data.sale == 0 ? new Intl.NumberFormat('vi-VN', config).format(data.price) : new Intl.NumberFormat('vi-VN', config).format((data.price) - ((data.sale)*(data.price))/100)}</span>
                <span className='text-[#acacac] line-through'>{data.sale == 0 ? "" :new Intl.NumberFormat('vi-VN', config).format(data.price)}</span>
            </div>
        </div>
        <div className='col-span-1 inline-block text-right'>
            <button className='px-1' title='Thêm vào danh sách yêu thích'><AiOutlineHeart className='text-[#acacac] text-[20px] hover:text-[#f58634]  '/></button>
        </div>
    </div>
</div>
  )
}

export default CartProduct