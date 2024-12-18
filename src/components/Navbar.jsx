import React from 'react'
import kebulania from '../assets/kebulania.png'
import { navItems } from '../constants'

const Navbar = () => {
  return (
    <div className='flex justify-between border-b border-gray-300 pt-8 pb-8'>
    <div className='flex space-x-8 items-center'>
        <p className=' flex text-[#fff] font-bold text-4xl justify-center tracking-wider '>KEBULANIA</p>
        <ul className='text-[#fff] flex space-x-8 justify-center pl-36 '>
          {navItems.map((item, index) => (
            <li className='hover:text-blue-600  transition duration-500' key ={index}>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
    </div>
    <div className='space-x-6'>
      <a href='#' className='py-3 px-8 border rounded-full text-[#fff] text-sm font-medium'>
        INVEST NOW
        </a>
        <a href='#' className='py-3 px-8 border rounded-full bg-[#E5C778] text-sm font-semibold text-[#000000]
        hover:bg-blue-600  transition duration-200
        '>
          JOIN US
        </a>
    </div>
    </div>
  )
}

export default Navbar