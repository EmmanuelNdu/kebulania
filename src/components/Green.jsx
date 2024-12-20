import React from 'react'
import shapestar from '../assets/Shapestar.png'

const Green = () => {
  return (
    <div className='bg-[#1D363C] p-16'>
      <div className='flex flex-row justify-center space-x-2'>
      < img src={shapestar} />
      < img src={shapestar} />
      < img src={shapestar} />
      < img src={shapestar} />
      < img src={shapestar} />
      </div>
      <p className='flex justify-center text-[white] text-4xl text-center pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/>
       do eiusmod tempor incididunt ut labore et dolore magna<br/>
        consectetur aliqua</p>
    </div>
  )
}

export default Green