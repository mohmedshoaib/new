import React from 'react'
import Image from 'next/image'
const TechFirstSection = () => {
  return (
    <div className="text-black flex xrm:flex-col-reverse">
      
      <div className="max-w-[700px] my-[20px] ml-[55px] w-full h-[80vh] flex flex-col justify-center xrm:m-0 xrm:justify-start xrm:h-[35vh]">
        <h1 className="text-5xl font-bold py-6 text-center xrm:text-3xl">
            Tech-Driven Auditing
          {/* <div className="w-[490px] h-[2px] ml-[60px] mt-2 bg-blue-700"></div> */}
        </h1>
        <div className="flex justify-center text-center px-[50px]">
          <p className="text-lg font-medium py-4 xrm:text-sm">
          Experience the power of cutting-edge technology that propels us to the forefront of the Freight Audit industry.
          </p>
        </div>
        <a href='#TechThirdSection' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 bg-blue-700 w-[200px] rounded-md font-bold my-6 mx-auto py-2 text-white text-center'><button>Read More</button></a>
      </div>

      <div className="max-w-[600px] my-[20px] mr-[54px] ml-10 w-full h-[80vh] flex flex-col justify-center xrm:m-0 xrm:pt-10 xrm:h-[45vh] xrm:justify-start">
        <Image
          src="/images/About-Vison-image.png"
          alt="Right Section Image"
          className="w-[600px] h-[100%] shadow-sm rounded-tl-[50px] rounded-br-[50px] xrm:w-[300px] xrm:h-[300px] xrm:mx-auto"
          width={700}
          height={500}
          priority
        />
      </div>
    </div>


    // <div className='text-black bg-white flex ed:flex-col bg-[url("/images/Tech-first-Section-image.jpg")] bg-no-repeat bg-cover'>
      
    //     {/* <div className='max-w-[600px] mt-[0px] ml-[55px] w-full h-[87.5vh] flex flex-col justify-center ed:mt-[-200px]'>
          
    //     </div> */}
    //     <div className='max-w-[1400px] mt-[0px] ml-[55px] mr-[54px] w-full h-[80vh] ed:my-[-300px]'>
    //       <div className='max-w-[700px] mt-[50px] mx-[20px] w-full h-[85vh] bg-[#f8f8f8] bg-opacity-80 rounded-xl text-center flex flex-col justify-center'>
    //         <ul className='text-left mx-10'>
    //             <li className='md:text-3xl sm:text-xl text-xl font-bold mb-2 md:py-6 ed:mt-[-300px]'>Tech-Driven Freight Audit Excellence</li>
    //             <li className='md:text-lg sm:text-lg text-sm font-medium py-4'>Experience the power of cutting-edge technology that propels us to the forefront of the Freight Audit industry. Through relentless dedication to research, development, and innovation, our advanced solutions ensure unrivaled leadership and efficiency, setting new standards in freight auditing. Join us on the journey to optimize your logistics with confidence and precision.</li>
    //         </ul>
    //         <button className='transition ease-in-out delay-20 hover:bg-blue-700 duration-300 bg-blue-500 w-[200px] rounded-md font-bold my-6 mx-auto py-2 text-white cursor-pointer'>Contact Us</button>
    //       </div>
    //     </div>
    // </div>
  )
}

export default TechFirstSection
