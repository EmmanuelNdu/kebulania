import React from 'react'
import {Star} from "lucide-react"

const Green = () => {
  return (
    <div className='bg-[#1D363C] p-16'>
      <div className='flex flex-row justify-center'>
      <Star color='yellow'/>
      <Star color='yellow'/>
      <Star color='yellow'/>
      <Star color='yellow'/>
      <Star color='yellow'/>
      </div>
      <p className='flex justify-center text-[white] text-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/>
       do eiusmod tempor incididunt ut labore et dolore magna<br/>
        consectetur aliqua</p>
    </div>
  )
}

export default Green