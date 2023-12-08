import { useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { FaStar } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5"
import { LuEye } from "react-icons/lu"
import { Link } from "react-router-dom"

function ProductMenu({data}){
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
    const [discoloration,setdiscoloration] = useState(false)
    const [favourite,setfavourite] = useState(false)
    
    return (
        <div className='col-span-1 text-center relative productCart overflow-hidden '>
         
            <Link to={`/cartProduct/${data.id}`} ><img className='h-[270px] w-full relative' src={data.image}></img></Link>
            
            <div className='text-center grid grid-cols-5 h-[47px] w-full text-white  absolute top-[75%] opacity-0  transition-all duration-700 ease-in-out delay-0 transform translate-y-[-100%] box-border product  z-20 '>
                <div onClick={() => setfavourite(true)} className={`col-span-1 flex h-full bg-[#f58634] items-center hover:bg-black ${favourite?"bg-black":""}`} >
                    <AiOutlineHeart className='m-auto text-xl ' />
                </div>
                <div onClick={() => setdiscoloration(true)} className={`col-span-3 flex  h-full mx-[1px] bg-[#f58634] items-center hover:bg-black ${discoloration?"bg-black":""} `}>
                    <IoCartOutline  className=' ml-[3%] text-xl inline-block '/>
                    <p className={ `inline-block ${discoloration ? "pl-2":""}` }> {discoloration? 'Đã thêm vào giỏ ' :'Thêm vào giỏ hàng'}</p>
                </div>
                <div className='col-span-1 flex  h-full bg-[#f58634] items-center hover:bg-black ' >
                    <LuEye  className='m-auto  text-xl '/>
                </div>
            </div>
            <div className='absolute'>
                <span className='bg-[#C61A32] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-253px] ml-52'>{data.sale >0 ? `-${ data.sale}%`:"" }</span>
            </div>
            
            <div className='text-[14px] font-normal  pt-5'>
                <div className=' text-center'>
                    <h3><Link className='hover:text-[#f58634] transition-all duration-300 ease-in text-xl uppercase '  to={`/cartProduct/${data.id}`}>{data.name}</Link></h3>
                    <div className='mt-3'>
                        <span className='mr-4'>{data.sale == 0 ? new Intl.NumberFormat('vi-VN', config).format(data.price) : new Intl.NumberFormat('vi-VN', config).format((data.price) - ((data.sale)*(data.price))/100)}</span>
                        <span className='text-[#acacac] line-through'>{data.sale == 0 ? "" :new Intl.NumberFormat('vi-VN', config).format(data.price)}</span>
                    </div>
                </div>
                <div className='text-[20px]'>
                    <ul>
                        <li className='inline-block pr-3 text-[#e6e8e9]'><FaStar/></li>
                        <li className='inline-block pr-3 text-[#e6e8e9]'><FaStar/></li>
                        <li className='inline-block pr-3 text-[#e6e8e9]'><FaStar/></li>
                        <li className='inline-block pr-3 text-[#e6e8e9]'><FaStar/></li>
                        <li className='inline-block pr-3 text-[#e6e8e9]'><FaStar/></li>
        
                    </ul>
                </div> 
            </div>
        </div>
      )
}
export default ProductMenu