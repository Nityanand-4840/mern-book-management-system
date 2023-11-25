import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import proPic from "../assets/profile.jpg"
// react icons 

import {FaStar} from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='px-4 my-12 lg:px-24'>
        <h2 className='mb-10 text-5xl font-bold leading-snug text-center'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>

            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>

            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>

            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>

            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>

            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>

            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>

            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>

            <div className='space-y-6'>
                <div className='flex gap-2 text-amber-500'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                {/* text */}
                 
                 <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa, excepturi quod nobis eius provident. Quae debitis molestias ea dicta harum voluptatum explicabo consequatur molestiae, voluptate perferendis reprehenderit soluta officia?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                 </div>

            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    
    </div>
  )
}

export default Review