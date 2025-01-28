import React from 'react'
import { Nunito, Inter } from 'next/font/google'
import Navbar from './Navbar';

const nunito = Nunito({
  subsets: ['latin']
});
const inter = Inter({
  subsets: ['latin']
});

const Hero = () => {
  return (
    <div className='min-h-screen bg-no-repeat bg-[url(/profile.png)]'
    style={{backgroundSize: "35", backgroundPosition: "left 800px top 155px"}}>
     <div className='flex flex-col space-y-3 relative'>
      <div className='font-nunito font-bold text-5xl absolute left-[150px] top-[170px] text-[#000000] '>
        Hi, I&#39;m
      </div>
      <div className='font-nunito font-bold text-5xl absolute left-[150px] top-[220px] text-[#000000]'>
        Muhammad Shahzeb
      </div>
      <div className='font-inter font-semibold text-3xl absolute left-[150px] top-[280px] text-[#000000]'>
        I&#39;m a
      </div>
      <div className=' font-nunito font-bold text-5xl absolute left-[150px] top-[330px] text-[#c61dd2]'>
        Front-end Developer
      </div>
     </div>
    </div>
  )
}

export default Hero
