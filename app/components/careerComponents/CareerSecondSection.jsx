import React from 'react'
import Image from 'next/image'
const CareerSecondSection = () => {
  return (
    <div className='bg-[#f8f8f8] text-black flex xrm:flex-col'>
      
        <div className='max-w-[800px] my-[20px] ml-[55px] mr-[50px] px-4 w-full h-[80vh] text-center flex flex-col xrm:m-0'>
            <h1 className='text-3xl font-medium text-left px-4 text-black py-6 xrm:text-center'>Why Choose Us<div className='w-[275px] h-[2px] mt-2 bg-blue-700 xrm:ml-[55px] xrm:w-[220px]'></div></h1>
            <ul className='text-left bg-white shadow-lg rounded-lg'>
              <div className='flex mt-2'>
                <li className='my-4 text-base font-medium px-4 '>At XdataLogix, your work directly impacts the success and growth of our organization and our clients. As a member of our team, you'll be part of a collaborative and forward-thinking company that values innovation and excellence.</li>
              </div>
              <div className='flex my-2'>
                <li className='text-base font-medium px-4'>We believe in the continuous development of our employees. With access to a wealth of learning opportunities, mentorship programs, and on-the-job experiences, you'll have the support and resources needed to take your career to the next level.</li>
              </div>
              <div className='flex my-2'>
                <li className='my-4 text-base font-medium px-4'>We understand the importance of work-life balance. Our flexible work arrangements and wellness initiatives ensure that you can thrive both professionally and personally.</li>
              </div>
            </ul>
        </div>
        
        <div className='max-w-[510px] my-[20px] w-full h-[80vh] mr-[54px] text-center flex flex-col justify-center xrm:justify-start xrm:h-[40vh]'>
          <Image src='/images/Career-Second-Section-image.jpg' alt='Career Image' width={600} height={500} priority />
        </div>
        
    </div>
  )
}

export default CareerSecondSection
