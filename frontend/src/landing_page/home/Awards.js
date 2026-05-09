import React from 'react'

export const Awards = () => {
  return (
    <div>
      <div className='container mt-5 mb-5'>
        <div className= 'row'>
          <div className='col-6 p-5'>
            <img src='media/largestBroker.svg' alt = "awards image" className='img-fluid mx-auto d-block px-4'>
          </img>
          </div>
          <div className = 'col-6 p-5'>
            <h1 className='mt-3'>Largest Stock Broker in India</h1>
            <p className = 'mb-5'>over 100 million clients, trading ₹16.90 lakh crore+ monthly</p>
            <div className='row'>
              <div className='col-6'>
              <ul>
              <li>
                <p>Futures and Options</p>
              </li>
              <li>
                <p>Commodities derivatives</p>
              </li>
              <li>
                <p>Currency derivatives</p>
              </li>
            </ul>
            </div>
            <div className = 'col-6'>
            <ul>
              <li>
                <p>Stocks & IPOs</p>
              </li>
              <li>
                <p>Direct Mutual funds</p>
              </li>
              <li>
                <p>Bonds and Govt. securities</p>
              </li>
            </ul>
            </div>
          </div>
          <img src='media/pressLogos.png' alt = "press logos" className='img-fluid mt-5 mx-auto d-block px-4'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

