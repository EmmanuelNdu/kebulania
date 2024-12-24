import React from 'react'
import videop from '../assets/videop.png'
import technician from '../assets/technician.png'
import stat from '../assets/stat.svg'
import cycle from '../assets/cycle.svg'
import help from '../assets/help.svg'

const Nice = () => {
  return (
    <div className='bg-[#FFFAEC] pb-16'>
    <div className=' flex flex-col items-center space-y-6 pt-32'>
        <h1 className='text-4xl font-semibold text-[#A8882F]'>NICE TITLE HERE</h1>
        <img className='pt-14' src={videop} />
    </div>
    <div className='flex flex-col items-center space-y-16 pt-24'>
    <h1 className='text-4xl font-semibold text-[#A8882F]'>PARTNERSHIP</h1>
    <p className='font-black text-4xl'>Join the Transformation</p>
    <img src={technician} />
    </div>
    <div className='flex justify-center space-x-16 pt-10'>
        <div className='space-y-4'>
            <img src={stat} />
            <h1 className='font-black text-2xl'>Investment Opportunity</h1>
            <p className='text-[#626D7C]'>Partner with Kebulania to develop world-<br/>
            class facilities, drive innovative content<br/>
             production and distribution, and empower<br/>
              talent through transformative training and<br/>
               certification programs.</p>
        </div>
        <div className='space-y-4'>
            <img src={help} />
            <h1 className='font-black text-2xl'>Community Development</h1>
            <p className='text-[#626D7C]'>Collaborate on world-class projects and<br/>
             expand into new markets through strategic<br/>
              distribution partnerships.</p>
        </div>
        <div className='space-y-4'>
            <img src={cycle} />
            <h1 className='font-black text-2xl'>Sustainability</h1>
            <p className='text-[#626D7C]'>Co-develop programs to nurture future<br/> 
            creators and share expertise through<br/>
             mentorship and research initiatives.</p>
        </div>
    </div>
    <div className='flex justify-center pt-14'>
    <a href='#' className='py-3 px-12 border rounded-full text-[#fff] text-base font-medium bg-black'>
          EXPLORE PARTNERSHIP
        </a>
    </div>
    </div>
  )
}

export default Nice
