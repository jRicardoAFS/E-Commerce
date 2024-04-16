import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import Category from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <Category/>
      <Register/>
      <LocationSprade/>
      <AboutUs/>
    </div>
  )
}

export default Home