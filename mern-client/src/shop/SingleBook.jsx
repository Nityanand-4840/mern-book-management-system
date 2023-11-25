import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id, book_title, image_url} = useLoaderData();
  return (
    <div className='px-4 mt-28 lg:px-24'>
        <img src={image_url} alt="" className='h-96'/>
        <h2>{book_title}</h2>

    </div>
  )
}

export default SingleBook