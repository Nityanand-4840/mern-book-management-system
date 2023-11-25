import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import Promobanner from './Promobanner'
import OtherBooks from './OtherBooks'
import Review from '../components/Review'

const Home = () => {
  return (
  
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <Promobanner/>
      <OtherBooks/>
      <Review/>
    </div>
    
  )
}

export default Home