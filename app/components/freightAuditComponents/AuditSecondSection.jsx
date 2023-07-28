import React from "react";

const AuditSecondSection = () => {
  return (
    <div className="bg-[#fff] text-black flex xrm:flex-col">
      <div className="ml-[55px] mr-[54px] my-[20px] w-full h-[100vh] flex flex-col xrm:m-auto">
        <h1 className="text-4xl font-semibold text-center text-black py-6 xrm:text-3xl">
          Services
          <div className="w-[140px] h-[2px] ml-[550px] mt-2 bg-blue-700 xrm:ml-[135px] xrm:w-[125px]"></div>
        </h1>
        <div className='bg-[url("/images/Global-audit.avif")] bg-no-repeat bg-cover ml-10 mr-10 h-[80vh] my-5 rounded-xl xrm:w-[85vw] xrm:mx-auto'>
          <div className="flex">
            <div className="shadow-lg w-[40vw] h-[70vh] pt-[20px] ml-5 my-10 bg-white opacity-80 rounded-md xrm:w-[75vw]">
              <div className="text-left">
                <h1 className="font-semibold text-2xl mb-5 pl-5 xrm:text-lg">
                  Global Freight Audit
                </h1>
                <ul className="px-[20px] py-[10px]">
                  <div className="flex">
                    <li className="mx-30 text-left text-base font-medium xrm:text-sm">
                      ControlPay provides comprehensive Freight Audit services
                      via our unique web-based audit platform. Our services are
                      enhanced by deep logistics knowledge and can be
                      custom-tailored to the needs of multinational customers.
                      As such, we empower our clients’ operations on a global
                      scale. The web-based platform is supported by professional
                      auditor teams that work in close cooperation with your
                      Logistics and Finance departments.
                    </li>
                  </div>
                  <div className="flex my-2">
                    <li className="mx-30 text-left text-base font-medium xrm:text-sm">
                      ControlPay handles the most complex global logistics
                      structures on a daily basis. We assist our customers in
                      unparalleled control of freight costs and provide
                      crystal-clear visibility of logistical data.
                    </li>
                  </div>
                  <div className="flex my-2">
                    <li className="mx-30  text-left md:text-base msm:text-xs font-medium">
                      Ensuring Transparency for Clients.
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditSecondSection;
