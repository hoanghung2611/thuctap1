import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function TeamWrapper({data}){
    return(
        <div className=' col-span-1 row-span-1  mx-4 pb-7 product-card  '>
                    <div className='relative '>
                        <img src={data.image}/> 
                        <div className='bg-white h-[32px]  p-2 w-full  absolute top-[75%] opacity-0  transition-all duration-700 ease-in-out delay-0 transform translate-y-[-50%] box-content product-detail '>
                            <a href='//www.facebook.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#3b5998] border border-solid border-[#3b5998]  hover:bg-transparent hover:text-[#3b5998]' ><FaFacebookF   /></a>
                            <a href='//www.twitter.com' className='inline-block mx-1 p-2 rounded-full text-white  bg-[#55acee] border border-solid border-[#55acee] hover:bg-transparent hover:text-[#55acee]'><FaTwitter /></a>
                            <a href='//www.instagram.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#c32aa3] border border-solid border-[#c32aa3] hover:bg-transparent hover:text-[#c32aa3]'><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='bg-[#f7f7f7] p-4'><h4>{data.name}</h4></div>
                </div>
    )
}
export default TeamWrapper