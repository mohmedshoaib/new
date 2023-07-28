import React from "react";

const ContactFirstSection = () => {
  return (
    <div className="text-black flex xrm:flex-col">
      <div className="max-w-[600px] my-[20px] ml-[55px] w-full h-[87.5vh] flex flex-col text-center xrm:m-0 xrm:h-[65vh]">
        <div>
          <h1 className="text-3xl font-medium uppercase pl-[30px] text-left xrm:mt-10 xrm:text-2xl xrm:text-center">
            Get In Touch With Us{" "}
            <div className="w-[350px] h-[2px] mt-2 ml-[0px] bg-blue-700 xrm:ml-[45px] xrm:w-[275px]"></div>
          </h1>
        </div>
        <div className="mt-[30px] pl-[30px] text-left ">
          <h1 className="text-xl font-medium">Contact Form</h1>
        </div>
        <div className="flex rounded-md xrm:h-[50vh]">
          <div className="w-[40vw] h-[60vh] pt-[0px] m-5 text-left px-[10px] xrm:w-[90vw] xrm:h-[45vh]">
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
                Company <span className="text-red-500">*</span>
              </h1>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company Name"
                required
              ></input>
            </div>
            <button className="w-[30%] h-[35px] mt-[20px] rounded-md text-white text-lg font-semibold bg-blue-500 hover:scale-110 duration-200 ease-in-out xrm:ml-[100px] xrm:w-[40%]">Submit</button>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] my-[20px] mr-[54px] w-full h-[87.7vh] text-center flex flex-col justify-center rounded-lg xrm:justify-start xrm:h-[56.6vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.9104852705873!2d72.99210647205825!3d21.628411523121162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023f196b44299%3A0x52bd854dbb48ed02!2sIGNITE%20DATA%20LABS!5e0!3m2!1sen!2sin!4v1690198505283!5m2!1sen!2sin"
          width="650"
          height="480"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-tr-lg rounded-br-lg xrm:w-[90vw] xrm:mx-auto"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactFirstSection;
