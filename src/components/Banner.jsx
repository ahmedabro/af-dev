'use client'
import Link from "next/link";
import { Inter, Play, Josefin_Sans } from "next/font/google";
import {Typewriter} from 'react-simple-typewriter'

const inter = Inter({ subsets: ["latin"] });
const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

import React from 'react'

const Banner = () => {
  return (
    <main className="h-[110vh] w-full bg-[url('/images/programming-bg.jpg')] bg-cover bg-fixed clip-path flex flex-col justify-center md:flex-row md:items-center md:justify-normal px-5 sm:px-8 md:px-12 lg:px-32 xl:px-40" id="navbar">
        <div className="w-full flex items-end pb-5 md:block md:w-1/2 md:bg-[#ffffff2b] md:rounded-xl md:shadow-md md:backdrop-blur-sm md:border md:border-[#ffffff73] md:p-10 justify-center text-center md:text-start md:justify-normal">
          <div>
            <h4 className="bg-gradient-to-br from-[#ffc2ee] to-[#7969bb] inline-block bg-clip-text text-transparent text-lg md:text-xl xl:text-2xl font-semibold mb-2">Hi, My name is</h4>
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold mb-2 xl:mb-3">Ahmed Farooq</h1>
            <h2 className={`${play.className} text-2xl xl:text-4xl font-semibold mb-2 xl:mb-3 inline-block`}>I&apos;m a <Typewriter words={['Software Developer', 'Frontend Developer', 'MERN Stack Developer']} loop={0} /></h2>
            <p className="font-normal text-sm xl:text-base mb-2 xl:mb-3">
              Coffee, Code, and Conquer my daily life routine.
            </p>
            <div className="flex gap-2 pt-4">
              <Link href="/portfolio" className="bg-[#100028] outline-[#100028] outline-2 font-bold text-white rounded flex justify-center items-center w-36 py-3">My Work</Link>
              <Link href="/contact" className="bg-transparent text-[#100028] outline-[#100028] outline outline-2 font-bold rounded flex justify-center items-center w-36 py-3">Contact Me</Link>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 md:w-1/2 relative flex justify-center items-center md:items-center md:justify-end before:absolute before:w-[320px] before:h-[320px] before:bg-gradient-to-br before:from-[#3919bb82] before:to-[#c767ac85] before:z-[-1] before:mb-[-70px] before:mr-[-30px] before:rounded-tl-[100px] before:rounded-br-[100px] before:backdrop-blur-sm before:shadow-[0 4px 30px rgba(0, 0, 0, 0.1)]">
          <img src="/images/me3.jpeg" alt="" className="object-cover max-w-[320px] max-h-[320px] w-[400px] h-[400px] rounded-tl-[100px] rounded-br-[100px] object-top brightness-[0.85]" />
        </div>
      </main>
  )
}

export default Banner
