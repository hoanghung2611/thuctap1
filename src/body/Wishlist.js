import React from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <div>
        <div className='bg-[#f7f7f7] py-9 pt-32 '>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span className='mx-3 '>/</span>
            <p className='inline-block font-medium'>YÊU THÍCH </p>
        </div>
    </div>
  )
}

export default Wishlist