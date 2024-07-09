import React from 'react'
import { FaArrowRightLong, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-BG_FOOTER'>
      <div className='w-full md:flex md:flex-wrap px-5 sm:px-8 md:px-12 lg:px-32 xl:px-40 py-20'>
        <div className='w-full md:w-1/2 md:pt-5 pt-6 md:pr-5 lg:pr-0 lg:pt-0 lg:w-1/4'>
          <h3 className={`text-lg md:text-xl xl:text-2xl font-bold mb-3 xl:mb-4`}>About</h3>
          <p className='text-gray-300'>
            Dynamic software developer with over 2 years of experience in crafting innovative frontend and backend solutions.
          </p>
          {/* Social Media */}
          <div className="flex mt-4 box-border gap-2 items-center">
            <Link href="/"><FaFacebook size={"22px"} /></Link>
            <Link href="/"><FaInstagram size={"22px"} /></Link>
            <Link href="/"><FaLinkedin size={"22px"} /></Link>
            <Link href="/"><FaGithub size={"22px"} /></Link>
          </div>
        </div>
        <div className='w-full md:w-1/2 pt-6 md:pt-5 lg:pt-0 pl-0 lg:pl-10 lg:w-1/4'>
          <h3 className={`text-lg md:text-xl xl:text-2xl font-bold mb-3 xl:mb-4`}>Links</h3>
          <ul className='text-gray-300'>
            <li className='py-2'><Link href="/" className='flex items-center gap-2'><FaArrowRightLong />Home</Link></li>
            <li className='py-2'><Link href="/about" className='flex items-center gap-2'><FaArrowRightLong />About</Link></li>
            <li className='py-2'><Link href="/portfolio" className='flex items-center gap-2'><FaArrowRightLong />Portfolio</Link></li>
            <li className='py-2'><Link href="/contact" className='flex items-center gap-2'><FaArrowRightLong />Contact</Link></li>
          </ul>
        </div>
        <div className='w-full md:w-1/2 pt-6 md:pt-5 lg:pt-0 lg:w-1/4'>
          <h3 className={`text-lg md:text-xl xl:text-2xl font-bold mb-3 xl:mb-4`}>Services</h3>
          <ul className='text-gray-300'>
            <li className='py-2 flex items-center gap-2'><FaArrowRightLong />Web Development</li>
            <li className='py-2 flex items-center gap-2'><FaArrowRightLong />Mobile App Development</li>
            <li className='py-2 flex items-center gap-2'><FaArrowRightLong />Software Development</li>
          </ul>
        </div>
        <div className='w-full md:w-1/2 pt-6 md:pt-5 lg:pt-0 lg:w-1/4'>
            <h3 className={`text-lg md:text-xl xl:text-2xl font-bold mb-3 xl:mb-4`}>Have A Question?</h3>
            <ul className='text-gray-300'>
              <li className='py-2 inline-flex items-center gap-2'><FaLocationDot /> Karachi, Pakistan, 75330</li>
              <li><Link href="tel:+923312327785" className='py-2 flex items-center gap-2'><FaPhone /> +923312327785</Link></li>
              <li><Link href="mailto:ahmedabro97@gmail.com" className='py-2 inline-flex items-center gap-2'><FaEnvelope /> ahmedabro97@gmail.com</Link></li>
            </ul>
        </div>
      </div>
      <div className='w-screen border-t-2 border-t-white border-opacity-20 py-4'>
        <p className='text-center'>Copyright &copy;2024 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
