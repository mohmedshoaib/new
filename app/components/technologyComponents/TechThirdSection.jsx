import React from 'react'

const TechThirdSection = () => {
  return (
    <div className='bg-[#fff] text-black flex xrm:flex-col'>
      
        <div className='max-w-[800px] my-[20px] ml-[55px] mr-[50px] px-4 w-full h-[75vh] text-center flex flex-col xrm:m-0 xrm:h-[70vh]'>
            <h1 className='text-3xl font-semibold text-left px-4 text-black py-6 xrm:text-xl xrm:text-center'>Freight Management<div className='w-[300px] h-[2px] mt-2 bg-blue-700 xrm:w-[210px] xrm:ml-[60px]'></div></h1>
            <h2 className='pl-3 pb-2 text-left text-large font-medium '>
                Our state-of-the-art technology offers comprehensive data analysis capabilities, providing valuable insights at your fingertips. Example reports include transportation spend by region, customer, and supplier, 
                lane-by-lane analysis, volume analysis, GL, and payment analysis, accessorial cost analysis, 
                and shipping pattern identification.</h2>
            <h3 className='pl-3 text-left text-large font-medium pb-2'>AP module: Audited invoice review, ensuring accuracy.</h3>   
            <h3 className='pl-3 text-left text-large font-medium pb-2'>Seamless ERP integration for efficient final payments.</h3> 
            <h3 className='pl-3 text-left text-large font-medium pb-2'>Flexible data transfer options: EDI, CSV, ERP formats.</h3> 
            <h3 className='pl-3 text-left text-large font-medium pb-2'>On-time payments foster improved carrier relationships.</h3>
            <h3 className='pl-3 text-left text-large font-medium pb-2'>Complete audit trail for streamlined financial audits.</h3>  
        </div>
        
        <div className='max-w-[510px] my-[20px] w-full h-[75vh] mr-[54px] bg-[url("/images/ti.avif")] rounded-tr-[50px] rounded-bl-[50px] shadow-2xl text-center flex flex-col justify-center xrm:w-[350px] xrm:h-[50vh] xrm:mx-auto xrm:mb-[40px]'>
        </div>
        
    </div>
  )
}

export default TechThirdSection
