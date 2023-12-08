import React from 'react'
import { TfiCup } from "react-icons/tfi";
import { RiLightbulbLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { FaInstagram, FaRegSmile, FaTwitter } from "react-icons/fa";
import { FaFacebookF  } from "react-icons/fa";
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import BusinessCard from './BusinessCard';
import Certification from './certification';

const Introduce = () => {
  return (
    <div className=''>
        <div className='bg-[#f7f7f7] py-9 pt-32'>
            <Link className='inline-block hover:text-[#f58634]' to='/'>TRANG CHỦ</Link>
            <span className='mx-3'>/</span>
            <p className='inline-block font-medium'>GIỚI THIỆU</p>
        </div>
        <div className='mx-40 px-4 py-24 '>
            <h5 className='text-xl mb-2'>Giới thiệu</h5>
            <h1 className=' text-3xl mb-8 pb-7 before:h-1 before:w-20 before:bg-[#070508] before:absolute  before:mt-[55px] before:ml-[130px]'>Chào mừng tới Poly Food</h1>
            <p className='text-left mx-52'>Hơn 10 năm hình thành và phát triển, thương hiệu thực phẩm chay “Poly Food” đã khẳng định được uy tín của mình trên thị trường với đa dạng mặt hàng,
                 chất lượng dịch vụ, chất lượng sản phẩm. Chúng tôi luôn hướng tới sức khỏe người tiêu dùng luôn được đặt lên hàng đầu,
                  cam kết sản phẩm đưa ra luôn được đảm bảo, uy tín, nguồn gốc xuất xứ rõ ràng, giấy tờ pháp lý đầy đủ, không chất phụ gia, 
                  không chất bảo quản, được sản xuất sạch sẽ, vệ sinh an toàn thực phẩm, đảm bảo sức khỏe người tiêu dùng. Điều đó làm nên thương hiệu “Poly Food” chúng tôi ngày hôm nay.
                   Chúng tôi luôn cố gắng để phục vụ tốt nhất đến quý khách hàng.
            </p>
        </div>

        <div className='grid grid-cols-3 mx-40 pb-20'>
            <div className='col-span-1 px-5'>
                <a href='/'><img src='https://polyfood.store/assets/img/banner/ut.jpg'/></a>
            </div>
            <div className='col-span-1 px-5'>
                <a href='/'><img src='https://polyfood.store/assets/img/banner/dh.jpg'/></a>
            </div>
            <div className='col-span-1 px-5'>
                <a href='/'><img src='https://polyfood.store/assets/img/banner/tn.jpg'/></a>
            </div>
        </div>

        <div className='grid grid-cols-3 mx-40 text-left pb-20'>
            <div className='col-span-1 px-5'>
               <h3>Uy Tín</h3>
               <p>Uy tín là điều Poly Food đã gây dựng và khẳng định được trong gần 10 năm qua.
                 Chúng tôi sẽ tiếp tục giữ vững giá trị kinh doanh cốt lõi này trong suốt chặng đường phía trước để phát triển bền vững.
              </p>
            </div>
            <div className='col-span-1 px-5'>
                <h3>Đồng Hành</h3>
                <p>Đồng hành là cam kết và cũng là giá trị nổi bật của Poly Food.
                     Chúng tôi đồng hành cùng nhà cung cấp, đồng hành cùng khách hàng và đồng hành cùng khách hàng của khách hàng.
                </p>
            </div>
            <div className='col-span-1 px-5'>
                <h3>Trách Nhiệm</h3>
                <p>Trách nhiệm là nền tảng tạo nên chất lượng của sản phẩm & dịch vụ của Poly Food, 
                    từ đó mới khiến khách hàng hài lòng và gắn bó lâu dài.
                </p>
            </div>
        </div>
        <Certification/>
        {/* <div className='bg-[#f7f7f7]  pb-20 pt-24 '>
            <div className='grid grid-cols-4 mx-40'>
                <div className='px-4 col-span-1'>
                    <div className='text-5xl 'style={{textAlign:"-webkit-center"}}><TfiCup /></div>
                    <h2 className='text-[#F58634] my-3 font-bold' >100</h2>
                    <span className='text-xl'>Được Cấp Chứng Nhận Cơ Sở An Toàn Thực Phẩm</span>
                </div>
                <div className='px-4 col-span-1'>
                    <div className='text-5xl 'style={{textAlign:"-webkit-center"}}><RiLightbulbLine /></div>
                    <h2 className='text-[#F58634] my-3 font-bold' >100</h2>
                    <span className='text-xl'>Được Cấp Chứng Nhận Cơ Sở An Toàn Thực Phẩm</span>
                </div>
                <div className='px-4 col-span-1'>
                    <div className='text-5xl 'style={{textAlign:"-webkit-center"}}><MdWorkOutline /></div>
                    <h2 className='text-[#F58634] my-3 font-bold' >100</h2>
                    <span className='text-xl'>Được Cấp Chứng Nhận Cơ Sở An Toàn Thực Phẩm</span>
                </div>
                <div className='px-4 col-span-1'>
                    <div className='text-5xl 'style={{textAlign:"-webkit-center"}}><FaRegSmile /></div>
                    <h2 className='text-[#F58634] my-3 font-bold' >100</h2>
                    <span className='text-xl'>Được Cấp Chứng Nhận Cơ Sở An Toàn Thực Phẩm</span>
                </div>
            </div>  
        </div>   */}

        <BusinessCard/>

        {/* <div className='mx-40 pb-20 pt-24'> 
            <h2 className='text-3xl font-semibold mb-14 before:w-20 before:h-[2px] before:bg-black before:absolute before:mt-[46px] before:ml-[82px]'>Thành viên nhóm</h2>
            <div className='grid grid-cols-4 grid-row-span-2 '>
                <div className=' col-span-1 row-span-1  mx-4 pb-7 product-card  '>
                    <div className='relative w-[270px'>
                        <img src='https://polyfood.store/assets/img/team/lead.jpg'/> 
                        <div className='bg-white h-[32px]  p-2 w-full  absolute top-[75%] opacity-0  transition-all duration-700 ease-in-out delay-0 transform translate-y-[-50%] box-content product-detail '>
                            <a href='//www.facebook.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#3b5998] border border-solid border-[#3b5998]  hover:bg-transparent hover:text-[#3b5998]' ><FaFacebookF   /></a>
                            <a href='//www.twitter.com' className='inline-block mx-1 p-2 rounded-full text-white  bg-[#55acee] border border-solid border-[#55acee] hover:bg-transparent hover:text-[#55acee]'><FaTwitter /></a>
                            <a href='//www.instagram.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#c32aa3] border border-solid border-[#c32aa3] hover:bg-transparent hover:text-[#c32aa3]'><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='bg-[#f7f7f7] p-4'><h4>Lê Văn Thuận</h4></div>
                </div>
                <div className=' col-span-1 row-span-1  mx-4 pb-7 product-card  '>
                    <div className='relative w-[270px'>
                        <img src='https://polyfood.store/assets/img/team/member.jpg'/> 
                        <div className='bg-white h-[32px]  p-2 w-full  absolute top-[75%] opacity-0  transition-all duration-700 ease-in-out delay-0 transform translate-y-[-50%] box-content product-detail '>
                            <a href='//www.facebook.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#3b5998] border border-solid border-[#3b5998]  hover:bg-transparent hover:text-[#3b5998]' ><FaFacebookF   /></a>
                            <a href='//www.twitter.com' className='inline-block mx-1 p-2 rounded-full text-white  bg-[#55acee] border border-solid border-[#55acee] hover:bg-transparent hover:text-[#55acee]'><FaTwitter /></a>
                            <a href='//www.instagram.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#c32aa3] border border-solid border-[#c32aa3] hover:bg-transparent hover:text-[#c32aa3]'><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='bg-[#f7f7f7] p-4'><h4>Trần Văn Giang</h4></div>
                </div>
                <div className=' col-span-1 row-span-1  mx-4 pb-7 product-card  '>
                    <div className='relative w-[270px'>
                        <img src='https://polyfood.store/assets/img/team/member.jpg'/> 
                        <div className='bg-white h-[32px]  p-2 w-full  absolute top-[75%] opacity-0  transition-all duration-700 ease-in-out delay-0 transform translate-y-[-50%] box-content product-detail '>
                            <a href='//www.facebook.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#3b5998] border border-solid border-[#3b5998]  hover:bg-transparent hover:text-[#3b5998]' ><FaFacebookF   /></a>
                            <a href='//www.twitter.com' className='inline-block mx-1 p-2 rounded-full text-white  bg-[#55acee] border border-solid border-[#55acee] hover:bg-transparent hover:text-[#55acee]'><FaTwitter /></a>
                            <a href='//www.instagram.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#c32aa3] border border-solid border-[#c32aa3] hover:bg-transparent hover:text-[#c32aa3]'><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='bg-[#f7f7f7] p-4'><h4>Đồng Công Định</h4></div>
                </div>
                <div className=' col-span-1 row-span-1  mx-4 pb-7 product-card  '>
                    <div className='relative w-[270px'>
                        <img src='https://polyfood.store/assets/img/team/member.jpg'/> 
                        <div className='bg-white h-[32px]  p-2 w-full  absolute top-[75%] opacity-0  transition-all duration-700 ease-in-out delay-0 transform translate-y-[-50%] box-content product-detail '>
                            <a href='//www.facebook.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#3b5998] border border-solid border-[#3b5998]  hover:bg-transparent hover:text-[#3b5998]' ><FaFacebookF   /></a>
                            <a href='//www.twitter.com' className='inline-block mx-1 p-2 rounded-full text-white  bg-[#55acee] border border-solid border-[#55acee] hover:bg-transparent hover:text-[#55acee]'><FaTwitter /></a>
                            <a href='//www.instagram.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#c32aa3] border border-solid border-[#c32aa3] hover:bg-transparent hover:text-[#c32aa3]'><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='bg-[#f7f7f7] p-4'><h4>Nguyễn Đăng Huy</h4></div>
                </div>
                <div className=' col-span-1 row-span-1  mx-4 pb-7 product-card  '>
                    <div className='relative w-[270px'>
                        <img src='https://polyfood.store/assets/img/team/member.jpg'/> 
                        <div className='bg-white h-[32px]  p-2 w-full  absolute top-[75%] opacity-0  transition-all duration-700 ease-in-out delay-0 transform translate-y-[-50%] box-content product-detail '>
                            <a href='//www.facebook.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#3b5998] border border-solid border-[#3b5998]  hover:bg-transparent hover:text-[#3b5998]' ><FaFacebookF   /></a>
                            <a href='//www.twitter.com' className='inline-block mx-1 p-2 rounded-full text-white  bg-[#55acee] border border-solid border-[#55acee] hover:bg-transparent hover:text-[#55acee]'><FaTwitter /></a>
                            <a href='//www.instagram.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#c32aa3] border border-solid border-[#c32aa3] hover:bg-transparent hover:text-[#c32aa3]'><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='bg-[#f7f7f7] p-4'><h4>Nguyễn Đức Duy</h4></div>
                </div>
                <div className=' col-span-1 row-span-1  mx-4 pb-7 product-card  '>
                    <div className='relative w-[270px'>
                        <img src='https://polyfood.store/assets/img/team/member.jpg'/> 
                        <div className='bg-white h-[32px]  p-2 w-full  absolute top-[75%] opacity-0  transition-all duration-700 ease-in-out delay-0 transform translate-y-[-50%] box-content product-detail '>
                            <a href='//www.facebook.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#3b5998] border border-solid border-[#3b5998]  hover:bg-transparent hover:text-[#3b5998]' ><FaFacebookF   /></a>
                            <a href='//www.twitter.com' className='inline-block mx-1 p-2 rounded-full text-white  bg-[#55acee] border border-solid border-[#55acee] hover:bg-transparent hover:text-[#55acee]'><FaTwitter /></a>
                            <a href='//www.instagram.com' className='inline-block mx-1 p-2 rounded-full text-white bg-[#c32aa3] border border-solid border-[#c32aa3] hover:bg-transparent hover:text-[#c32aa3]'><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='bg-[#f7f7f7] p-4'><h4>Đinh Đức Hải</h4></div>
                </div>
            </div>
        </div> */}
        <Footer/>
    </div>
  )
}

export default Introduce