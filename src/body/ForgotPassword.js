import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const boxShadow ={
        boxShadow:'0 0 6px rgba(0,0,0,.1)',
      }
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleForgotPasswordClick  = (event) => {
        event.preventDefault(); // loại bỏ thuộc tính reset của button
        if(!email.trim()){
            // setErrorMessage("vui lòng nhập email")
            window.alert("vui lòng nhập email")
            return;
        }
       
        setErrorMessage("")
    }
  return (
    <div>
        <div className='bg-[#f7f7f7] py-9 pt-32 '>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span className='mx-3 '>/</span>
            <p className='inline-block font-medium'>QUÊN MẬT KHẨU</p>
        </div>
        <div className='mx-64 pt-24'> 
        <div className='inline-block'><h3   className='mx-5 font-bold pb-10 text-[#f58634]  transition-all duration-300 ease-in-out hover:cursor-pointer'>Quên Mật Khẩu</h3></div>
          <div className='p-20 w-[670px] mx-auto  ' style={boxShadow}>
          <form > 
              <input onChange={(e) => setEmail(e.target.value)} className='px-4 mb-8 inline-block w-[510px] h-[45px] border border-solid border-[ebebeb]  focus:outline-none' type='email' name='Email' placeholder='Email'/>
              <div className='flex justify-between'>
                <button onClick={handleForgotPasswordClick} className='py-[11px] px-8 bg-[#F2F2F2] transition-all duration-300 ease-in-out float-left hover:bg-[#f58634] hover:text-white' ><span>QUÊN MẬT KHẨU</span></button>
              </div>
            </form> 
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
       </div>
    </div>
  )
}

export default ForgotPassword