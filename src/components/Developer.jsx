import React from 'react'
import Del_logo from '../assets/Del_logo.png'
import tsc from '../assets/tsc.png'
import story from '../assets/story.png'
import lagtour from '../assets/lagtour.png'
import Arri from '../assets/Arri.png'
import lsg from '../assets/lsg.png'
import lsdpc from '../assets/lsdpc.png'

const Developer = () => {
  return (
    <div className='flex items-center flex-col bg-[#ffffff] pt-24 space-y-14 pb-16'>
        <h1 className='flex font-semibold text-4xl text-[#A8882F] justify-center'>DEVELOPER</h1>
        <img className='' src={Del_logo} />
        <h1 className='flex font-semibold text-4xl text-[#A8882F] justify-center'>OUR PARTNERS</h1>
        <div className='flex space-x-6'>
            <img src={tsc} />
            <img className='' src={story} />
        </div>
        <div className='flex space-x-11'>
            <img src={lagtour} />
            <img src={Arri} />
            <img src={lsg} />
            <img src={lsdpc} />
        </div>
    </div>
  )
}

export default Developer