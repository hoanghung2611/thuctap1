import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const Drinks = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-2 mx-20 font-VietnamPro '>
    <div className='col-span-1 row-span-1 pr-3 mb-6'>
        <a href='/'><img className='h-[270px] w-[290px] relative' src='https://res.cloudinary.com/doedovklj/image/upload/v1694238285/xyz-abc_638298602835803734image.jpg'/></a>
        <div className='absolute'>
            <span className='bg-[#87D068] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-253px] ml-52'></span>
        </div>
        <div className='grid grid-cols-4 text-[14px] font-bold pt-5'>
            <div className='col-span-3 inline-block text-left'>
                <h3><a className='hover:text-[#f58634] transition-all duration-300 ease-in text-[16px] '  href='/'>Trà Olong Tea Plus</a></h3>
                <div>
                    <span className='mr-4'>10,000 VND</span>
                    <span className='text-[#acacac] line-through'></span>
                </div>
            </div>
            <div className='col-span-1 inline-block text-right'>
                <button className='px-1' title='Thêm vào danh sách yêu thích'><AiOutlineHeart className='text-[#acacac] text-[20px] hover:text-[#f58634]  '/></button>
            </div>
        </div>
    </div>
    <div className='col-span-1 row-span-1 pr-3 mb-6'>
        <a href='/'><img className='h-[270px] w-[290px] relative' src='https://res.cloudinary.com/doedovklj/image/upload/v1694238098/xyz-abc_638298600944971453image.png'/></a>
        <div className='absolute'>
            <span className='bg-[#87D068] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-253px] ml-52'></span>
        </div>
        <div className='grid grid-cols-4 text-[14px] font-bold pt-5'>
            <div className='col-span-3 inline-block text-left'>
                <h3><a className='hover:text-[#f58634] transition-all duration-300 ease-in text-[16px] '  href='/'>Nước Ion Pocari Sweat</a></h3>
                <div>
                    <span className='mr-4'>15,000 VND</span>
                    <span className='text-[#acacac] line-through'></span>
                </div>
            </div>
            <div className='col-span-1 inline-block text-right'>
                <button className='px-1' title='Thêm vào danh sách yêu thích'><AiOutlineHeart className='text-[#acacac] text-[20px] hover:text-[#f58634]  '/></button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Drinks