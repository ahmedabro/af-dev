import React from 'react'
import { Inter, Play, Josefin_Sans } from "next/font/google";


const play = Play({ weight: ["400", "700"], subsets: ["latin"] })


const ServiceBox = ({title, icon, description}) => {
  return (
    <div className={`bg-[#331C52] px-4 py-10 flex flex-col items-center justify-center text-center w-full sm:w-1/2 md:w-1/3 rounded-lg`}>
            {icon}
            <h2 className={`${play.className} text-lg xl:text-xl font-semibold mt-4 mb-3 xl:mb-6`}>{title}</h2>
            <p className='text-sm mb-5 text-[#adadad]'>
                {description}
            </p>
    </div>
  )
}

export default ServiceBox
