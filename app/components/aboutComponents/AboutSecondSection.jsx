import React from 'react'
import Image from 'next/image'
const AboutSecondSection = () => {
  return (
    <div className='text-white bg-[#1B2430] flex xrm:flex-col'>
        <div className='max-w-[1400px] mt-[0px] ml-[55px] mr-[54px] w-full h-[50vh] xrm:m-0 xrm:h-[90vh]'>
          <div className='mt-[50px] text-center mb-[20px]'>
            <h1 className='text-3xl font-semibold'>Core Values<div className='w-[200px] h-[2px] mt-2 ml-[520px] bg-blue-700 xrm:ml-[113px] xrm:w-[170px]'></div></h1>
          </div>
          <div className='max-w-[1200px] mx-[20px] w-full h-[20vh] text-center flex flex-col justify-center xrm:w-[90vw] xrm:h-[70vh]'>
            <div className='flex justify-center h-[100px] xrm:w-[90vw] xrm:h-[200px] xrm:m-0 xrm:flex-col'>
                <div className='mx-5 xrm:py-2 xrm:bg-white xrm:rounded-lg xrm:text-black'>
                    <Image src='/images/trustimg.png' alt='Trust Image' width={80} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold xrm:mx-0'>Trusted</h1>
                    {/* <li className='mx-30 px-20 text-left md:text-base font-medium'>Contract parsing and change management, rate and tariff repository.</li> */}
                </div>
                <div className='mx-5 xrm:py-2 xrm:bg-white xrm:rounded-lg xrm:text-black xrm:my-5'>
                    <Image src='/images/resultimage.png' width={80} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold xrm:mx-0'>Result-Driven</h1>
                    {/* <li className='mx-30 px-20 text-left md:text-base font-medium'>Proof of work history and delivery validation, accessorial evaluation.</li> */}
                </div>
                <div className='mx-5 xrm:py-2 xrm:bg-white xrm:rounded-lg xrm:text-black'>
                    <Image src='/images/increaseimage.png' width={80} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold xrm:mx-0'>Consultative</h1>
                    {/* <li className='mx-30 px-20 text-left md:text-base font-medium'>Comprehensive Freight Audit & Payment Processing.</li> */}
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutSecondSection
