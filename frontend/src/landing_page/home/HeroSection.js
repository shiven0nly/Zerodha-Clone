import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const HeroSection = () => {
  const [cookies] = useCookies(['token']);
  const isLoggedIn = !!cookies.token;

  return (
    <div className='container'>
      <div className= 'row text-center'>
        <img style={{width: "70%"}} src='/media/homeHero.png' alt = "home hero image" className='img-fluid mx-auto d-block px-4 mb-5' />
      </div>
      <h1 className="fw-bolder text-center mt-5">Invest in Everything</h1>
      <p className='text-center fs-5 mb-4'>Online platform to invest in stocks, mutual funds and more.</p>
      {!isLoggedIn && (
        <div className='text-center'>
          <Link to="/signup" className="btn btn-primary btn-lg text-center mb-5" style={{width: "20%"}}>Sign up now</Link>
        </div>
      )}
    </div>
  )
}
