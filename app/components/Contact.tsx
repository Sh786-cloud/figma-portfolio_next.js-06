import React from 'react'
import Image from 'next/image';
import { Nunito, Inter } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin']
});
const inter = Inter({
  subsets: ['latin']
});

const Contact = () => {
  return (
    <div id='contact' className='min-h-screen relative'>
      <h1 className='font-nunito font-bold text-5xl absolute left-[145px] top-[75px] text-[#000000]'>
        Contact
      </h1>
      <div className='grid gap-25 md:grid-cols-2 lg:grid-cols-3 '>
        <div className='font-inter absolute left-[150px] top-[140px]'>
            <div className='text-md'>Feel free to get in touch with</div>
            <div className='text-md'>me.I am always open to discuss</div>
            <div className='text-md'>new projects, creative ideas </div>
            <div className='text-md'>and opportunities to be part of</div>
            <div className='text-md'>your vision.</div>
            <div  className=' pt-[55px] space-y-2'>
                <Image  
                 src={'/Vector 1.png'}
                 width={30}
                 height={30}
                 alt='Email'
                 />
                 <p className='text-sm'>m.shahzeb36@yahoo.com</p>
            </div>
            <div className='pt-5 space-y-2'>
                <Image
                 src={'/Vector 11.png'}
                 width={30}
                 height={30}
                 alt='Phone'
                 />
                 <p className='text-sm'>+92333-9022200</p>
            </div>
        </div>
        <div className='lg:col-span-2 space-y-3 absolute left-[550px] top-[130px] bg-[#F3DDF5]'>
          <div className='flex flex-col space-y-1'>
            <label htmlFor="Name" className='font-inter text-sm'>Name</label>
            <input type="text" id='Name' 
            className='border-[#E73AF4] border-[1.5px] w-[600px] h-10 bg-[#F3DDF5]'/>
          </div>
          <div className='flex flex-col space-y-1'>
            <label htmlFor="Email" className='font-inter text-sm'>Email</label>
            <input type="text" id='Email' 
            className='border-[#E73AF4] border-[1.5px] w-[600px] h-10 bg-[#F3DDF5]'/>
          </div>
          <div className='flex flex-col space-y-1'>
            <label htmlFor="Msg" className='font-inter text-sm'>Message</label>
            <input type="text" id='Msg' 
            className='border-[#E73AF4] border-[1.5px] w-[600px] h-[130px] bg-[#F3DDF5]'/>
          </div>
          <button className='w-[130px] h-[43px] rounded-full bg-[#E73AF4] opacity-70 font-inter text-white text-md '>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
