'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { Inter, Play, Josefin_Sans } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';


const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Software Developer",
      company: "Workstream Automation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Executive Frontend Developer",
      company: "ProByte",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Associate MEAN Stack Developer",
      company: "Nukes Lab",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },

  ];

const Experience = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref})

    const x = useTransform(scrollYProgress, [0,1], ["0%", "-67%"])

  return (
    <>
    <div className='w-screen h-[300vh] relative' ref={ref}>
      <h3 className={`text-center text-xl md:text-2xl xl:text-4xl font-bold mb-2 xl:mb-3`}>Experience</h3>
      <h2 className={`${play.className} text-center text-4xl md:text-5xl xl:text-6xl font-semibold mb-8 xl:mb-16`}>My Work Experience</h2>
      <div className={`sticky top-0 flex items-center gap-4`}>
        <motion.div style={{x}} className='flex'>
        {
            items.map((item) => (
             <div key={item.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
                <div className='flex flex-col gap-8 w-1/2 text-white'>
                    <h1>{item.title}</h1>
                    <h2>{item.company}</h2>
                    <div className='relative'>
                        <Image src={item.img} alt='' fill />
                    </div>
                    <p>{item.desc}</p>
                </div>
             </div>   
            ))
        }
        </motion.div>
      </div>
    </div>

    </>
  )
}

export default Experience
