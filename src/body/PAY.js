import React from 'react'
import { Link } from 'react-router-dom'

const PAY = () => {
  return (
    <div className=''>
        <div className='bg-[#f7f7f7] py-9 pt-32'>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span className='mx-3'>/</span>
            <p className='inline-block font-medium'>THANH TOÁN</p>
        </div>

        <div className='py-24'>
          <div className='mx-36 grid grid-cols-5 gap-10 text-left'>
            <div className='col-span-3'>
              <h3 className='mb-7'>Thông tin khách hàng</h3>
              <div className='mb-7'>
                  <label className='mb-2'>Họ và Tên</label>
                  <input type='text' className='w-full border border-solid border-[#6e6e6e] py-3 bg-transparent'/>
              </div>
{/* 
              <div className='mb-7'>
                  <label className='mb-2'>Họ và Tên</label>
                  <input type='text' className='w-full border border-solid border-[#6e6e6e] py-3 bg-transparent'/>
              </div> */}
              <div className='mb-7'>
                  <label className='mb-2'>Địa chỉ</label>
                  <input type='text' className='w-full border border-solid border-[#6e6e6e] py-3 bg-transparent'/>
              </div>
              <div className='mb-7 '>
                  <div className='mb-2 grid grid-cols-2 gap-10'>
                      <div className='grid grid-cols-1 '>
                        <label>Điện thoại</label>
                        <input type='text' className='w-full border border-solid border-[#6e6e6e] py-3 bg-transparent'/>
                      </div>

                      <div className='grid grid-cols-1'>
                        <label>Email</label>
                        <input type='email' className='w-full border border-solid border-[#6e6e6e] py-3 bg-transparent'/>
                      </div>
                    </div >
                    <div >
                    <label>Ghi chú</label>
                      <textarea className='w-full h-36 border border-solid border-[#6e6e6e] py-3 bg-transparent'></textarea>
                    </div>    
              </div>
            </div>
            <div className='col-span-2'>
            <h3>ĐƠN HÀNG  </h3>
            <div className='bg-[#F6F6F6] p-11'>
              <div>
                <ul>
                  <li className='inline-block '>Sản Phẩm</li>
                  <li  className='inline-block float-right'>Tổng số lượng</li>
                </ul>
              </div>

              <div className='py-5 my-7 border-t border-b border-solid border-[#dee0e4]' >
                <ul>
                  <li className='inline-block '>Giò nấm chay X 7</li>
                  <li  className='inline-block float-right'>631,750 VND</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className='inline-block text-base'>Chi phí vận chuyển</li>
                  <li  className='inline-block float-right text-sm'>đang tính chi phí</li>
                </ul>
              </div>

              <div className='py-5 my-7 border-t border-b border-solid border-[#dee0e4]' >
                <ul>
                  <li className='inline-block text-lg font-medium '>Tổng cộng</li>
                  <li  className='inline-block float-right text-[#F58634] text-base'>631,750 VND</li>
                </ul>
              </div>
              <div className='text-sm'>
                <b >Thời gian giao hàng dự kiến</b>
                : Vui lòng nhập vào địa chỉ.
                <li className='text-[#F58634] mt-2'>Chi phí cuối cùng đã là chi phí đã được tính cùng với phí vận chuyển</li>
              </div>
            </div>

            <button className='my-9 w-full py-4 px-24 bg-[#F58634] rounded-full text-white hover:bg-black'>THANH TOÁN KHI NHẬN HÀNG</button>

            <button className='w-full py-4 px-24 bg-[#F58634] rounded-full  text-white hover:bg-black'>THANH TOÁN ONLINE</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default PAY