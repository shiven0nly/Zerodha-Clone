import React from 'react'

export const HeroSection = () => {
  return (
    <div>
      <div className='container mt-5 text-center mb-5'>
        <div className='row mt-5 border-bottom justify-content-center pb-5'>
          <div><h2 className='text-center'>Brokerage charges</h2>
            <h3 className='text-muted text-center fs-5 mt-3'>Futures & Options (F&O), Intraday, Equity and Currency trades</h3>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-4 mt-3 p-'>
            <img src='media/pricingequity.svg' alt='equity-delivery' />
            <h3 className=''>Freee equity delivery</h3>
            <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className='col-4 mt-3'>
            <img src='media/intradayTrades.svg' alt='equity-intraday' />
            <h3>Intraday and F&O trades</h3>
            <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='col-4 mt-3'>
            <img src='media/pricingequity.svg' alt='equity-f&o' />
            <h3>Free direct MF</h3>
            <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
      <div className='charge-table container mt-5 mb-5'>
        <h3 className='text-center mt-5 mb-5'>Charges for account opening</h3>
        <table className='table table-borderless'>
          <thead className='border-bottom'>
            <tr>
              <th className='fs-5 pb-3'>Type of account</th>
              <th className='fs-5 pb-3'>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-bottom'>
              <td className='text-muted py-3'>Online account</td>
              <td className='text-muted py-3'>free</td>
            </tr>
            <tr className='border-bottom'>
              <td className='text-muted py-3'>Offline account</td>
              <td className='text-muted py-3'>free</td>
            </tr>
            <tr className='border-bottom'>
              <td className='text-muted py-3'>NRI account (offline only)</td>
              <td className='text-muted py-3'>₹ 500</td>
            </tr>
            <tr className='border-bottom'>
              <td className='text-muted py-3'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td className='text-muted py-3'>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='fs-5 mb-4'>Charges Explained</h3>
            <table className='table table-borderless text-muted' style={{ fontSize: '13px', lineHeight: '1.8' }}>
              <tbody>
                <tr>
                  <td style={{ width: '25%' }}><strong>Securities/Commodities transaction tax</strong></td>
                  <td>
                    Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                    <br />
                    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                  </td>
                </tr>
                <tr>
                  <td><strong>Transaction/Turnover Charges</strong></td>
                  <td>
                    Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                    <br />
                    BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                    <br />
                    BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                  </td>
                </tr>
                <tr>
                  <td><strong>Call & Trade</strong></td>
                  <td>
                    Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                  </td>
                </tr>
                <tr>
                  <td><strong>Stamp duty</strong></td>
                  <td>
                    Stamp duty is applicable on all buy orders at a uniform rate of 0.015% for delivery and 0.003% for intraday/F&O.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
