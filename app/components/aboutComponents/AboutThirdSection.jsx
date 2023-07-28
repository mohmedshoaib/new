"use client";
import React, { useState } from "react";
import Image from "next/image";
const AboutThirdSection = () => {
  const [type, setType] = useState("Mission");
  const changeContent = (args) => {
    setType(args);
  };
  return (
    <div className="bg-[#fff] text-black flex xrm:flex-col">
      <div className="max-w-[1240px] my-[20px] ml-[55px] mr-[50px] px-4 w-full h-[100vh] text-center flex flex-col xrm:m-0 xrm:h-[130vh]">
        <div className="flex justify-center mb-10 mt-10">
          <button
            onClick={() => changeContent("Mission")}
            className="text-xl font-semibold hover:text-blue-600 hover:scale-110 duration-100 mx-5"
          >
            Mission
          </button>
          <button
            onClick={() => changeContent("History")}
            className="text-xl font-semibold hover:text-blue-600 hover:scale-110 duration-100 mx-5"
          >
            History
          </button>
          <button
            onClick={() => changeContent("Vision")}
            className="text-xl font-semibold hover:text-blue-600 hover:scale-110 duration-100 mx-5"
          >
            Vision
          </button>
        </div>
        <div>
          <div className="bg-[#f8f8f8] text-black flex ed:flex-col rounded-lg">
            <div className="max-w-[800px] my-[20px] ml-[55px] mr-[50px] px-4 w-full h-[70vh] text-center flex flex-col xrm:m-0 xrm:h-[70vh]">
              {type === "Mission" ? (
                <h1 className="text-3xl font-semibold text-left px-4 text-black py-6 xrm:text-center">
                  Mission
                  <div className='w-[108px] h-[2px] mt-2 bg-blue-700 xrm:ml-[95px]'></div>
                </h1>
              ) : type === "History" ? (
                <h1 className="text-3xl font-semibold text-left px-4 text-black py-6 xrm:text-center">
                  History
                  <div className='w-[100px] h-[2px] mt-2 bg-blue-700 xrm:ml-[95px]'></div>
                </h1>
              ) : (
                <h1 className="text-3xl font-semibold text-left px-4 text-black py-6 xrm:text-center">
                  Vision
                  <div className='w-[85px] h-[2px] mt-2 bg-blue-700 xrm:ml-[107px]'></div>
                </h1>
              )}

              {type === "Mission" ? (
                <h2 className="text-lg font-medium text-left px-4 text-black py-6 xrm:m-0">
                  Our mission is to provide the highest quality data processing,
                  audit, and software consulting services exclusively tailored
                  for the transportation and logistics industry. We are
                  dedicated to empowering our clients by developing and
                  implementing advanced technology solutions that optimize their
                  business processes and fuel growth in their core areas. With
                  an eye on expanding our horizons, we actively seek
                  opportunities to leverage our expertise in diverse market
                  sectors.
                </h2>
              ) : type === "History" ? (
                <h2 className="text-lg font-medium text-left px-4 text-black py-6 xrm:m-0">
                  Founded in 2009, XDataLogix Solutions has become a trusted
                  provider of top-quality data processing, auditing, and
                  software consulting services. We cater to Fortune 500
                  companies directly and through strategic partnerships, working
                  closely with clients to understand their needs and deliver
                  efficient solutions. Empowering businesses with cutting-edge
                  technology, we enable clients to make informed decisions, take
                  control of their operations, and achieve lasting success.
                </h2>
              ) : (
                <h2 className="text-lg font-medium text-left px-4 text-black py-6 xrm:m-0">
                  Our vision is to be the preferred and trusted partner for
                  Consultants and Service providers in need of comprehensive
                  back-office solutions. We strive to foster direct
                  relationships with clients, serving as strategic partners in
                  their growth plans, and paving the way for their success. As
                  leaders in technology for the transportation and logistics
                  industry, we aim to continuously innovate and revolutionize
                  the sector, staying ahead of the curve with cutting-edge
                  advancements.
                </h2>
              )}
            </div>
            {type === "Mission" ? (
              <div className='max-w-[510px] my-[20px] w-full h-[70vh] mr-[54px] bg-[url("/images/About-Mission-image.webp")] bg-no-repeat bg-cover rounded-tr-[50px] rounded-bl-[50px] shadow-2xl text-center flex flex-col justify-center xrm:w-[350px] xrm:h-[300px] xrm:mx-auto'></div>
            ) : type === "History" ? (
              <div className='max-w-[510px] my-[20px] w-full h-[70vh] mr-[54px] bg-[url("/images/historyimage.jpg")] bg-no-repeat bg-cover rounded-tr-[50px] rounded-bl-[50px] shadow-2xl text-center flex flex-col justify-center xrm:w-[350px] xrm:h-[300px] xrm:mx-auto'></div>
            ) : (
              <div className='max-w-[510px] my-[20px] w-full h-[70vh] mr-[54px] bg-[url("/images/About-Vision-image.png")] bg-no-repeat bg-cover rounded-tr-[50px] rounded-bl-[50px] shadow-2xl text-center flex flex-col justify-center xrm:w-[350px] xrm:h-[300px] xrm:mx-auto'></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThirdSection;
