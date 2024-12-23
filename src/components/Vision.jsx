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
          <div className='space-y-4'>
          <img src={cyber} />
          <h1 className='font-semibold text-2xl'>A Platform for Excellence</h1>
          <p className='text-[#626D7C] text-base'>Our comprehensive ecosystem brings together every element needed for creative<br/>
           success:</p>
           <ul className='list-disc text-[#626D7C] text-base pl-6'>
            <li>Advanced technical infrastructure that enables global competition</li>
            <li>World-class production facilities that empower visionary storytelling</li>
            <li>Innovation spaces that foster collaboration and development</li>
            <li>Educational programs that create pathways to success</li>
           </ul>
          </div>
           <div className='space-y-4'>
           <img src={windmill} />
           <h1 className='font-semibold text-2xl'>Leadership in Sustainability</h1>
          <p className='text-[#626D7C] text-base'>Environmental responsibility shapes every aspect of Kebulania's development. Our<br/>
              commitment to sustainable operations includes:</p>
           <ul className='list-disc text-[#626D7C] text-base pl-6'>
            <li>Clean energy generation and smart grid technology</li>
            <li>Advanced resource management systems</li>
            <li>Green building practices and materials</li>
            <li>Biodiversity protection and enhancement</li>
           </ul>
           </div>
        </div>
    </div>
  )
}

export default Vision