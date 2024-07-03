import React from 'react'
import { Inter, Play, Josefin_Sans } from "next/font/google";
import Link from 'next/link';
import DownloadResume from './DownloadResume';

const inter = Inter({ subsets: ["latin"] });
const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

const Bio = () => {
  return (
    <div className="px-5 py-16 sm:px-8 md:px-12 lg:px-32 xl:px-40 md:flex items-center text-justify">
      <div className='md:w-1/2 relative before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-[#3919bb82] before:to-[#c767ac85] before:z-[-1] before:rounded-tr-[100px] before:rounded-bl-[100px] before:backdrop-blur-sm before:shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] before:left-[-25px] before:bottom-[-35px]'>
        <img src="/images/me2.jpeg" className='object-cover px-3 rounded-tr-[100px] rounded-bl-[100px] brightness-75' alt="" />
      </div>
      <div className='md:w-1/2 md:px-3 pt-12 pb-0 md:py-0 xl:px-5'>
        <h2 className={`${play.className} text-4xl md:text-5xl xl:text-6xl font-semibold mb-4 xl:mb-6`}>About Me!</h2>
        <p className='xl:text-lg mb-5 text-[#adadad]'>
        Dynamic software developer with over 2 years of experience in crafting innovative frontend and backend solutions. I excel in creating seamless UI/UX experiences and delivering robust, fully functional web and mobile applications. My technology toolkit includes a diverse array of languages and frameworks such as HTML, CSS, JavaScript, ReactJS, NextJS, TypeScript, Bootstrap, Tailwind, MaterialUI, NodeJS, Express, MongoDB, Java, and SQL.
        </p>
        <p className='xl:text-lg mb-4 text-[#adadad]'>
        Proven track record of developing user-friendly interfaces and scalable backend systems. Passionate about pushing the boundaries of digital solutions and enhancing user experiences through cutting-edge technologies. Always ready to take on new challenges and contribute to transformative projects in the ever-evolving corporate IT landscape. Let's collaborate and drive your projects to success!
        </p>
        <div className='flex gap-3 mt-10'>
            <Link href={"/contact"}>
                <div className='bg-gradient-to-br from-[#c767ac] to-[#3919bb] inline-flex justify-center items-center rounded p-[2px]'>
                    <span className='py-3 px-9 uppercase text-sm xl:text-lg text-center hover:bg-[#100028]'>Hire Me</span>
                </div>
            </Link>
            <DownloadResume />
        </div>
      </div>
    </div>
  )
}

export default Bio
