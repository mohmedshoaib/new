import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const AuditFirstSection = () => {
  return (
    <div className="text-black flex xrm:flex-col-reverse">
      
      <div className="max-w-[700px] my-[20px] ml-[55px] w-full h-[80vh] flex flex-col justify-center xrm:m-0 xrm:justify-start xrm:h-[35vh]">
        <h1 className="text-5xl font-bold py-6 text-center xrm:text-3xl">
          Freight Audit
          {/* <div className="w-[150px] h-[2px] ml-[150px] mt-1 bg-blue-700"></div> */}
        </h1>
        <div className="flex justify-center text-center px-[50px]">
          <p className="text-lg font-medium py-4 xrm:text-sm">
            Unlock success with our data-driven solutions in Freight & Payments and Value-Added Services, powered by cutting-edge technology.
          </p>
        </div>
        <Link href='/contact' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 bg-blue-700 w-[200px] rounded-md font-bold my-6 mx-auto py-2 text-center text-white'>Contact Us</Link>
      </div>

      <div className="max-w-[600px] my-[20px] mr-[54px] ml-10 w-full h-[80vh] flex flex-col justify-center xrm:m-0 xrm:pt-10 xrm:h-[45vh] xrm:justify-start">
        <Image
          src="/images/b.jpg"
          alt="Right Section Image"
          className="w-[600px] h-[100%] shadow-sm rounded-tl-[50px] rounded-br-[50px] xrm:w-[300px] xrm:h-[300px] xrm:mx-auto"
          width={700}
          height={500}
          priority
        />
      </div>
    </div>
  )
}

export default AuditFirstSection
