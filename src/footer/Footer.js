import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='w-auto h-auto mt-14 font-normal text-sm text-white  ' style={{backgroundImage:`url("https://res.cloudinary.com/do9rcgv5s/image/upload/v1692144184/qgbkcsydg2vwqcosx4ns.png")`}}>
        <div className='grid grid-cols-4 py-24 mx-24'>
            <div className='col-span-1 inline-block mb-7 px-4'>
                <img className='w-[200px] h-auto mb-3 inline ' src='https://res.cloudinary.com/do9rcgv5s/image/upload/v1692137209/e2nw6oqvtlvpqmdwtmnh.png'/>
                <p className='leading-[2]'>Poly Food là nhà hàng Thuần chay và Cung cấp thực phẩm chay</p>
            </div>
            <div className='col-span-1 inline-block mb-7 pl-24  px-4 text-left leading-[2.6] '>
                <h3 className='text-base font-bold'>Cửa hàng</h3>
                <ul>
                    <li><a className='hover:text-[#f58634] transition-all duration-500 ease-in-out' href='/'>Về chúng tôi</a></li>
                    <li><a className='hover:text-[#f58634] transition-all duration-500 ease-in-out' href='/'>Liên hệ</a></li>
                    <li><a className='hover:text-[#f58634] transition-all duration-500 ease-in-out' href='/'>Tin tức</a></li>
                    <li><a className='hover:text-[#f58634] transition-all duration-500 ease-in-out' href='/'>Hỗ trợ</a></li>
                </ul>
            </div>
            <div className='col-span-1 inline-block mb-7  px-4 text-left leading-[2.6]'>
                <h3 className='text-base font-bold'>Chính sách mua hàng</h3>
                <a className='hover:text-[#f58634] transition-all duration-500 ease-in-out block' href='/'>Điều khoản</a>
                <a className='hover:text-[#f58634] transition-all duration-500 ease-in-out' href='/'>Chính sách & Bảo mật</a>
                <h3 className='text-base font-bold'>Theo dõi chúng tôi</h3>
                <ul>
                    <li className='inline-block pr-6 text-[#007bff] '><a className='hover:opacity-60 transition-all duration-300 ease-in-out ' href='/'><FaFacebook/></a></li>
                    <li className='inline-block pr-6 text-[#dc3545]'><a className='hover:opacity-60 transition-all duration-300 ease-in-out ' href='/'><FaYoutube/></a></li>
                    <li className='inline-block pr-6 text-[#007bff]'><a className='hover:opacity-60 transition-all duration-300 ease-in-out ' href='/' ><FaTwitter/></a></li>
                    <li className='inline-block  bg-gradient-to-r from-purple-800 to-yellow-400 rounded-2xl'><a className='hover:opacity-40 transition-all duration-300 ease-in-out ' href='/'><FaInstagram/></a></li>
                </ul>
            </div>
            <div className='col-span-1 inline-block mb-7  px-4 text-left leading-[2.6]'>
                <h3 className='text-base font-bold'>Đăng ký ngay</h3>
                <p><em>Nhận thông báo mới nhất qua email về những tin tức của chúng tôi</em></p>
                <input className='block border-b-2 border-solid border-gray-300 bg-transparent w-full' placeholder='Nhập email của bạn...'></input>
                <button className='hover:text-[#f58634] hover:border-[#f58634]  border-b-2 border-solid border-gray-300 leading-[1.5]'>ĐĂNG KÝ</button>
            </div>
        </div>  
    </div>
  )
}

export default Footer