import React from 'react'
import { Link } from 'react-router-dom'

const DishTodayBanner = () => {
  return (
    <div className='pb-24 h-auto bg-no-repeat text-white ' style={{backgroundImage:`url("https://res.cloudinary.com/do9rcgv5s/image/upload/v1695114432/hwjdab2uqsgax1ti2il2.png")`,backgroundPosition: '-271px -220px',}}>
        <div className='px-4 mx-40 grid grid-cols-2'>
            <div className='col-span-1 px-4 text-left'>
                <h2 className='font-Dancing text-5xl pt-6 '>Món ngon hôm nay</h2>
                <h4 className='mt-12 mb-2 font-bold text-lg'>Salad hồ đào nhiệt đới</h4>

                <p className='font-normal'>Sự kết hợp giữa hạt hồ đào đa dinh dưỡng với cà chua chín mọng, củ cải đỏ tươi giòn,
                     những lát đào thanh ngọt và những cọng xà lách mơn mởn cùng sốt chanh dây chua nhẹ,
                      món ăn như một bản phối đầy sắc màu sẽ khai vị cho bữa chay thêm phần tuyệt hảo
                </p>
                <div className='mt-11 bg-[#6EAB49] w-52 text-center h-12 hover:bg-[#f58634] hover:cursor-pointer transition-all duration-500 ease-in-out'>
                    <Link to="/cookTable" className='leading-[2.7]' href='/'>Xem thực đơn</Link>
                </div>         
            </div>
            <div className='col-span-1 px-4'>
                <div className=''>
                    <a className='w-auto' href='/'>
                        <img className='ml-[104px]' src='https://chaygarden.com/wp-content/uploads/2020/08/vXHlPKW.png' width={"500px"}/>
                        <img className='absolute mt-[-375px] ml-[100px]' src='https://res.cloudinary.com/do9rcgv5s/image/upload/v1695115340/ejsoaqebpskyneltbsex.png' width={"410px"} height={("410px")}/>
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DishTodayBanner