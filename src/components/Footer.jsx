import React from 'react'
import { footerItems } from '../constants'

const Footer = () => {
  return (
    <div className='bg-[#1D363C] pt-10 pb-10'>
        <ul className='flex justify-center space-x-8 text-[#C3C9D1] text-base font-semibold'>
            {footerItems.map((item, index) =>(
                <li key={index}>
                    <a href={item.href}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Footer