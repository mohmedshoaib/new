import React from "react";
import Image from "next/image";
const CareerFirstSection = () => {
  return (
    <div className="text-black flex xrm:flex-col">
      <div className="max-w-[600px] my-[20px] ml-[55px] mr-10 w-full h-[80vh] flex flex-col justify-center xrm:m-0 xrm:pt-10 xrm:h-[45vh] xrm:justify-start">
        <Image
          src="/images/Career-First-Section-image.jpg"
          alt="Right Section Image"
          className="w-[600px] h-[100%] shadow-sm rounded-tl-[50px] rounded-br-[50px]  xrm:w-[300px] xrm:h-[300px] xrm:mx-auto"
          width={700}
          height={500}
          priority
        />
        {/* <h1>Left Image</h1> */}
      </div>

      <div className="max-w-[700px] my-[20px] mr-[54px] w-full h-[80vh] text-center flex flex-col justify-center xrm:justify-start xrm:h-[40vh]">
        <h1 className="text-5xl font-bold px-[100px] py-6 ">
          Join Us
          {/* <div className="w-[170px] h-[2px] mt-2 ml-[115px] bg-blue-700 "></div> */}
        </h1>
        <div className="flex justify-center px-[100px] xrm:px-[60px]">
          <p className="text-lg font-medium py-4">
          Join us at Xdatalogix and be a driving force in industry transformation through powerful technology. Embrace innovation, impact the future, and contribute to our dynamic team's success.
          </p>
        </div>
        {/* <button className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-700 w-[200px] rounded-md font-bold my-5 mx-auto py-2 text-white">
          Get in Touch
        </button> */}
      </div>
    </div>
  );
};

export default CareerFirstSection;
