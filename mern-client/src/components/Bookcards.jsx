import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaCartShopping } from 'react-icons/fa6'

const Bookcards = ({headline, books}) => {
    // console.log(books);
  return (
    <div className='px-4 my-16 lg:px-24'>
        <h2 className='my-5 text-5xl font-bold text-center tect-black'>{headline}</h2>
       
       {/* cards */}

       <div className='mt-12'>
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="w-full h-full mySwiper"
      >
        {
            books.map(book =>  <SwiperSlide key={book._id}>
               <Link to =  {`/book/${book._id}`}>
               <div className='relative'>
                <img src={book.image_url} alt="" />
                <div className='absolute p-2 bg-blue-600 rounded top-3 right-3 hover:bg-black'>
                  <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
               </div>
               <div>
                <div>
                <h3>{book.book_title}</h3>
                <p>{book.author}</p>
                <div>
                    <p>$20.00</p>
                </div>
                </div>
               </div>
               </Link>
            </SwiperSlide>) 
        }
      </Swiper>
       </div>
        
    </div>
  )
}

export default Bookcards