import React from 'react';
import { Link } from 'react-router-dom';

export const Education = () => {
  return (
     <div className='container mt-5'>
      <div className='row text-start'>
        <div className='col-6'>
          <img src="/media/education.svg" alt="education" style={{ width: '70%' }} />
        </div>
        <div className='col-6 mt-5 py-5'>
          <h1 className='fw-bold mb-4 fs-3'>Free stock market education</h1>
          <p className='my-4 text-muted'>
            Varsity, Zerodha’s education initiative, is open to everyone. It’s built to help you take informed decisions
            before you start investing. You can also choose to start small and learn as you earn.
          </p>
          <Link to='/product' className='text-decoration-none' style={{ color: '#0085ff' }}>Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
          <p className='mt-4 text-muted'>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <Link to='/support' className='text-decoration-none' style={{ color: '#0085ff' }}>TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
        </div>
      </div>
     </div>
  )
}
