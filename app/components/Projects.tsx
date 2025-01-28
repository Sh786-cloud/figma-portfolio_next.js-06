import React from 'react'
import Card from './Card'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin']
});

const data = [
    {
        id: 0,
        title : "Todo List",
        desc : "A React & Typescript based app for managing tasks.",
        img : "/ScreenShoot2 1.png",
        tags : ["React.JS", "Typescript", "ShadcnUI"]
    },
    {
        id : 1,
        title : "Props",
        desc : "A component based app built with Next.JS & Typescript.",
        img : "/Annotation 2024-11-03 143359-2 1.png",
        tags : ["TailwindCSS", "React.JS", "Next.JS"]
    },
    {
        id : 2,
        title : "Books API",
        desc : "A dynamic app integrates a books API supporting CRUD operations.",
        img : "/Screenshot (8) new-2 1.png",
        tags : ["React.JS", "Next.JS", "Typescript"]
    }
]

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen relative'>
      <div className='font-nunito font-bold text-5xl absolute left-[145px] top-[70px] text-[#000000]'>
        Projects
      </div>
      <div className='grid gap-20 md:grid-cols-2 lg:grid-cols-3 absolute left-[145px] top-[150px] mr-[120px]'>
        {data.map((el)=>
        <Card
        key={el.id}
        image={el.img}
        title={el.title}
        desc={el.desc}
        tags={el.tags}
        />
        )}
      </div>
    </div>
  )
}

export default Projects
