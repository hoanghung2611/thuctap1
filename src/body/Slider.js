import React, { useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { IoChevronBackSharp   } from "react-icons/io5";
import SliderElement from './SliderElement';
const Slider = () => {
  let currentIndex = 0;
  const carousel = document.getElementById('carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;

  function nextSlide() {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1;
    }
    updateCarousel();
  }

  function updateCarousel() {
    const newPosition = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${newPosition})`;
    
  }

  const [next,setnext] =useState("back");




  return (


<div className='setshow'>
<div className='absolute mt-96 hidden  show'>
  <div className='inline-block text-4xl'><IoChevronBackSharp onClick={()=> setnext('back')} className='ml-[150px] text-[#999] hover:cursor-pointer  hover:text-[#f58634]'  /></div>
  <div className='inline-block text-[52px]' ><MdNavigateNext onClick={()=>setnext('next')} className='ml-[1130px]   text-[#999] hover:cursor-pointer  hover:text-[#f58634]'  /></div>
  </div>
   <SliderElement next={next}/>
</div>
  )
}

export default Slider