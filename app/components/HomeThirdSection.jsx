'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const HomeThirdSection = () => {
    const router = useRouter();
  return (
    <div className='bg-[#1A1A2E] text-white flex xrm:h-[70vh]'>
        <div className='ml-[55px] mr-[54px] my-[20px] w-full h-[50vh] text-center flex flex-col xrm:ml-0'>
            <h1 className='text-4xl font-semibold py-6 xrm:text-3xl'>The Smart Move For <div className='w-[340px] h-[2px] mt-2 mx-[450px] bg-blue-700 xrm:ml-[53px] xrm:w-[290px]'></div></h1>
            <h1 className='text-2xl font-medium xrm:text-xl'>Audit, Recovery and Analytics</h1>

            <div className='flex justify-center mt-[35px] text-black xrm:flex-col'> 
                <div className='h-[20vh] m-2 py-6 px-4 bg-white rounded-lg hover:bg-blue-200 ease-in-out duration-500 cursor-pointer xrm:w-[90vw] xrm:h-[12vh] xrm:mx-5 xrm:p-[1px]' onClick={()=> router.push("/freightAudit")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[100px] font-bold uppercase' >Logistics Expertise</h1>
                        <span className='mb-[5px]'><Image src='/images/truckimg.png' alt='Truck Icon' width={40} height={50} priority/></span>
                    </div>
                </div>
                <div className='h-[20vh] m-2 py-6 px-4 bg-white rounded-lg hover:bg-blue-200 ease-in-out duration-500 cursor-pointer xrm:w-[90vw] xrm:h-[12vh] xrm:mx-5 xrm:p-[1px]' onClick={()=> router.push("/technology")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[120px] font-bold uppercase' >Technology Dedication</h1>
                        <span className='mb-[5px]'><Image src='/images/technologyimage.png' alt='Technology Icon' width={40} height={50} priority/></span>
                    </div>
                </div>
                <div className='h-[20vh] m-2 py-6 px-4 bg-white rounded-lg hover:bg-blue-200 ease-in-out duration-500 cursor-pointer xrm:w-[90vw] xrm:h-[12vh] xrm:mx-5 xrm:p-[1px]' onClick={()=> router.push("/about")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[90px] font-bold uppercase' >Other Details</h1>
                        <span className='mb-[5px]'><Image src='/images/serviceimage.png' alt='Service Icon' width={40} height={50} priority/></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeThirdSection
