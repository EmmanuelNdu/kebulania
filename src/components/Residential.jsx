import React from 'react'
import city from '../assets/city.png'

const Residential = () => {
  return (
    <div className='flex space-x-10 p-16 bg-[#fff]'>
         <img className='' src={city} />
        <div className='flex space-y-4 justify-center flex-col'>
            <h1 className='text-[28px] font-semibold'>Sustainable Development</h1>
            <ul className='text-[#626D7C] text-[18px] list-disc font-medium pl-8'>
              <li>1GW clean power generation</li>
              <li>Smart resource management</li>
              <li>Environmental leadership</li>
              <li>Green building design</li>
            </ul>
        </div>
    </div>
  )
}

export default Residential