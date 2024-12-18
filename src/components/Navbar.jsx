import React from 'react'
import kebulania from '../assets/kebulania.png'
import { navItems } from '../constants'

const Navbar = () => {
  return (
    <div>
    <div className='flex'>
        <img className="h-15 w-20 ml-4" src={kebulania} alt='kebulania'/>
        <ul className=''>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
    </div>
    <div>
      <a href='#' className='py-2 px-3 border rounded-md'>
        INVEST NOW
        </a>
        <a href='#' className='py-2 px-3 border rounded-md'>
          JOIN US
        </a>
    </div>
    </div>
  )
}

export default Navbar