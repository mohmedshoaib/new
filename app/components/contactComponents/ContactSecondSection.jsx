import React from 'react'
import Image from 'next/image'
const ContactSecondSection = () => {
  return (
    <div className='text-black bg-[#f8f8f8] flex xrm:flex-col'>
        <div className='max-w-[1400px] mt-[0px] ml-[55px] mr-[54px] w-full h-[45vh] xrm:m-0 xrm:h-[60vh]'>
          <div className='mt-[30px] text-center mb-[20px]'>
            <h1 className='text-3xl font-semibold'>Reach Out Via<div className='w-[200px] h-[2px] mt-2 ml-[520px] bg-blue-700 xrm:ml-[100px]'></div></h1>
          </div>
          <div className='h-[20vh] text-center flex justify-center'>
            <div className='flex justify-between h-[100px] xrm:flex-col'>
                <div className=''>
                    <Image src='/images/linkedin-icon-image.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold'>Linkedin</h1>
                    <h1 className='mx-30 px-20 text-left text-base font-medium xrm:text-sm'>linkedin.com/company/xdatalogix-solutions</h1>
                </div>
                <div className='xrm:py-5'>
                    <Image src='/images/whatsapp-icon-image.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold'>Whatsapp</h1>
                    <h1 className='mx-30 px-20 text-left text-base font-medium xrm:text-sm'>+91 99922 89055</h1>
                </div>
                <div className=''>
                    <Image src='/images/telegram-icon-image.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left text-lg font-semibold'>Business Inquiries</h1>
                    <h1 className='mx-30 px-20 text-left text-base font-medium xrm:text-sm'>hello@xdatalogix.com</h1>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactSecondSection
