import React from 'react'

const CareerThirdSection = () => {
  return (
    <div className="text-black flex xrm:flex-col">
      <div className="max-w-[600px] my-[20px] ml-[55px] w-full h-[87.5vh] flex flex-col text-center xrm:m-0 xrm:h-[70vh]">
        <div>
          <h1 className="text-3xl font-medium uppercase pl-[30px] text-left xrm:text-center xrm:mt-10">
            Apply Now{" "}
            <div className="w-[175px] h-[2px] mt-2 ml-[0px] bg-blue-700 xrm:ml-[95px]"></div>
          </h1>
        </div>
        <div className="mt-[30px] pl-[30px] text-left">
          <h1 className="text-xl font-medium">Application Form</h1>
        </div>
        <div className="flex rounded-md">
          <div className="w-[40vw] h-[60vh] pt-[0px] m-5 text-left px-[10px] xrm:w-[90vw] xrm:h-[50vh]">
            <div className="flex-col ">
              <h1 className="text-sm font-semibold my-2">
                Full Name <span className="text-red-500">*</span>
              </h1>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Full Name"
                required
              ></input>
            </div>
            <div className="flex-col ">
              <h1 className="text-sm font-semibold my-2">
                Email <span className="text-red-500">*</span>
              </h1>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="flex-col ">
              <h1 className="text-sm font-semibold my-2">
                Phone <span className="text-red-500">*</span>
              </h1>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone No"
                required
              ></input>
            </div>
            <div className="flex-col ">
              <h1 className="text-sm font-semibold my-2">
                Resume <span className="text-red-500">*</span>
              </h1>
              <input
                type="file"
                accept=".doc, .docx, .pdf"
                id="resume"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company Name"
                required
              ></input>
            </div>
            <button className="w-[30%] h-[35px] mt-[20px] rounded-md text-white text-lg font-semibold bg-blue-500 hover:scale-110 duration-200 ease-in-out">Submit</button>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] my-[20px] mr-[54px] w-full h-[87.7vh] bg-[url('/images/Career-Third-Section.webp')] bg-no-repeat bg-cover flex rounded-lg xrm:h-[50vh] xrm:w-[90%] xrm:mx-auto">
        
      </div>
    </div>
  )
}

export default CareerThirdSection
