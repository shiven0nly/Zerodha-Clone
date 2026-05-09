import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const OpenAccount = () => {
  const [cookies] = useCookies(['token']);
  const isLoggedIn = !!cookies.token;

  if (isLoggedIn) return null;

  return (
    <div className='container mt-5 p-5'>
        <h1 className="fw-medium text-center mb-3 mt-5">Open a Zerodha account</h1>
        <p className='text-center fs-5 mb-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <div className='text-center'>
          <Link to="/signup" className="btn btn-primary btn-lg text-center mb-5 mt-3" style={{width: "20%"}}>Sign up now</Link>
        </div>
    </div>
  )
}
