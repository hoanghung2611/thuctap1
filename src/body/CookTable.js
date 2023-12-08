import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import ColumnMenu from './ColumnMenu';
import Sticker from './Sticker';
import Footer from '../footer/Footer';
import {   FaTh, FaThLarge, FaThList,  } from "react-icons/fa";
import Shop from './Shop';
const CookTable = () => {
    const [category, setCategory] = useState("all");
    const [show,setshow] = useState("all")
  return (
    <div>
        <div className='bg-[#f7f7f7] py-9 pt-32'>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span className='mx-3 '>/</span>
            <p className='inline-block font-medium'>THỰC ĐƠN</p>
        </div>
        <div className='py-24'>
            <div className='mx-40 grid grid-cols-4 '>
                <div className='col-span-1 '>
                    <div>
                        <h4 className='text-justify w-full'>Tìm kiếm sản phẩm</h4>
                        <div className=' mt-6 mb-14 float-left border border-solid border-[#e6e6e6] w-auto'>
                                <input className='py-[2px] pl-[18px] pr-[10px] h-11 focus:outline-none' type='text' placeholder='Nhập tên sản phẩm'/>
                                <button className='text-2xl w-12 before:h-5 before:w-[1px] before:bg-[#a1a5aa] before:absolute before:mt-[10px] '>
                                    <IoMdClose className='inline-block mx-3 hover:text-[#f58634]'/>
                                </button>
                        </div>
                    </div>
                    <div className='mb-7'>
                    <h4 className='text-justify mt-6 absolute top-[405px]'>Theo Danh Mục</h4>
                        <div className='mt-44'>
                            <ul>
                                <li>
                                    <button onClick={()=>setCategory("all")} className={`float-left w-[300px] pb-4 click `}>
                                        <span className={`absolute left-40  w-4 h-4 border-2 border-solid border-gray-800 rounded bg-white after:mr-4 clicked  ${category === "all" ? "orange" : ""}`}></span>
                                        <p className='leading-[1] ml-9 float-left'>Tất Cả Danh Mục</p>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>setCategory("vegetarianSalty")} className='float-left w-[300px] pb-4 click'>
                                        <span className={`absolute left-40  w-4 h-4 border-2 border-solid border-gray-800 rounded bg-white after:mr-4 clicked   ${category === "vegetarianSalty" ? "orange" : ""}`}></span>
                                        <p className='leading-[1] ml-9 float-left'>Món Chay Mặn</p>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>setCategory("frozenGoods")} className='float-left w-[300px] pb-4 click'>
                                        <span className={`absolute left-40  w-4 h-4 border-2 border-solid border-gray-800 rounded bg-white after:mr-4 clicked  ${category === "frozenGoods" ? "orange" : ""}`}></span>
                                        <p className='leading-[1] ml-9 float-left'>Hàng Chay Cấp Đông</p>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>setCategory("rice")} className='float-left w-[300px] pb-4 click'>
                                        <span className={`absolute left-40  w-4 h-4 border-2 border-solid border-gray-800 rounded bg-white after:mr-4 clicked   ${category === "rice" ? "orange" : ""}`}></span>
                                        <p className='leading-[1] ml-9 float-left'>Món Cơm</p>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>setCategory("drinks")} className='float-left w-[300px] pb-4 click'>
                                        <span className={`absolute left-40  w-4 h-4 border-2 border-solid border-gray-800 rounded bg-white after:mr-4 clicked  ${category === "drinks" ? "orange" : ""}`}></span>
                                        <p className='leading-[1] ml-9 float-left'>Đồ Uống</p>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>setCategory("salad")} className='float-left w-[300px] pb-4 click'>
                                        <span className={`absolute left-40  w-4 h-4 border-2 border-solid border-gray-800 rounded bg-white after:mr-4 clicked  ${category === "salad" ? "orange" : ""}`}></span>
                                        <p className='leading-[1] ml-9 float-left'>Món Nộm</p>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>setCategory("vegetable")} className='float-left w-[300px] pb-4 click'>
                                        <span className={`absolute left-40  w-4 h-4 border-2 border-solid border-gray-800 rounded bg-white after:mr-4 clicked  ${category === "vegetable" ? "orange" : ""}`}></span>
                                        <p className='leading-[1] ml-9 float-left'>Rau Củ</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div  className=' text-justify mt-10'>
                        <h4 className=' mt-[425px]' >Nhãn</h4>
                        <div className='mt-6'>
                            <ul>
                                <Sticker/>  
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 '>
                    <div className='mb-16'>
                            <div className='float-left'>
                                <select className='p-1 border border-solid border-[#e6e6e6]'>
                                    <option>Mặc địch </option>
                                    <option>Giá từ cao đến thấp</option>
                                    <option>Giá từ thấp đến cao</option>
                                </select>
                                <p className='inline-block ml-14'>9 / 25 sản phẩm</p>
                            </div>
                            <div className='float-right'>
                                <button className='ml-5'><i><FaTh /></i></button>
                                <button className='ml-5'><i><FaThLarge  /></i></button>
                                <button className='ml-5'><i><FaThList /></i></button>
                            </div>
                    </div>
                    <div>
                        <Shop category={category}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CookTable