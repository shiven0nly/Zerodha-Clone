import React from 'react';
import { Link } from 'react-router-dom';

export const Stats = () => {
  return (
    <div className='container mt-3 mb-5'>
      <h2 className='mx-5 px-5'>Trust with Confidence</h2>
      <div className='row'>
        <div className='col-6 mt-4 px-5'>
          <div className='d-flex flex-row mx-5'>
            <ul className='text-decoration-none list-unstyled mx-3'>
              <li className='mb-5'>
                <h4>Customer-first always</h4>
                <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
              </li>
              <li className='mb-5'>
                <h4>No spam or gimmicks</h4>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <Link to='/about' className='text-decoration-none' style={{ color: '#0085ff' }}>Our philosophies <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
              </li>
              <li className='mb-5'>
                <h4>The Zerodha universe</h4>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              </li>
              <li className='mb-5'>
                <h4>Do better with money</h4>
                <p>With initiatives like <Link to='/support' className='text-decoration-none' style={{ color: '#0085ff' }}>Nudge</Link> and <Link to='/support' className='text-decoration-none' style={{ color: '#0085ff' }}>Kill Switch</Link>, we don't just facilitate transactions, but actively help you do better with your money.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-6 items-center'>
          <img className='ms-4' src='/media/ecosystem.png' alt='ecosystem' width={'90%'}></img>
          <div className='row text-center mt-3'>
            <div className='col-6'><Link to='/product' className='text-decoration-none' style={{ color: '#0085ff' }}>Explore Our Products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
            <div className='col-6'><Link to='#' className='text-decoration-none' style={{ color: '#0085ff' }}>Try Kite Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}
