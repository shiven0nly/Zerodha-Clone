import React from 'react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-4'>
        <h3 className='fs-4 fw-bolder mb-3'>Unbeatable Pricing</h3>
        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <p><Link to='/pricing' className='text-decoration-none' style={{ color: '#0085ff' }}>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
        </div>
        <div className='col-2'>
          
        </div>
       <div className='col-6'>
        <div className='row text-center'>
          <div className='col-6 border p-3 rounded-start-4'>
            <h1 className='mb-3'>₹0</h1>
            <p className='text-muted'>Free equity investments and direct mutual funds</p>
          </div>
          <div className='col-6 border p-3 rounded-end-4'>
            <h1 className='mb-3'>₹20</h1>
            <p className='text-muted'>Intraday and F&O trades</p>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}
