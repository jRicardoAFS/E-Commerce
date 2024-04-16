import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import Category from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <Category/>
      <Register/>
      <LocationSprade/>
    </div>
  )
}

export default Home