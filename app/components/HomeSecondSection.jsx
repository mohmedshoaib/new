import React from 'react'
import Image from 'next/image'
import { tick, circle_1 } from '../utils/icons'
import RightContainer from './subcomponents/RightContainer'
const HomeSecondSection = () => {
  return (
    <div className='bg-[#f8f8f8] text-black flex xrm:flex-col'>
      
        <div className='max-w-[800px] my-[20px] ml-[55px] mr-[50px] px-4 w-full h-[91vh] text-center flex flex-col xrm:ml-0 xrm:h-[76vh]'>
            <h1 className='text-4xl font-semibold text-left px-4 text-black py-6 xrm:text-center xrm:text-3xl'>About Us<div className='w-[160px] h-[2px] mt-2 bg-blue-700 xrm:w-[130px] xrm:ml-[100px]'></div></h1>
            <div className='text-left bg-white shadow-lg rounded-lg xrm:mx-3'>
                <ul>
                  <div className='flex mt-2'>
                    {/* <i className='px-5 py-0 my-5'>{circle_1}</i> */}
                    <li className='mt-6 text-base font-medium px-4 text-opacity-25'>Xdatalogix Solutions was formed in 2009 with a goal to provide quality data processing, auditing, and software consulting service.</li>
                  </div>
                  <div className='flex my-2'>
                    {/* <i className='px-5 py-0 my-5'>{circle_1}</i> */}
                    <li className='my-4 text-base font-medium px-4 text-opacity-25'>We provide service to fortune 500 companies directly as well indirectly by collaborating with our business partners.</li>
                  </div>
                  <div className='flex my-2'>
                    {/* <i className='px-5 py-0 my-5'>{circle_1}</i> */}
                    <li className='mb-4 text-base font-medium px-4 text-opacity-25'>We work very closely with our clients to understand their needs and provide them with a service that will help them run their business smoothly and efficiently.</li>
                  </div>
                  <div className='flex mb-2'>
                    {/* <i className='px-5 py-0 my-5'>{circle_1}</i> */}
                    <li className='mb-6 text-base font-medium px-4 text-opacity-25'>We enable our clients to take control of their business and empower them to make better business decisions by the use of technology.</li>
                  </div>
                </ul>
            </div> 
        </div>
        
        <div className='max-w-[510px] my-[20px] w-full h-[91vh] mr-[54px] text-center flex flex-col justify-center xrm:h-[60vh] xrm:w-[105%] xrm:mt-[-20px]'>
          <RightContainer />
        </div>
        
    </div>
  )
}

export default HomeSecondSection
