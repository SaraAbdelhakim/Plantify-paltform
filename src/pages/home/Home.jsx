import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import HowItWorks from '../../components/howItWorks/HowItWorks'
import HomeSearch from '../../components/homeSearch/HomeSearch';


const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <HomeSearch/>
      <HowItWorks/>
    </div>
  )
}

export default Home