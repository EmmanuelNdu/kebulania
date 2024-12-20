import React from 'react'
import imagefo from '../assets/imagefo.png'

const Hotel = () => {
  return (
    <div className='flex justify-between p-16 bg-[#fff]'>
        <div className='flex space-y-4 justify-center flex-col pl-40'>
            <h1 className='text-2xl font-semibold'>Hotel and lifestyle Amenities</h1>
            <p className='text-[#626D7C]'>A 5-start hotel and a range of dinning, wellness and shopping<br/>
            Center for an unparalled lifestle experience </p>
        </div>
        <img className='' src={imagefo} />
    </div>
  )
}

export default Hotel