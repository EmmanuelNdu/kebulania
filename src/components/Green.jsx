import React from 'react'
import shapestar from '../assets/Shapestar.png'
import gov from '../assets/gov.png'

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
      <div className='flex flex-col items-center space-y-6'>
      <p className=' text-[white] text-[40px] text-center pt-6 font-bold'>“Lagos Film City (Kebulania) represents Lagos State's<br/>
            vision for creative excellence and technological <br/>
            innovation. This investment will transform our creative<br/>
            landscape while creating groundbreaking opportunities <br/>
            for our talented youth.”</p>
        <img className='w-156 h-156' src={gov} />
        <p className='font-semibold text-2xl text-[#ffffff]'>His Excellency, Babajide Sanwo-Olu,<br/>
        <span className='font-light text-2xl text-[#ffffff]'>the Executive Governor of Lagos State</span></p>
    </div>
    </div>
  )
}

export default Green