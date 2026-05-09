import React from 'react'

export const HeroSection = () => {
  return (
    <div className='container-fluid bg-primary w-100'>
      <div className='row justify-content-around align-items-center mx-5'>
       <div className='col-6 text-white fs-2 mt-5'>Support Portal</div>
       <div className='col-6 text-white fs-5 mt-5'>Track Tickets</div>
      </div>

      <div className='row justify-content-center align-items-center mt-5 mx-5'>
            <div className='col-6 text-white fs-4'><h5>Search for an answer or browse help topics</h5>
            <textarea className='fs-6 px-2' placeholder='Search here...' style={{borderRadius: '10px', width: '40%'}}></textarea>
            <div className='mt-3'><p className='fs-6 text-white'><a href='/' className='text-white' >Track account opening</a></p></div>
            <div><p className='fs-6 text-white'><a href='/' className='text-white' >Track segment activation</a></p></div>
            <div><p className='fs-6 text-white'><a href='/' className='text-white' >Intraday</a></p></div>
            <div><p className='fs-6 text-white'><a href='/' className='text-white' >margins</a></p></div>
            <div><p className='fs-6 text-white'><a href='/' className='text-white' >Kite user manual</a></p></div>
            </div>

            <div className='col-6 text-white fs-4 mb-5'><h5>Featured</h5>
            <div className='mt-3 fs-6'>1.<a href='/' className='text-white'>Current Takeovers and Delisting - January 2024</a></div>
            <div className='mt-2 fs-6'>2.<a href='/' className='text-white'>Latest Intraday leverages - MIS & CO</a></div>
            </div>
        </div>
       </div>
  )
}
