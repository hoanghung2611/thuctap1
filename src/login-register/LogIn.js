import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
            <form > 
              <input className='px-4 mb-8 inline-block w-[510px] h-[45px] border border-solid border-[ebebeb] focus:bg-[#E8F0FE]' type='email' name='Email' placeholder='Email'/>
              <input className='px-4 mb-8 inline-block w-[510px] h-[45px] border border-solid border-[ebebeb] focus:bg-[#E8F0FE]' type='password' name='password' placeholder='Mật khẩu'/>
              <div className='flex justify-between'>
                <button className='py-[11px] px-8 bg-[#F2F2F2] transition-all duration-300 ease-in-out float-left hover:bg-[#f58634] hover:text-white' ><span>ĐĂNG NHẬP</span></button>
                <Link to='/forgotPassword' className='float-right  hover:text-[#f58634]'>Quên mật khẩu</Link>
              </div>
            </form>  
  )
}

export default LogIn