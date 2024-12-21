import React from 'react'
import kebu from '../assets/kebu.png'

const About = () => {
  return (
    <div className='bg-[#1D363C]'>
    <div className='flex p-16 space-x-8 border-b-2 border-gray-400'>
    <div className='text-[#C3C9D1] flex-1'>
        <h1 className='text-[#E5C778] font-medium text-4xl tracking-widest pt-14'>ABOUT KEBULANIA</h1>
        <p className='pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br/>
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br/>
            mollit anim id est laborum</p>

            <p className='pt-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br/>
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore<br/>
             veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam<br/>
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur<br/>
               magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam,<br/>
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non<br/>
                 numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat<br/>
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis<br/>
                   suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum<br/>
                    iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae,vel<br/>
                     illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>
    <img className='' src={kebu} />
    </div>
    <div className='flex justify-between p-24 items-center'>
    <div>
      <h1 className='text-[#E5C778] text-2xl'>VISION</h1>
      <p className='text-[#fff] text-base'>To redefine Africa's position in the global creative and digital<br/>
                                    integrates education, entertainment, residential living, and<br/>
                                    innovation, creativity, and sustainable growth.</p>
    </div>
    <div>
      <h1 className='text-[#E5C778] text-2xl'>MISSION</h1>
      <p className='text-[#fff] text-base'>To develop a world-class mixed-use community that<br/>
                                    economy by creating a dynamic environment that fosters <br/>
                                    innovation, creativity, and sustainable growth.</p>
    </div>
    </div>
    </div>
  )
}

export default About