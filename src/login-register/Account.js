import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register';
const Account = () => {
  const [show,setshow] = useState(true);
  const boxShadow ={
    boxShadow:'0 0 6px rgba(0,0,0,.1)',
  }
  return (
    <div className='pb-16' > 
        <div className='bg-[#f7f7f7] py-9 pt-32  '>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span>/</span>
            <p className='inline-block'>ĐĂNG NHẬP - ĐĂNG KÝ</p>
        </div>
       <div className='mx-64 pt-24'> 
        <div className='inline-block '><h3 onClick={()=>setshow(true)} className={`mx-5 font-bold after:w-[1px] after:bg-black after:h-5 after:ml-[19px] after:mt-[10px]  after:absolute ${show ? 'text-[#f58634]' : 'text-black'} transition-all duration-300 ease-in-out hover:cursor-pointer`}>Đăng Nhập</h3></div>
        <div className='inline-block'><h3 onClick={()=>setshow(false)}  className={`mx-5 font-bold pb-10 ${!show ? 'text-[#f58634]' : 'text-black'} transition-all duration-300 ease-in-out hover:cursor-pointer`}>Đăng Ký</h3></div>
          <div className='p-20 w-[670px] mx-auto  ' style={boxShadow}>
            {show? <LogIn/> : <Register/>}
          </div>
       </div>
    </div>
  )
}

export default Account