'use client'
import React, { useState, useEffect } from 'react'
import { Inter, Play, Josefin_Sans } from "next/font/google";
import Fancybox from './Fancybox';


const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

const tabsContent = ['All', 'React', 'HTML/CSS/JS']

const projects = [
  {
    id: 1,
    title: "React App",
    img: "/images/projects/project1.png",
    category: "HTML, CSS, JS",
  },
  {
    id: 2,
    title: "React App",
    img: "/images/projects/project2.png",
    category: "React",
  },
  {
    id: 3,
    title: "React App",
    img: "/images/projects/project3.png",
    category: "React",
  },
  {
    id: 4,
    title: "React App",
    img: "/images/projects/project4.png",
    category: "HTML, CSS, JS",
  },
  {
    id: 5,
    title: "React App",
    img: "/images/projects/project5.png",
    category: "HTML, CSS, JS",
  },
  {
    id: 6,
    title: "React App",
    img: "/images/projects/project6.png",
    category: "HTML, CSS, JS",
  },
  {
    id: 7,
    title: "React App",
    img: "/images/projects/project7.png",
    category: "HTML, CSS, JS",
  },
]

const Work = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleClick = (index) => {
    setActiveTab(index)
  }
  return (
    <div className="w-full px-5 sm:px-8 md:px-12 lg:px-32 xl:px-40">
      <h3 className={`text-center text-xl md:text-2xl xl:text-4xl font-bold mb-2 xl:mb-3`}>Portfolio</h3>
      <h2 className={`${play.className} text-center text-4xl md:text-5xl xl:text-6xl font-semibold mb-8 xl:mb-16`}>My Work</h2>
      <ul className='flex justify-center gap-8'>
        {
          tabsContent.map((tab, index) => (
            <li key={index} onClick={() => handleClick(index)} className={`${activeTab === index ? "bg-gradient-to-br from-[#c767ac] to-[#3919bb]" : "bg-transparent"} py-1 px-7 rounded-3xl text-lg ease-in-out duration-500`}>{tab}</li>
          ))
        }
      </ul>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className={`flex justify-center flex-wrap gap-5 py-10`}>

          {
            projects.filter(project => {
              if(activeTab === 0) {
                return project
              } else if (activeTab === 1) {
                return project.category.includes("React") ? project : null
              } else if (activeTab === 2) {
                return project.category.includes("HTML, CSS, JS") ? project : null
              }
            }).map(project => (
              <a style={{'--image-url': `url(${project.img})`}} href={project.img} data-fancybox="gallery" data-caption={project.title} key={project.id} className='w-[30%] h-[300px] block soverflow-hidden bg-[image:var(--image-url)] bg-cover bg-top hover:bg-bottom duration-[3s] ease'>
              
              </a>
            ))
          }

        </div>
      </Fancybox>
    </div>
  )
}

export default Work
