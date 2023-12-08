import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShuffle } from 'react-icons/bi';
import { IoIosStarOutline } from "react-icons/io";
import { Link, useLocation, useParams } from 'react-router-dom'
import { dataProduct } from '../data/Product';
const ProductDetails = () => {
    const [counterValue, setCounterValue] = useState(1);
    const increment = () => {
        setCounterValue(counterValue + 1);
      };

      const decrement = () => {
        // Kiểm tra nếu giá trị là 1 thì không giảm nữa
        if (counterValue > 1) {
          setCounterValue(counterValue - 1);
        }
      };
      const {data} = useParams();
      const productDetail = dataProduct.filter(x=>x.id == data)[0];
      const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
  return (
    <div className=''>
        <div className='bg-[#f7f7f7] py-9 pt-32'>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span className='mx-3'>/</span>
            <p className='inline-block font-medium'>CHI TIẾT SẢN PHẨM</p>
        </div>
        <div className='py-24'>
            <div className='grid grid-cols-2 gap-8 px-48 py-24'>
                <div className='col-span-1'>
                    <img src={productDetail.image}    className='w-[570px] h-[570px]'/>
                    <div> <span className='bg-[#FA6BFF] w-[52px] h-auto leading-[1.8] rounded text-white text-[13px] absolute mt-[-530px] ml-[-16rem]  '>{productDetail.sale >0 ? `-${ productDetail.sale}%`:"" }</span></div>
                    <div className='grid grid-cols-4 gap-2  mt-5'>
                        <div className='col-span-1'> <img src={productDetail.image}  className='w-full h-full'/></div>
                        <div className='col-span-1'> <img src={productDetail.image}  className='w-full h-full'/></div>
                        <div className='col-span-1'> <img src={productDetail.image}  className='w-full h-full'/></div>
                        <div className='col-span-1'> <img src={productDetail.image}  className='w-full h-full'/></div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='ml-20'>
                        <div className=' text-left'>
                            <h3 className=' transition-all duration-300 ease-in text-2xl uppercase ' > {productDetail.name}</h3>
                            <div className='mt-3'>
                                <span className='mr-4 text-[#FE5252] text-2xl'>{productDetail.sale == 0 ? new Intl.NumberFormat('vi-VN', config).format(productDetail.price) : new Intl.NumberFormat('vi-VN', config).format((productDetail.price) - ((productDetail.sale)*(productDetail.price))/100)}00</span>
                                <span className='text-[#acacac] line-through text-lg'>{productDetail.sale == 0 ? "" :new Intl.NumberFormat('vi-VN', config).format(productDetail.price)}</span>
                            </div>
                        </div>
                        <div className='text-[20px] text-left '>
                            <ul>
                                <li className='inline-block pr-3 text-[#e6e8e9]'><IoIosStarOutline className='text-[#ffa900]' /></li>
                                <li className='inline-block pr-3 text-[#e6e8e9]'><IoIosStarOutline className='text-[#ffa900]'/></li>
                                <li className='inline-block pr-3 text-[#e6e8e9]'><IoIosStarOutline className='text-[#ffa900]'/></li>
                                <li className='inline-block pr-3 text-[#e6e8e9]'><IoIosStarOutline className='text-[#ffa900]'/></li>
                                <li className='inline-block pr-3 text-[#e6e8e9]'><IoIosStarOutline className='text-[#ffa900]'/></li>
                
                            </ul>
                        </div> 
                        <p className='pb-9 border-b border-solid  border-[#e5e5e5] text-left leading-[2]' >Giò nấm là một sản phẩm ẩm thực độc đáo và ngon miệng,
                             đang thu hút sự chú ý của đông đảo khách hàng trong cả thị trường ẩm thực truyền thống và thực phẩm chay. 
                             Sản phẩm được chế biến với sự tinh tế và khéo léo từ những nguyên liệu tươi ngon và tự nhiên. 
                             Giò nấm không chỉ đem lại hương vị ngon lành mà còn mang trong mình những giá trị dinh dưỡng và lợi ích sức khỏe.
                        </p>
                        <div className='my-9 float-left text-[#8f8f8f] h-16 items-center'>
                            <div className='inline-block border border-solid  h-full '>
                                <button onClick={decrement}  className='w-4 h-full'>-</button>
                                <input type='text' readOnly className='w-12 h-full px-2 text-center' value={counterValue}/>
                                <button onClick={increment} className='w-4 h-full'>+</button>
                            </div>
                            <div className='inline-block px-3'><button className='h-16 bg-black text-white px-9 hover:bg-[#f58634] transition-all duration-300 ease-in'>THÊM</button></div>
                            <div className='inline-block text-xl px-6'><i><AiOutlineHeart className='hover:text-[#f58634] transition-all duration-300 ease-in'/></i></div>
                            <div className='inline-block text-xl px-4'><i><BiShuffle className='hover:text-[#f58634] transition-all duration-300 ease-in'/></i></div>
                        </div>  

                        <div>
                        <div className=' float-left mr-14'>
                            <span  className='inline-block'>Danh mục:</span>
                            <ul  className='inline-block'>
                                <li  className='inline-block'><Link to='/cookTable' className='hover:text-[#f58634] px-2'>all</Link></li>
                                <li  className='inline-block'><Link to='/cookTable' className='hover:text-[#f58634]'>{productDetail.category === "frozenGoods" ? "Hàng chay cấp đông" : productDetail.category === "salad" ? "Món nộm" :  productDetail.category === "rice" ? "Món cơm" :  productDetail.category === "vegetarianSalty" ? "Món chay mặn" :  productDetail.category === "drinks" ? "Đồ uống" :  productDetail.category === "vegetable" ? "Rau củ":""}</Link></li>
                            </ul>
                        </div>
                        </div>

                        <div className=' float-left pt-4  mr-36'>
                            <span  className='inline-block'>Nhãn :</span>
                            <ul  className='inline-block pl-2'>
                                <li><Link to='/cookTable' className='hover:text-[#f58634] pl-2 border border-solid border-[#d9d9d9] px-2 rounded-md'>{productDetail.category === "frozenGoods" ? "Hàng chay cấp đông" : productDetail.category === "salad" ? "Món nộm" :  productDetail.category === "rice" ? "Món cơm" :  productDetail.category === "vegetarianSalty" ? "Món chay mặn" :  productDetail.category === "drinks" ? "Đồ uống" :  productDetail.category === "vegetable" ? "Rau củ":""} </Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className='pb-24'>
                <div className='text-2xl py-4 border-b border-solid  border-[#e5e5e5]'>
                    <a className='pr-7'>Mô tả chi tiết</a>
                    <a>Đánh giá</a>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails