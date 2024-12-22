import React from 'react'
import imagefi from '../assets/imagefi.png'


const Key = () => {
  return (
    <div className='p-16 bg-[#fff]'>
      <div className='flex justify-center text-4xl font-medium text-[#A8882F] pt-20'>
      <h1>KEY FEATURES</h1>
      </div>
        <div className='flex space-x-10 pt-16'>
            <img className='' src={imagefi} />
            <div className='flex space-y-4 justify-center flex-col'>
            <h1 className='text-[28px] font-semibold'>Transformative Scale</h1>
            <ul className='text-[#626D7C] text-[18px] list-disc pl-8'>
              <li>50,000 sqm AI-capable data center</li>
              <li>500,000 sqm creative space</li>
              <li>World-class production facilities</li>
              <li>Global connectivity infrastructure</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Key