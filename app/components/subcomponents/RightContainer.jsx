import React from 'react'

const RightContainer = () => {
  return (
    <div className='flex h-full mr-[20px] text-white xrm:h-[60vh]'>
        <div className='max-w-[300px] my-[35px] mr-4 w-full xrm:h-[50vh] xrm:ml-1'>
          <div className='transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105 duration-200 h-[37.7vh] bg-[#F4ABC4] mb-3 rounded-xl pt-12 xrm:ml-4 xrm:w-[43vw] xrm:h-[23vh]'>
            <div>
              <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold xrm:text-3xl'>20%</h1>
              <h1 className='md:text-xl sm:text-3xl text-2xl font-semibold xrm:text-lg xrm:px-1'>of Fortune 50 companies</h1>
            </div>
            {/* <h2>20%<span>of Fortune 50 companies</span></h2> */}
          </div>
          <div className='transition ease-in-out delay-100 hover:translate-y-2 hover:scale-105 duration-200 h-[37.7vh] bg-[#595B83] rounded-xl pt-12 xrm:ml-4 xrm:w-[43vw] xrm:h-[23vh]'>
            <div>
              <h1 className='text-xl font-semibold xrm:text-lg xrm:mt-[0px] xrm:px-1'>Audit & Analysis:</h1>
              <h1 className='text-7xl font-bold xrm:text-3xl'>100%</h1>
              <h1 className='text-xl font-semibold xrm:text-lg xrm:px-1'>of out business</h1>
            </div>
            {/* <h2>Audit & Analysis:<span>100%</span> of out business</h2> */}
          </div>
        </div>
        <div className='max-w-[300px] my-[65px] w-full xrm:h-[50vh] xrm:mr-1'>
          <div className='transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105 duration-200 h-[37.7vh] bg-[#333456] mb-3 rounded-xl pt-12 xrm:mr-4 xrm:w-[43vw] xrm:h-[23vh]'>
            <div>
              <h1 className='text-7xl font-bold xrm:text-3xl xrm:mt-[-10px]'>1.1 M+</h1>
              <h1 className='text-xl font-semibold xrm:text-lg xrm:px-1'>shipments audited in</h1>
              <h1 className='text-xl font-semibold xrm:text-lg xrm:px-1'>2022</h1>
            </div>
            {/* <h2>1.1 M+<span>shipments audited</span></h2> */}
          </div>
          <div className='transition ease-in-out delay-100 hover:translate-y-2 hover:scale-105 duration-200 h-[37.7vh] bg-[#03506F] rounded-xl pt-12 xrm:mr-4 xrm:w-[43vw] xrm:h-[23vh]'>
            <div>
              <h1 className='text-7xl font-bold xrm:text-3xl xrm:mt-[0px]'>13</h1>
              <h1 className='text-xl font-semibold xrm:text-lg xrm:px-1'>Years</h1>
              <h1 className='text-xl font-semibold xrm:text-lg xrm:px-1'>in business</h1>
            </div>
            {/* <h2 className='text-2xl font-bold'>13<span>Years</span></h2> */}
          </div>
        </div>
    </div>
  )
}

export default RightContainer
