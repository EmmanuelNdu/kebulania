import React from 'react'
import imagefi from '../assets/imagefi.png'


const Key = () => {
  return (
    <div className='p-16 bg-[#fff]'>
      <div className='flex justify-center text-4xl font-medium text-[#A8882F] pt-20'>
      <h1>KEY FEATURES</h1>
      </div>
        <div className='flex justify-between pt-10'>
            <img className='' src={imagefi} />
            <div className='space-y-3'>
            <h1 className='text-xl font-bold'>Lagos Film City</h1>
            <p>State-of-the-art production facilities attracting international <br/>
            filmmakers and supporting local talent.</p>
            </div>
        </div>
    </div>
  )
}

export default Key