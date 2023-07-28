import React from "react";
import Image from "next/image";
const AboutFirstSection = () => {
  return (
    <div className="text-black flex xrm:flex-col">
      <div className="max-w-[600px] my-[20px] ml-[55px] mr-10 w-full h-[80vh] flex flex-col justify-center xrm:m-0 xrm:pt-10 xrm:h-[45vh] xrm:justify-start">
        <Image
          src="/images/About-First-Section-image.jpg"
          alt="Right Section Image"
          className="w-[600px] h-[100%] shadow-sm rounded-tl-[50px] rounded-br-[50px] xrm:w-[300px] xrm:h-[300px] xrm:mx-auto"
          width={700}
          height={500}
          priority
        />
        {/* <h1>Left Image</h1> */}
      </div>

      <div className="max-w-[700px] my-[20px] mr-[54px] w-full h-[80vh] text-center flex flex-col justify-center xrm:justify-start xrm:h-[45vh]">
        <h1 className="text-5xl font-bold py-6 xrm:text-4xl">
          About Us
          {/* <div className="w-[220px] h-[2px] mt-2 ml-[190px] bg-blue-700 "></div> */}
        </h1>
        <div className="flex justify-right text-center px-[50px]">
          <p className="text-lg font-medium py-4">
          Empowering businesses with data-driven solutions in Freight & Payments and Value-Added Services, backed by cutting-edge technology at Xdatalogix.
          </p>
        </div>
          <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 bg-blue-700 w-[200px] rounded-md font-bold my-6 mx-auto py-2 text-white'>Read More</button>
      </div>
    </div>
  );
};

export default AboutFirstSection;
