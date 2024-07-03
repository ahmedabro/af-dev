'use client'
import React from 'react'
import { Inter, Play, Josefin_Sans } from "next/font/google";

const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

const SkillsBox = ({title, src, level, imgColor}) => {
  return (
    <div className={`w-[45%] md:w-[30%] xl:w-[20%] bg-[#331c525e] backdrop-blur-sm shadow-md px-3 py-4 flex flex-col items-center justify-center rounded-md`}>
        <img src={src} className={`w-[55px] ${imgColor === "white" ? "brightness-0 invert" : ""}`} alt={title} title={title} />
        {/* <h3 className={`${play.className} font-semibold text-center text-xl mt-10`}>{title}</h3> */}
        <div className='w-full relative bg-[#7969bb29] border border-[#ffffff1c] h-2 rounded-md mt-5'>
            <span className={`h-full bg-gradient-to-br from-[#3919bb] to-[#c767ac] absolute z-20`} style={{ width: `${level}%` }}></span>
            <span style={{ width: `${level}%` }} className={`block text-right absolute z-30 top-[-20px]`}>{level}%</span>
        </div>
        
    </div>
  )
}

export default SkillsBox
