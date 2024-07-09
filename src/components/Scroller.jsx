"use client"

import {useEffect, useState} from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import Link from 'next/link'

const Scroller = () => {

    useEffect(() => {
        window.addEventListener('scroll', showScroller);

        return () => window.removeEventListener('scroll', showScroller);
    }, [])

    const [scrolled, setScrolled] = useState(false)

    const showScroller = () => {
        if (window.scrollY > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }   
        console.log(window.scrollY)
      }
  return (
    <Link href={"#navbar"}>
        <span className={`bg-gradient-to-br from-THEME_PINK to-THEME_BLUE rounded-md p-3 fixed right-0 w-fit ${scrolled ? "bottom-4" : "bottom-[-20%]"} mr-4 sm:mr-8 md:mr-12 lg:mr-28 hidden md:block z-10 transition-all shadow-md opacity-50 hover:opacity-100`}>
            <FaArrowUp />
        </span>
    </Link>
  )
}

export default Scroller
