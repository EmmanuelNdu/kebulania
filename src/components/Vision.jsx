import React from 'react'
import windmill from '../assets/windmill.png'
import cyber from '../assets/cyber.png'

const Vision = () => {
  return (
    <div className='bg-[#fff] space-y-6 pt-8'>
        <p className='font-medium text-4xl text-[#A8882F] text-center'>VISION</p>
        <h1 className='font-semibold text-4xl text-center'>Our Vision for Africa's Creative Future</h1>
        <p className='text-center text-[#626D7C] text-lg font-medium'>
        A Kebulania emerges from a profound understanding that Africa's creative potential requires world-class<br/>
         infrastructure to achieve global impact. We're building more than facilities we're creating a platform<br/>
          where African creativity can flourish without bounds, where technical excellence meets imaginative power,<br/>
           and where the next generation of creative leaders will emerge.
        </p>
        <div className='flex p-16 space-x-10'>
            <img src={cyber} />
            <img src={windmill} />
        </div>
    </div>
  )
}

export default Vision