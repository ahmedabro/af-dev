import React from 'react'
import { Inter, Play, Josefin_Sans } from "next/font/google";
import ContactForm from './ContactForm';


const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

const WorkTogether = () => {
  return (
    <div className='w-screen md:flex items-center py-20'>
        <div className='md:w-3/5 px-5 md:px-20'>
            <h2 className={`${play.className} text-4xl md:text-5xl xl:text-6xl font-semibold mb-8 xl:mb-16`}>Let&apos;s build an awesome project together</h2>
            <ContactForm />
        </div>
        <div className='md:w-2/5 mt-10 md:mt-0'>
            <img src="/images/collaborate.jpg" alt="" />
        </div>
    </div>
  )
}

export default WorkTogether
