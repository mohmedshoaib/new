'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarIcon from './NavbarIcon'
import MenubarList from './MenubarList'
const NavbarList = () => {
    const [showMenubar, setShowMenubar] = useState(false)

    const handleClick = () => {
        setShowMenubar(!showMenubar)
    } 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShowMenubar(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            console.log('cleanup')
            window.removeEventListener('resize', handleResize)
        }
    }, [])
  return (
    <div className='flex justify-between items-center h-[5rem] max-w-[77.5em] mx-auto px-4'>
      <Link href={"/"}><Image src='/images/logo.png' alt='Logo Image' width={200} height={200} priority className='cursor-pointer' /></Link>
      <ul className='hidden md:flex text-black'>
        <Link href={"/"}><li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'>Home</li></Link>
        <Link href={"/freightAudit"}><li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'>FreightAudit</li></Link>
        <Link href={"/technology"}><li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'>Technology</li></Link>
        {/* <li className='p-4 hover:bg-[#526D82] hover:text-white font-semibold rounded-sm cursor-pointer'><Link href={"/otherServices"}>Services</Link></li> */}
        <Link href={"/about"}><li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'>About</li></Link>
        <Link href={"/career"}><li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'>Career</li></Link>
        <Link href={"/contact"}><li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'>Contact</li></Link>
      </ul>
      {/* <NavbarIcon /> */}
        <div className='block md:hidden' onClick={handleClick}>
            {!showMenubar ? (<Image src='/images/menubar.png' alt='Side Bar' width={50} height={200} priority/>) : null }      
        </div>
        {showMenubar && <MenubarList showMenubar={showMenubar} setShowMenubar={setShowMenubar}/>}
    </div>
  )
}

export default NavbarList
