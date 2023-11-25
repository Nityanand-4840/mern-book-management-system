import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks]= useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data));
  })
  return (
    <div className='px-4 mt-28 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
         <div className='grid grid-cols-2 gap-10 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3'>
          {
            books.map(book => <Card
            >
              <img src={book.image_url} alt="" className='h-46' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.book_title}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <button className='py-2 font-semibold text-white bg-blue-700 rounded hover:bg-black '>Buy Now</button>
            </Card>)
          }
         </div>
    </div>
  )
}

export default Shop