import Image from 'next/image'
import React from 'react'
import { Inter, Nunito } from 'next/font/google'

const nunito = Nunito();
const inter = Inter();

interface Props{
    image : string
    title : string
    desc : string
    tags : string[]
}

const Card:React.FC<Props> = ({image, title, desc, tags}) => {
  return (
    <div className='border-[3px] rounded-b-xl border-[#E73AF4] width-[265px] place-items-center'>
      <div>
        <Image
        src={image}
        width={275}
        height={230}
        alt='TodoList'
        />
      </div>
      <div className='p-3 space-y-2'>
        <div className='font-inter font-semibold text-lg text-black'>
            {title}
        </div>
        <div className='font-inter font-medium text-md  text-black'>
            {desc}
        </div>
        <div className='space-x-3'>
        {tags.map((el)=>
        <div className='font-nunito tags text-md' key={el}>
            {el}
        </div>)}
        </div>
      </div>
    </div>
  )
}

export default Card
