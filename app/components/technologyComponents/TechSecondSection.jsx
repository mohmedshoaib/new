import React from 'react'
import Image from 'next/image'
const TechSecondSection = () => {
  return (
    <div className='text-white bg-[#1B2430] flex xrm:flex-col'>
        <div className='max-w-[1400px] mt-[0px] ml-[55px] mr-[54px] w-full h-[50vh] xrm:m-0 xrm:h-[90vh]'>
          <div className='mt-[50px] text-center mb-[20px]'>
            <h1 className='text-3xl font-semibold'>Features<div className='w-[130px] h-[2px] mt-2 ml-[555px] bg-blue-700 xrm:w-[130px] xrm:ml-[130px]'></div></h1>
          </div>
          <div className='max-w-[1200px] mx-[20px] w-full h-[20vh] text-center flex flex-col justify-center xrm:w-[90vw] xrm:h-[70vh]'>
            <div className='flex justify-center h-[100px] xrm:w-[90vw] xrm:h-[200px] xrm:m-0 xrm:flex-col'>
                <div className='xrm:py-2 xrm:bg-white xrm:rounded-lg xrm:text-black'>
                    <Image src='/images/agreementimage.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold xrm:mx-0'>Agreement</h1>
                    <p className='mx-30 px-20 text-left text-base font-medium xrm:mx-0'>Contract parsing and change management, rate and tariff repository.</p>
                </div> 
                <div className='xrm:py-2 xrm:bg-white xrm:rounded-lg xrm:text-black xrm:my-5'>
                    <Image src='/images/auditimage.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold xrm:mx-[0px]'>Auditing</h1>
                    <p className='mx-30 px-20 text-left text-base font-medium xrm:mx-[0px]'>Proof of work history and delivery validation, accessorial evaluation.</p>
                </div>
                <div className='xrm:py-2 xrm:bg-white xrm:rounded-lg xrm:text-black'>
                    <Image src='/images/paymentimage.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold'>Payment Processing</h1>
                    <p className='mx-30 px-20 text-left text-base font-medium'>Comprehensive Freight Audit & Payment Processing.</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TechSecondSection
