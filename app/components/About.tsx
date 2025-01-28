import React from 'react'
import { Nunito, Inter } from 'next/font/google'

const nunito = Nunito();
const inter = Inter();

const About = () => {
  return (
    <div id='about' className='min-h-screen flex flex-col relative space-x-3'>
      <div className='font-nunito font-bold text-5xl absolute left-[145px] pt-[100px] text-[#000000]'>
        About Me
      </div>
      <div className='flex flex-col absolute left-[150px] pt-[200px] space-y-3 font-inter font-medium text-3xl text-[#000000]'>
      <div>Hi, I’m Muhammad Shahzeb from Pakistan, a professional</div>
      <div>Engineer.I love to design as well as code.I also like to travel and</div> 
      <div>play football.</div>
      <div>I’ve been working in Cement Industry from the last five years.</div>
      <div>I’m eager to learn and also very passionate about my work.</div>
      <div>I like to design website and mobile apps.My favourite tool</div> 
      <div>is Figma.</div>
      </div>
    </div>
  )
}

export default About
