import React from 'react'

export const Brokerage = () => {
  return (
    <div className='container p-5 m-5 border-top'>
      <div className='row text-center'>
        <div className='col-8 p-4 border-end'>
          <a href='' target='_blank' style={{textDecoration: "none"}}><h3 className='fs-5 text-primary'>Brokerage calculator</h3></a>
          <ul className='text-muted text-start lh-0.5 mt-3 d-flex flex-column gap-2' style={{fontSize: "0.85rem"}}>
            <li>Call & Trade and RMS auto-square-off charges: Additional charges of 50 + GST per order.</li>
            <li>DIgital contract notes will be sent via email.</li>
            <li>Physical copies of contract notes, if required, shall be charged 30 per contract note. Courier charges may apply.</li>
            <li>FOR NRI account (non-PIS), 0.5% or 100 per executed order for equity (whichever is lower)</li>
            <li>FOR NRI account (PIS), 0.5% or 200 per executed order for equity (whichever is lower)</li>
            <li>If the account is in debit balance , any order placed will be charged 40 per executed order. This will be in addition to the STT, transaction charges and any other charges/levies as applicable</li>
          </ul>
        </div>
        <div className='col-4 p-4'>
          <a href='' target='_blank' style={{textDecoration: "none"}}><h3 className='fs-5 text-primary'>List of charges</h3></a>
        </div>
      </div>
    </div>
  )
}
