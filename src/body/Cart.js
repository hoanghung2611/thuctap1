import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import { orderedProduct } from '../data/Order';
import ListOrder from '../components/ListOrder';
const Cart = () => {
    const [data,setdata] = useState(orderedProduct)
    const cost=  data.map(item => item.price).reduce((acc,currentValue) => acc + currentValue,0);
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}

  return (
    <div className=''>
        <div className='bg-[#f7f7f7] py-9 pt-32'>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span className='mx-3'>/</span>
            <p className='inline-block font-medium'>GIỎ HÀNG</p>
        </div>
        <div className='py-24 mx-36 overflow-hidden'>
            <h3 className='float-left text-xl w-full mb-4'>Các mặt hàng trong giỏ hàng của bạn.</h3>
            <table className='border border-solid border-[#ebebeb] w-full'>
                <thead className='text-[#FF0000] border border-solid border-[#ebebeb] bg-[#f9f9f9]'>
                    <tr>
                        <th  className='p-5'>Ảnh	</th>
                        <th  className='p-5'>Tên sản phẩm</th>
                        <th  className='p-5'>Đơn giá</th>
                        <th  className='p-5'>Số lượng</th>
                        <th  className='p-5'>tổng phụ</th>
                        <th  className='p-5'>hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((item,index)=>{
                       return <ListOrder data={item}/>
                    })
                }
                </tbody>
               
            </table>
            <div className='py-10 w-full overflow-hidden'>
                <div className='inline-block float-left'>
                   <Link to="/cookTable"> <button className='py-4 px-10 bg-[#F2F2F2] rounded-full hover:bg-[#f58634] hover:text-white transition-all duration-300 ease-in-out'>TIẾP TỤC MUA SẮM</button></Link>
                </div>
                <div className='inline-block float-right '>
                <button className='py-4 px-10 bg-[#F2F2F2] rounded-full hover:bg-[#f58634]  hover:text-white transition-all duration-300 ease-in-out'>XÓA GIỎ HÀNG</button>
                </div>
            </div>
                <div className='w-96 float-right mt-7   bg-[#F2F2F2] py-14 px-6 text-left box-content border border-solid border-[#ebebeb] rounded-md ' >
                    <h3 className='text-lg before:absolute before:h-[1px] before:w-48 before:mt-[15px] before:right-40 before:bg-[#e3e1e1]'>Tổng số giỏ hàng</h3>
                    <h5 className='my-7 text-sm'>
                        Giá Gốc
                        <span className='inline-end text-[#acacac] line-through text-lg'>{new Intl.NumberFormat('vi-VN', config).format(cost)}</span>
                    </h5>
                    <h4 className='mb-6 text-[#F58634] text-xl'>
                        Tổng cộng
                        <span className='inline-end '>631,750 VND</span>
                    </h4>
                   <Link to="/pAY"> <a className='m-auto w-full flex justify-center bg-[#f58634] text-white py-3 hover:bg-black rounded-full transition-all duration-300 ease-in-out'>TIẾN HÀNH KIỂM TRA</a></Link>
                </div>
            </div>
            <Footer />
    </div>
  )
}

export default Cart