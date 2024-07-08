"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import NavLink from "./NavLink"
import { backInOut, easeInOut, motion } from "framer-motion"
import { FaHouse, FaUserTie, FaCode, FaAddressCard, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6"
import { usePathname } from "next/navigation"

const links = [
  {title: "Home", url: "/", icon: <FaHouse />},
  {title: "About", url: "/about", icon: <FaUserTie />},
  {title: "Portfolio", url: "/portfolio", icon: <FaCode />},
  {title: "Contact", url: "/contact", icon: <FaAddressCard />},
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', fixNav)

    return () => window.removeEventListener('scroll', fixNav)
  }, [])

  // useEffect(() => {
  //   if(open) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "auto"
  //   }
  // })

  const fixNav = () => {
    if(window.scrollY >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }


  const topVariants = {
    opened: {
      rotate: 45,
    },
    closed: {
      rotate: 0
    }
  }

  const centerVariants = {
    opened: {
      opacity: 0
    },
    closed: {
      opacity: 1
    }
  }

  const bottomVariants = {
    opened: {
      rotate: -45,
    },
    closed: {
      rotate: 0
    }
  }

  const drawerVariants = {
    opened: {
      x: 0,
      transition: {
        ease: easeInOut,
        staggerChildren: 0.3
      }
    },
    closed: {
      x: "100vw",
      transition: easeInOut,
    }
  }

  const listItemVariants = {
    closed: {
      x: -100,
      opacity: 0,
      scale: 0
    },

    opened: {
      x: 0,
      opacity: 1,
      scale: 1, 
    }
  }

  const pathName = usePathname()


  return (
    <div className={`h-24 w-full z-10 transition ease-in-out duration-500 ${scrolled ? "fixed top-0 bg-BG_NAVBAR" : "absolute bg-transparent top-0"}`}>
      <nav className={`h-full flex justify-between items-center px-5 sm:px-8 md:px-12 lg:px-32 xl:px-40`}>
      

        {/* Logo */}
        <div className="flex md:w-1/4">
          <Link href='/'>
            <div className="text-sm bg-transparent rounded-md text-white font-semibold border-white border-2 relative rotate-45 w-14 h-14 flex items-center justify-center before:absolute before:w-full before:h-full before:bg-transparent before:border-2 before:rounded-md before:scale-90">
              <span className="absolute rotate-[-45deg] z-10">A.F</span>
            </div>
          </Link>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center flex-wrap xl:gap-4 md:gap-3 md:w-2/4">
          {links.map(link => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>



        {/* Social Media */}
        <div className="hidden md:flex box-border gap-3 justify-end items-center md:w-1/4">
          <Link href="/"><FaFacebook size={"20px"} /></Link>
          <Link href="/"><FaInstagram size={"20px"} /></Link>
          <Link href="/"><FaLinkedin size={"20px"} /></Link>
          <Link href="/"><FaGithub size={"20px"} /></Link>
        </div>

        {/* Responsive Menu */}
        <button className="w-7 h-6 flex flex-col justify-between z-50 relative md:hidden" onClick={() => setOpen(!open)}>
          <motion.span variants={topVariants} animate={open ? "opened" : "closed"} className="w-full h-1 rounded-md bg-white origin-left"></motion.span>
          <motion.span variants={centerVariants} animate={open ? "opened" : "closed"} className="w-full h-1 rounded-md bg-white"></motion.span>
          <motion.span variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-full h-1 rounded-md bg-white origin-left"></motion.span>
        </button>

        {/* Menu Items */}
        {
          open &&
          <motion.div variants={drawerVariants} initial="closed" animate="opened" className="w-screen h-screen fixed top-0 left-0 bg-[#100028] flex flex-col justify-center text-white gap-6 text-2xl font-medium z-40 md:hidden">
            {links.map(link => {
              return (
                <motion.div variants={listItemVariants} key={link.title}>
                  <Link className={`flex justify-center items-center gap-4 py-3 ${link.url === pathName && 'bg-gradient-to-br from-THEME_PINK to-THEME_BLUE'}`} href={link.url} onClick={() => setOpen(false)}>{link.icon}{link.title}</Link>
                </motion.div>
              )
            })}
          </motion.div>
        }
      </nav>
    </div>
    
  )
}

export default Navbar
