import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from "../assets/awardbooks.png"

const Promobanner = () => {
  return (
    <div className='py-12 mt-16 bg-teal-100 lg:px-24'>
        <div className='flex flex-col items-center justify-between gap-12 md:flex-row'>
            <div className='md:w-1/2'>
                <h2 className='mb-6 text-4xl font-bold leading-snug'>2023 National Book Awards for Fiction Shortlist </h2>
                <Link to="/shop" className="block " ><button className="px-5 py-2 font-semibold text-white transition-all duration-300 bg-blue-700 rounded hover:bg-black">Get Promo</button></Link>
            </div>
            
            <div>
              <img src={bookPic} alt="" className='w-96' />  
            </div>
        
        </div>
    </div>
  )
}

export default Promobanner