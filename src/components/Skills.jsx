import React from 'react'
import { Inter, Play, Josefin_Sans } from "next/font/google";
import SkillsBox from './SkillsBox';

const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

const skills = [
  {
    title: "HTML",
    src: "/images/html5.svg",
    level: 95,
    imgColor: "default"
  },
  {
    title: "CSS",
    src: "/images/css3.svg",
    level: 90,
    imgColor: "default"
  },
  {
    title: "JavaScript",
    src: "/images/JS.svg",
    level: 85,
    imgColor: "default"
  },
  {
    title: "TypeScript",
    src: "/images/TypeScript.svg",
    level: 70,
    imgColor: "default"
  },
  {
    title: "Bootstrap",
    src: "/images/bootstrap.svg",
    level: 90,
    imgColor: "default"
  },
  {
    title: "Tailwind CSS",
    src: "/images/tailwindcss.svg",
    level: 80,
    imgColor: "default"
  },
  {
    title: "React",
    src: "/images/React.svg",
    level: 85,
    imgColor: "default"
  },
  {
    title: "Next JS",
    src: "/images/NextJS.svg",
    level: 75,
    imgColor: "white"
  },
  {
    title: "Node JS",
    src: "/images/nodejs.svg",
    level: 60,
    imgColor: "default"
  },
  {
    title: "Mongo DB",
    src: "/images/mongodb.svg",
    level: 70,
    imgColor: "default"
  },
  
]

const Skills = () => {
  return (
    <div className={`bg-[url('/images/laptop.jpg')] bg-cover bg-fixed bg-[#000000ba] bg-blend-overlay s-clip h-auto w-screen py-48 flex flex-col md:flex-row justify-center items-center px-5 sm:px-8 md:px-12 lg:px-32 xl:px-40`}>
      <div className={`md:w-5/12`}>
        <h3 className={`text-center text-xl md:text-2xl xl:text-4xl font-bold mb-2 xl:mb-3`}>My Skills</h3>
        <h2 className={`${play.className} text-center text-4xl md:text-5xl xl:text-6xl font-semibold mb-8 md:mb-0`}>Technical Expertise</h2>
      </div>
      <div className={`flex justify-center items-center flex-wrap gap-2 md:w-7/12`}>
        {
          skills.map(skill => (
            <SkillsBox key={skill.title} title={skill.title} src={skill.src} level={skill.level} imgColor={skill.imgColor} />
          ))
        }
      </div>
    </div>
  )
}

export default Skills
