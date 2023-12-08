import React from 'react'
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BiShuffle, BiUserCircle } from "react-icons/bi";
import { PiShoppingBag } from "react-icons/pi";

const Menu = () => {
    const customStyles = {
        boxShadow: '0 0 25px 0 rgba(0,0,0,.06)',
        transition: 'all .3s ease 0',
        animation: 'fadeInDown .7s ease-in-out 0s 1 normal none running',
      };
  return (
    <header> 
        <div  >
            <div></div>
            <div></div>
        </div>
    <nav className= 'w-full grid grid-cols-6 px-20 bg-[#fff] fixed z-[999] transition-all duration-500 ease-in-out' style={customStyles}>
        <div className='col-span-1 px-4'>
            <a href='/'><img className='w-40' alt="" src='https://res.cloudinary.com/do9rcgv5s/image/upload/v1692137209/e2nw6oqvtlvpqmdwtmnh.png'/></a>
        </div>
        <div className='col-span-4 px-4'>
            <ul className='h-24 text-[15px] font-medium text-[#555252] opacity-90'>
                <li className='inline-block px-4'><a className=' leading-[94px] hover:text-[#f58634]' href='/'>Trang chủ</a></li>
                <li  className='inline-block px-4'><a className=' leading-[94px] hover:text-[#f58634]' href='/'>Giới thiệu</a></li>
                <li  className='inline-block px-4'><a className=' leading-[94px] hover:text-[#f58634]' href='/'>Thực đơn</a></li>
                <li  className='inline-block px-4'><a className=' leading-[94px] hover:text-[#f58634]' href='/'>Tin Tức</a></li>
                <li  className='inline-block px-4'><a className=' leading-[94px] hover:text-[#f58634]' href='/'>Liên hệ</a></li>
            </ul>
        </div>
        <div className='col-span-1 px-4'>
            <div className='text-2xl pt-[36px] text-left'>
                <div className='inline-block px-2'>
                    <i ><AiOutlineSearch className='leading-[94px]'/></i>
                </div>
                <div className='inline-block px-2'>
                    <i><BiUserCircle/></i>
                </div>
                <div className='inline-block px-2'>
                    <i><BiShuffle/></i>
                </div>
                <div className='inline-block px-2'>
                    <i><AiOutlineHeart/></i>
                </div>
                <div className='inline-block pl-2'>
                    <i><PiShoppingBag/></i>
                </div>
            </div>
        </div>
    </nav>
    </header>

  )
}

export default Menu