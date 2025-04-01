import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import HowItWorks from '../../components/howItWorks/HowItWorks'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <HowItWorks/>
    </div>
  )
}

export default Home