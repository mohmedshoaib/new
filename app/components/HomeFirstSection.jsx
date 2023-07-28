'use client'
import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js'
import Image from 'next/image'
const HomeFirstSection = () => {
  // const el = useRef(null);
  //   useEffect(() => {
  //       const options = {
  //           strings: [
  //               `Audit`,
  //               `Data`,
  //           ],
  //           typeSpeed: 60,
  //           backSpeed: 30,
  //           loop: true,
  //           cursorChar: "",
  //       };
        
  //       const typed = new Typed(el.current, options);
  //       return () => {
  //           typed.destroy();
  //       };
  //   }, []);
  return (
    <div className='text-black flex xrm:flex-col'>
      
        <div className='max-w-[600px] my-[20px] ml-[55px] w-full h-[87.5vh] flex flex-col justify-center xrm:mx-0 xrm:justify-end xrm:h-[35vh]'>
          <Image src='/images/Home-img.svg' alt='Hero Section Image' className='w-[600px] h-[80%] xrm:w-[300px] xrm:h-[232px] xrm:ml-[45px]' width={700} height={500} priority />
        </div>
        
        <div className='max-w-[700px] my-[20px] mr-[54px] w-full h-[87.7vh] text-center flex flex-col justify-center xrm:justify-start xrm:h-[35vh]'>
          
          <h1 className='text-5xl font-bold py-6 uppercase xrm:text-xl xrm:pb-0'>Unleash Your Potential</h1>
          <div className='flex justify-center items-center'>
            <p className='text-3xl font-bold py-4 xrm:text-lg'>Thrive with XDataLogix</p>
          </div>

          <p className='text-2xl font-semibold text-[#001688] xrm:text-sm'>Provide Data processing, Auditing, and Software Counsulting Services</p>
          <button className='transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-100 duration-300 bg-blue-700 w-[200px] rounded-md font-bold my-6 mx-auto py-2 text-white'>Get Started</button>
        </div>
        
    </div>
  )
}

export default HomeFirstSection

