import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { BiShuffle, BiUserCircle } from 'react-icons/bi';
import { PiShoppingBag } from 'react-icons/pi';
import Home from './body/Home';
import Introduce from './body/Introduce';
import ScrollToTop from './body/ScrollToTop';
import Account from './login-register/Account';
import CookTable from './body/CookTable';
import Contact from './body/Contact';
import News from './body/News';
import ForgotPassword from './body/ForgotPassword';
import { useState } from 'react';
import Compare from './body/Compare';
import Wishlist from './body/Wishlist';
import ProductDetails from './body/ProductDetails';
import CartProduct from './components/CartProduct';
import { IoClose, IoMenu } from "react-icons/io5";
import Cart from './body/Cart';
import PAY from './body/PAY';

function App() {
  const customStyles = {
    boxShadow: '0 0 25px 0 rgba(0,0,0,.06)',
    transition: 'all .3s ease 0',
    animation: 'fadeInDown .7s ease-in-out 0s 1 normal none running',
  };
  const [show,setshow] = useState(false)
  const [ MobileOpen,setMobileOpen] = useState(false)
  return (
    <div className='text-center'>
       <header> 
        <div  >
            <div></div>
            <div></div>
        </div>
    <nav className= 'w-full grid min-[999px]:grid-cols-6 grid-cols-2  px-20 bg-[#fff] fixed z-[999] transition-all duration-500 ease-in-out' style={customStyles}>
        <div className='col-span-1 px-4 xl:m-auto float-left'>
            <a href='/'><img className='w-40' alt="" src='https://res.cloudinary.com/do9rcgv5s/image/upload/v1692137209/e2nw6oqvtlvpqmdwtmnh.png'/></a>
        </div>
        <div className={` min-[999px]:col-span-4 min-[999px]:px-4 min-[999px]:pt-0  min-[999px]:pr-0 min-[999px]:right-0  min-[999px]:top-0 min-[999px]:relative absolute top-8 right-1 pt-12 pr-11 bg-white min-[999px]:block ${MobileOpen? "":"hidden"}`}>
            <ul className='min-[999px]:h-24 h-auto text-[15px] font-medium text-[#555252] opacity-90'>
                <li className='min-[999px]:inline-block block  px-4 '><Link to="/" ><p className=' min-[999px]:leading-[94px] min-[999px]:w-auto leading-[40px] w-[218px]  hover:text-[#f58634]' href='/'>Trang chủ</p></Link></li>
                <li  className='min-[999px]:inline-block block px-4'><Link to="/introduce" ><p className='  leading-[40px] hover:text-[#f58634]' href='/'>Giới thiệu</p></Link></li>
                <li  className='min-[999px]:inline-block block px-4'><Link to="/cookTable" ><p className='  leading-[40px] hover:text-[#f58634]' href='/'>Thực đơn</p></Link></li>
                <li  className='min-[999px]:inline-block block px-4'><Link to="/news" ><p className='  leading-[40px] hover:text-[#f58634]' href='/'>Tin Tức</p></Link></li>
                <li  className='min-[999px]:inline-block block px-4'><Link to="/contact" ><p className='  leading-[40px] hover:text-[#f58634]' href='/'>Liên hệ</p></Link></li>
            </ul>   
        </div>
        <div className='col-span-1 px-4 float-right flex justify-end'>
            <div className='grid grid-cols-5 text-2xl pt-[36px] text-left text-[#6c757d]'>
                <div className='col-span-1 px-2 '>
                    <i onClick={() =>setshow(!show)} ><AiOutlineSearch className='leading-[94px] hover:text-[#f58634] cursor-pointer transition-all duration-500 ease-out  min-[999px]:block  hidden '/></i>
                    <div className={`absolute text-sm border border-solid border-t-0 p-3 bg-white  min-[999px]:top-[85px]  min-[999px]:right-[280px]  min-[999px]:flex  right-1  top-1 shadow-md  items-center transition-all duration-500 ease-in-out visible min-[999px]:invisible ${MobileOpen? "":"hidden"} ${show? 'presently':""}`}>
                        <button className='min-[999px]:hidden inline-block pr-3'><IoClose onClick={() => setMobileOpen(false)}/></button>
                        <input className='p-3 border border-solid focus:outline-none' type='text' placeholder='Nhập mã đơn hàng...'/>
                        <button className='bg-[#F58634] px-5 py-[13px] text-white hover:bg-black transition-all duration-500 ease-in-out'><AiOutlineSearch className='text-xl' /></button>
                    </div>
                </div>
                <div className='col-span-1 min-[999px]:px-2 min-[999px]:block   hidden '>
                  <Link to="/account"><i><BiUserCircle className='hover:text-[#f58634] transition-all duration-500 ease-out '/></i></Link> 
                </div>
                <div className='col-span-1 min-[999px]:px-2'>
                <Link to="/compare"><i><BiShuffle className='hover:text-[#f58634] transition-all duration-500 ease-out'/></i></Link> 
                </div>
                <div className='col-span-1 min-[999px]:px-2'>
                <Link to="/wishlist"><i><AiOutlineHeart className='hover:text-[#f58634] transition-all duration-500 ease-out'/></i></Link> 
                </div>
                <div className='col-span-1 min-[999px]:pl-2'>
                <Link to="/cart"> <i><PiShoppingBag className='min-[999px]:hover:text-[#f58634] transition-all duration-500 ease-out'/></i></Link>
                </div>
                <div className='col-span-1 min-[999px]:px-2 min-[999px]:hidden  block  '>
                <i><IoMenu className='' onClick={() => setMobileOpen(true)}/></i>
                </div>
            </div>
        </div>
    </nav>
    </header>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/introduce' element={<Introduce/>}/>
          <Route path='/cookTable' element={<CookTable/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/compare' element={<Compare/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/pAY' element={<PAY/>}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
          <Route path='/cartProduct' element={<CartProduct/>}></Route>
          <Route path='/cartProduct/:data' element={<ProductDetails/>}></Route>
        </Routes>

    </div>

    
  );
}

export default App;
