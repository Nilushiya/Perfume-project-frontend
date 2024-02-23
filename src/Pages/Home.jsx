import React from 'react'
import HomeDp from '../Components/HomeDp/HomeDp'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import ExclusiveOffers from '../Components/ExclusiveOffers/ExclusiveOffers'

const Home = () => {
  return (
    <div className='home'>
        <HomeDp />
        <NewArrivals />
        <ExclusiveOffers />
    </div>
  )
}

export default Home