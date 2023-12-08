import React from 'react'
import { FaFacebookF, FaGlobeAmericas, FaMapMarkerAlt, FaPhoneAlt, FaPinterestP, FaTumblr, FaTwitter, FaVimeoV } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <div>
        <div className='bg-[#f7f7f7] py-9 pt-32 '>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span className='mx-3 '>/</span>
            <p className='inline-block font-medium'>Liên Hệ</p>
        </div>
        <div className='py-24 mx-40 px-[15px] text-center '>
            <div className='mb-3'>
            <iframe className='mx-auto'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.733446534521!2d105.79064327479657!3d21.043348887278256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab30986540f7%3A0x71fe9fde0d1c5a33!2zMTA2QTEyIFAuIE5naMSpYSBUw6JuLCBOZ2jEqWEgVMOibiwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1701276381261!5m2!1svi!2s" width="1170" height="560"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                <div className='col-span-1  bg-[#F3F3F3]'>
                    <div className=' py-28 px-10 '>
                       <div className='mb-10 grid grid-cols-3'>
                            <div className='col-span-1 inline-block mr-5 h-10 w-10  mx-auto items-center border border-black border-solid rounded-full transition-all duration-500 ease-in-out hover:bg-black hover:text-white '><FaPhoneAlt className='mx-auto mt-[30%]'/></div>
                            <div className='col-span-2 inline-block  text-left'>
                                <p>+012 345 678 102</p>
                                <p>+012 345 678 102</p>
                            </div>
                       </div>
                       <div className='mb-10 grid grid-cols-3'>
                            <div className='col-span-1 inline-block mr-5 h-10 w-10  mx-auto items-center border border-black border-solid rounded-full transition-all duration-500 ease-in-out hover:bg-black hover:text-white '><FaGlobeAmericas className='mx-auto mt-[30%]'/></div>
                            <div className='col-span-2 inline-block  text-left'>
                                <p><a href='/'>polyfood@store.com</a></p>
                                <p><a href='/'>polyfood.store</a></p>
                            </div>
                       </div>
                       <div className='mb-10 grid grid-cols-3'>
                            <div className='col-span-1 inline-block mr-5 h-10 w-10  mx-auto items-center border border-black border-solid rounded-full transition-all duration-500 ease-in-out hover:bg-black hover:text-white '><FaMapMarkerAlt className='mx-auto mt-[30%]'/></div>
                            <div className='col-span-2 inline-block  text-left'>
                                <p>Địa chỉ</p>
                                <p>Đội Cấn, Ba Đình, Hà Nội</p>
                            </div>
                       </div>
                       <div className=''>
                            <h3 className='mb-4'>Theo dõi chúng tôi</h3>
                            <ul>
                                <li className='inline-block mx-2'><FaFacebookF className='hover:text-[#f58634] transition-all duration-500 ease-in-out ' /></li>
                                <li className='inline-block mx-2'><FaPinterestP  className='hover:text-[#f58634] transition-all duration-500 ease-in-out ' /></li>
                                <li className='inline-block mx-2'><FaTumblr  className='hover:text-[#f58634] transition-all duration-500 ease-in-out ' /></li>
                                <li className='inline-block mx-2'><FaVimeoV  className='hover:text-[#f58634] transition-all duration-500 ease-in-out ' /></li>
                                <li className='inline-block mx-2'><FaTwitter  className='hover:text-[#f58634] transition-all duration-500 ease-in-out ' /></li>
                            </ul>
                       </div>
                    </div>
                </div>
                <div className='col-span-2 bg-[#F3F3F3]'>
                   <div className='py-12 px-28'>
                        <h2 className='mb-9 text-2xl text-left'> Liên hệ</h2>
                        <form>
                            <div className='grid grid-cols-2 gap-8 mb-7'>
                                <input className='col-span-1 p-2 border border-solid border-[#c1c1c1] focus:outline-none' placeholder='Họ & Tên*' name='username' type='text'/>
                                <input className='col-span-1 p-2 border border-solid border-[#c1c1c1] focus:outline-none' placeholder='Email*' name='email' type='email'/>
                            </div>
                            <input  className='w-full mb-7 p-2 border border-solid border-[#c1c1c1] focus:outline-none' placeholder='Số điện thoại*'  name='phone' type='text'/>
                            <textarea className='w-full mb-10 h-52 border border-solid border-[#c1c1c1] focus:outline-none' name='subject' placeholder='Nội dung*' ></textarea>
                            <button className='float-left  text-white mb-20' type='submit'><a className='bg-[#404040] py-3 px-12  hover:bg-[#f58634] transition-all duration-500 ease-in-out'>Gửi</a></button>
                        </form>
                   </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact