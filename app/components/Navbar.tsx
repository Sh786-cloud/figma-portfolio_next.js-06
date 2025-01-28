import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center relative '>
      <div className='flex space-x-3'>
        <div>
            <Image
            src = "/Logo.png" 
            alt='Logo'
            width={40}
            height={40}
            className='absolute left-[22px] top-[28px]'/>
        </div>
        <div className='font-inter font-semibold w-full h-[52px] text-lg absolute left-[65px] top-[35px]'>
          <span className='Mohd'>Muhammad</span>
        </div>
      </div>
      <ul className='flex space-x-5'>
        <li className='font-inter font-semibold h-auto text-md absolute left-[860px] top-[38px] text-[#000000]'>
          <a href="#about">About</a>
        </li>
        <li className='font-inter font-semibold h-auto text-md absolute left-[920px] top-[38px] text-[#000000]'>
          <a href="#projects">Projects</a>
        </li>
        <li className='font-inter font-semibold h-auto text-md absolute left-[1020px] top-[38px] text-[#000000]'>
          <a href="#skills">Skills</a>
        </li>
        <li className='font-inter font-semibold h-auto text-md absolute left-[1100px] top-[36px] text-[#000000]'>
        <a href="#contact"><Image 
        src='/Vector.png' 
        alt='Get in Touch'
        width={130}
        height={40}/></a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
