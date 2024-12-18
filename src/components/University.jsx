import React from 'react'
import imagesec from '../assets/imagesec.png'

const University = () => {
  return (
    <div className='flex justify-between p-16 bg-[#fff]'>
        <div className='flex space-y-4 justify-center flex-col'>
            <h1 className='text-xl font-bold'>Del-York Creative University</h1>
            <p className='text-[#626D7C]'>A cutting-edge institution offering programs in creative arts,<br/>
            digital media and business innovation. </p>
        </div>
        <img className='' src={imagesec} />
    </div>
  )
}

export default University