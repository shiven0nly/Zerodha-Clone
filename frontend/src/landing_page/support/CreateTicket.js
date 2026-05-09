import React from 'react'

export const CreateTicket = () => {
  return (
    <>
    <div className='container'>
      <div className='row p-5 mt-5 mb-5'>
        <h1 className=''>TO create a ticket, select a relevant topic</h1>
    </div>
    <div className='row justify-content-between p-5'>
      <div className='col-4 p-3'>
        <h4 className=''><i class='fa fa-plus-circle me-2' aria-hidden='true'></i>Account opening</h4>
        <ul className='list-unstyled'>
          <li className='text-primary mt-3'>Online Account opening</li>
          <li className='text-primary mt-3'>Online Account Opening Status</li>
          <li className='text-primary mt-3'>Company, Partnership and HUF account</li>
          <li className='text-primary mt-3'>NRI Account Opening</li>
          <li className='text-primary mt-3'>Charges at Zerodha</li>
          <li className='text-primary mt-3'>Zerodha IDFC First Bank 3-in-1 Account</li>
          <li className='text-primary mt-3'>Getting Started</li>
        </ul>
      </div>
      <div className='col-4 p-3'>
        <h4 className=''><i class='fa fa-user me-2' aria-hidden='true'></i>Your Zerodha Account</h4>
        <ul className='list-unstyled'>
          <li className='text-primary mt-3'>Login Credentials</li>
          <li className='text-primary mt-3'>Account Modification and Segment Addition</li>
          <li className='text-primary mt-3'>DP ID and Bank details</li>
          <li className='text-primary mt-3'>Your Profile</li>
          <li className='text-primary mt-3'>Transfer and conversion of shares</li>
        </ul>
      </div>
      <div className='col-4 p-3'>
        <h4 className=''><i class='fa fa-exchange me-2' aria-hidden='true'></i>Trading and demat account</h4>
        <ul className='list-unstyled'>
          <li className='text-primary mt-3'>Margin/leverage, Product and Ordr types</li>
          <li className='text-primary mt-3'>Kite Web and Mobile</li>
          <li className='text-primary mt-3'>Trading FAQs</li>
          <li className='text-primary mt-3'>Corporate Actions</li>
          <li className='text-primary mt-3'>Sentinel</li>
          <li className='text-primary mt-3'>Kite API</li>
          <li className='text-primary mt-3'>Pi and other platform</li>
          <li className='text-primary mt-3'>Stockreports+</li>
          <li className='text-primary mt-3'>GTT</li>
        </ul>
      </div>
    </div>
    </div>
    </>
  )
}
