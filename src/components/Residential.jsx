import React from 'react'
import imagethi from '../assets/imagethi.png'

const Residential = () => {
  return (
    <div className='flex justify-between p-16 bg-[#fff]'>
         <img className='' src={imagethi} />
        <div className=''>
            <h1 className='text-xl font-bold'>Residential Estates</h1>
            <p>Luxury and affordable housing option designed for comfort<br/>
            and community living</p>
        </div>
    </div>
  )
}

export default Residential