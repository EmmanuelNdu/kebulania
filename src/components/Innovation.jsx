import React from 'react'
import imagethi from '../assets/imagethi.png'

const Innovation = () => {
  return (
    <div className='flex justify-between p-16 bg-[#fff]'>
         <img className='' src={imagethi} />
        <div className='flex space-y-4 justify-center flex-col'>
            <h1 className='text-xl font-bold'>Innovation and Technology Hub</h1>
            <p className='text-[#626D7C]'>A center fostering entrepreneurship, technology development,<br/>
             and innovation.</p>
        </div>
    </div>
  )
}

export default Innovation