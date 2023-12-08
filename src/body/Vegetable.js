import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const Vegetable = () => {
    return (
        <div className='grid grid-cols-4 grid-rows-2 mx-20 font-VietnamPro '>
            <div className='col-span-1 row-span-1 pr-3 mb-6'>
                <a href='/'><img className='h-[270px] w-[290px] relative' src='https://res.cloudinary.com/doedovklj/image/upload/v1694244475/xyz-abc_638298664729008963image.jpg'/></a>
                <div className='absolute'>
                    <span className='bg-[#87D068] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-253px] ml-52'>-50%</span>
                </div>
                <div className='grid grid-cols-4 text-[14px] font-bold pt-5'>
                    <div className='col-span-3 inline-block text-left'>
                        <h3><a className='hover:text-[#f58634] transition-all duration-300 ease-in text-[16px] '  href='/'>Đậu Bắp Đồng Nai</a></h3>
                        <div>
                            <span className='mr-4'>10,000 VND</span>
                            <span className='text-[#acacac] line-through'>20,000 VND</span>
                        </div>
                    </div>
                    <div className='col-span-1 inline-block text-right'>
                        <button className='px-1' title='Thêm vào danh sách yêu thích'><AiOutlineHeart className='text-[#acacac] text-[20px] hover:text-[#f58634]  '/></button>
                    </div>
                </div>
            </div>
            <div className='col-span-1 row-span-1 pr-3 mb-6'>
                <a href='/'><img className='h-[270px] w-[290px] relative' src='https://res.cloudinary.com/doedovklj/image/upload/v1694244757/xyz-abc_638298667547852947image.jpg'/></a>
                <div className='absolute'>
                    <span className='bg-[#87D068] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-253px] ml-52'></span>
                </div>
                <div className='grid grid-cols-4 text-[14px] font-bold pt-5'>
                    <div className='col-span-3 inline-block text-left'>
                        <h3><a className='hover:text-[#f58634] transition-all duration-300 ease-in text-[16px] '  href='/'>Tỏi Cô Đơn</a></h3>
                        <div>
                            <span className='mr-4'>25,000 VND</span>
                            <span className='text-[#acacac] line-through'></span>
                        </div>
                    </div>
                    <div className='col-span-1 inline-block text-right'>
                        <button className='px-1' title='Thêm vào danh sách yêu thích'><AiOutlineHeart className='text-[#acacac] text-[20px] hover:text-[#f58634] '/></button>
                    </div>
                </div>
            </div>
            <div className='col-span-1 row-span-1 pr-3 mb-6'>
                <a href='/'><img className='h-[270px] w-[290px] relative' src='https://res.cloudinary.com/doedovklj/image/upload/v1694245187/xyz-abc_638298671823438975image.png'/></a>
                <div className='absolute'>
                    <span className='bg-[#87D068] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-253px] ml-52'>-30%</span>
                </div>
                <div className='grid grid-cols-4 text-[14px] font-bold pt-5'>
                    <div className='col-span-3 inline-block text-left'>
                        <h3><a className='hover:text-[#f58634] transition-all duration-300 ease-in text-[16px] '  href='/'>Nấm Mối</a></h3>
                        <div>
                            <span className='mr-4'>29,400 VND</span>
                            <span className='text-[#acacac] line-through'>42,000 VND</span>
                        </div>
                    </div>
                    <div className='col-span-1 inline-block text-right'>
                        <button className='px-1' title='Thêm vào danh sách yêu thích'><AiOutlineHeart className='text-[#acacac] text-[20px] hover:text-[#f58634] '/></button>
                    </div>
                </div>
            </div>
            <div className='col-span-1 row-span-1 pr-3 mb-6'>
                <a href='/'><img className='h-[270px] w-[290px] relative' src='https://res.cloudinary.com/doedovklj/image/upload/v1694244956/xyz-abc_638298669538233277image.png'/></a>
                <div className='absolute'>
                    <span className='bg-[#87D068] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-253px] ml-52'></span>
                </div>
                <div className='grid grid-cols-4 text-[14px] font-bold pt-5'>
                    <div className='col-span-3 inline-block text-left'>
                        <h3><a className='hover:text-[#f58634] transition-all duration-300 ease-in text-[16px] '  href='/'>Rau Nấu Canh Chua</a></h3>
                        <div>
                            <span className='mr-4'>20,000 VND</span>
                            <span className='text-[#acacac] line-through'></span>
                        </div>
                    </div>
                    <div className='col-span-1 inline-block text-right'>
                        <button className='px-1' title='Thêm vào danh sách yêu thích'><AiOutlineHeart className='text-[#acacac] text-[20px] hover:text-[#f58634] '/></button>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Vegetable