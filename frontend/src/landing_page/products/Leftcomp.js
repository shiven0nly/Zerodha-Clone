import React from 'react'

export const Leftcomp = ({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src={imageURL} alt={productName} />
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration: "none"}}>Try demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft: "50px", textDecoration: "none"}}>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className='mt-3'>
            <a href={googlePlay}><img src='media/googlePlayBadge.svg' alt="Google Play Badge" /></a>
            <a href={appStore} style={{marginLeft: "20px"}}><img src='media/appstoreBadge.svg' alt="App Store Badge" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
