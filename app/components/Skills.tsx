import React from 'react'
import Image from 'next/image'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin']
});

const Skills = () => {
  return (
    <div id='skills' className='min-h-screen relative'>
      <div className='font-nunito font-bold text-5xl absolute left-[145px] top-[90px] text-[#000000]'>
        Skills
      </div>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 width-[265px] absolute top-[190px] 
       mr-10 ml-10'>
        <div className='border-[3px] rounded-b-xl border-[#E73AF4] '>
            <Image className='width-[265px] h-[300px] rounded-b-lg'
            src={'/images (4).jpg'}
            width={275}
            height={230}
            alt='HTML5'
            />
        </div>
        <div className='border-[3px] rounded-b-xl border-[#E73AF4]'>
        <Image className='width-[265px] h-[300px] rounded-b-lg'
            src={'/images (1).png'}
            width={275}
            height={230}
            alt='React.JS'
            />
        </div>
        <div className='border-[3px] rounded-b-xl border-[#E73AF4]'>
        <Image className='width-[265px] h-[300px] rounded-b-lg'
            src={'/images (3).jpg'}
            width={275}
            height={230}
            alt='Typescript'
            />
        </div>
        <div className='border-[3px] rounded-b-xl border-[#E73AF4]'>
        <Image className='width-[265px] h-[300px] rounded-b-lg'
            src={'/images 5.png'}
            width={275}
            height={230}
            alt='Next.JS'
            />
        </div>
      </div>
    </div>
  )
}

export default Skills
