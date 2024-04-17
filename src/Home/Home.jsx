import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import Category from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <Category/>
      <Register/>
      <LocationSprade/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>
    </div>
  )
}

export default Home