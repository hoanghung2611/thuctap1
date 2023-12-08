import React from 'react'

const Register = () => {
  return (
    <form > 
    <input className='px-4 mb-8 inline-block w-[510px] h-[45px] border border-solid border-[ebebeb] focus:bg-[#E8F0FE]' type='email' name='Email' placeholder='Email'/>
    <input className='px-4 mb-8 inline-block w-[510px] h-[45px] border border-solid border-[ebebeb] focus:bg-[#E8F0FE]' type='password' name='password' placeholder='Mật khẩu'/>
    <input className='px-4 mb-8 inline-block w-[510px] h-[45px] border border-solid border-[ebebeb] focus:bg-[#E8F0FE]' type='email' name='Email' placeholder='Xác nhận mật khẩu'/>
    <input className='px-4 mb-8 inline-block w-[510px] h-[45px] border border-solid border-[ebebeb] focus:bg-[#E8F0FE]' type='password' name='password' placeholder='Email'/>
    <div className='flex justify-between'>
      <button className='py-[11px] px-8 bg-[#F2F2F2] transition-all duration-300 ease-in-out float-left hover:bg-[#f58634] hover:text-white' ><span>ĐĂNG Ký</span></button>
    </div>
  </form> 
  )
}

export default Register