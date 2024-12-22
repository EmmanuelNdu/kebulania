import React from 'react'
import kebu from '../assets/kebu.png'

const About = () => {
  return (
    <div className='bg-[#1D363C]'>
    <div className='flex p-16 space-x-8 '>
    <div className='text-[#C3C9D1] flex-1'>
        <h1 className='text-[#E5C778] font-medium text-4xl tracking-widest pt-14'>ABOUT KEBULANIA</h1>
        <p className='pt-6 text-[#C3C9D1]'>On the outskirts of Lagos, a revolution in creative excellence is taking shape.<br/>
        Kebulania represents Africa's bold entry into global creative and technological <br/>
        leadership, combining world-class infrastructure with unmatched opportunity for<br/>
        talent development. This landmark development creates new possibilities for African<br/>
        creators while establishing Nigeria as a premier destination for global creative <br/>
        nvestment.</p>
    </div>
    <img className='' src={kebu} />
    </div>
    </div>
  )
}

export default About