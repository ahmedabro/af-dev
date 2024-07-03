import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {
    const linkPath = usePathname()
  return (
    <Link href={link.url} className={`py-1 px-2 md:px-1 lg:px-2  rounded-md ${link.url === linkPath ? 'bg-gradient-to-br from-[#c767ac] to-[#3919bb] text-white' : 'bg-transparent'}`}>{link.title}</Link>
  )
}

export default NavLink
