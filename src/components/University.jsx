import React from 'react'
import imagesec from '../assets/imagesec.png'

const University = () => {
  return (
    <div className='flex justify-between p-16 bg-[#fff]'>
        <div className='flex space-y-4 justify-center flex-col pl-40'>
            <h1 className='text-[28px] font-semibold'>Creative Excellence</h1>
            <ul className='text-[#626D7C] text-[18px] list-disc font-medium pl-8'>
              <li>Advanced virtual production</li>
              <li>State-of-the-art post-production</li>
              <li>Professional sound stages</li>
              <li>Innovation laboratories</li>
            </ul>
        </div>
        <img className='' src={imagesec} />
    </div>
  )
}

export default University