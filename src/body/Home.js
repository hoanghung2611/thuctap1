import React from 'react'
import Slider from './Slider'
import Banner from './Banner'
import List from './List'
import DishTodayBanner from './DishTodayBanner'
import DiscountToday from './DiscountToday'
import VegetarianFoodBanner from './VegetarianFoodBanner'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Banner/>
      <List/>
      <DishTodayBanner/>
      <DiscountToday/>
      <VegetarianFoodBanner/>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default Home