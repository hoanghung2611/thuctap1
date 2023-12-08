import React from 'react'
import { Link } from 'react-router-dom'

const VegetarianFoodBanner = () => {
  return (
    <div className='pb-24 h-[462px] bg-no-repeat text-white pt-5 ' style={{backgroundImage:`url("https://res.cloudinary.com/do9rcgv5s/image/upload/v1695114432/hwjdab2uqsgax1ti2il2.png")`,backgroundPosition: '420px -220px',}}>
        <div className='px-4 mx-32 grid grid-cols-2'>
            <div className='col-span-1 px-4 '>
                <div className=''>
                    <a className='w-auto' href='/'>
                        <img className='absolute mt-[70px] ml-[170px]' src='https://res.cloudinary.com/do9rcgv5s/image/upload/v1695121790/xuwo5rfyhgo5dnp6egk7.png'   height={("313px")}/>
                    </a>
                </div>
            </div>
            <div className='col-span-1 text-left '>
                <h2 className='font-Dancing text-4xl pt-6 text-[#f58634] w-auto'>Món ăn Chay Poly Food - Hương vị thanh tịnh</h2>
                <p className='font-normal pt-10'>Món ăn chay chính là món ăn theo đuổi cái đẹp thuần khiết.
                 Chay PolyFood luôn nỗ lực, dụng công để tạo ra món ngon bộc lộ hương vị và mỹ cảm chân thực nhất.
                  Sự kết hợp, bày biện dung dị cũng đủ làm thỏa mãn tâm hồn thực khách bởi nét quyến rũ của thiên nhiên hài hòa trong mỗi món ngon.
                </p>
                <div className='mt-11 bg-[#6EAB49] w-52 text-center h-12 hover:bg-[#f58634] hover:cursor-pointer transition-all duration-500 ease-in-out'>
                    <Link  to="/contact"className='leading-[2.7]' href='/'>Liên hệ ngay</Link>
                </div>           
             </div>
        </div>
    </div>
  )
}

export default VegetarianFoodBanner