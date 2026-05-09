import React from 'react'

export const Team = () => {
  return (
    <section className="container mb-5">
      <div className="container">
        <h2 className="text-center mt-5 mb-5">People</h2>
        <div className="row justify-content-between align-items-center ceo-container">
          <div className="col-5 text-center">
            <img className="founder-image rounded-circle" src="media/nithinkamath.jpg" alt="Nithin Kamath, CEO" style={{ width: "80%" }} />
            <h5 className="mt-4">Nithin Kamath</h5>
            <p className="text-muted">Founder, CEO</p>
          </div>
          <div className="col-7">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader.
              Today, Zerodha has changed the landscape of the Indian broking
              industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on
              <a target="_blank" rel="noreferrer" href="https://nithinkamath.me/" title="Homepage" className="text-decoration-none"> Homepage</a> /
              <a target="_blank" rel="noreferrer" href="https://tradingqna.com/u/nithin/summary" title="TradingQnA" className="text-decoration-none"> TradingQnA</a> /
              <a target="_blank" rel="noreferrer" href="https://twitter.com/Nithin0dha" className="text-decoration-none"> Twitter</a>
            </p>
          </div>
        </div>
      </div>
      {/* people team members */}
      <div className="container mt-5">
        <div className="row justify-content-between mt-5">
          <div className="col-4 team-container text-center p-4">
            <img className="team-members-image rounded-circle mb-3" src="media/" alt="Nikhil Kamath, Chief Investment Officer" style={{ width: "70%" }} />
            <h5>Nikhil Kamath</h5>
            <p className="text-muted">Co-founder & CFO</p>
            <p className="text-muted show-bio">
              <a href="/" className="text-decoration-none">Bio <i className="fa-solid fa-angle-down"></i></a>
            </p>
            <div className="team-featured-desc text-start">
              <p>
                Nikhil is an astute and experienced investor, and he
                heads financial planning at Zerodha. An avid
                reader, he always appreciates a good game of chess.
              </p>
            </div>
          </div>
          <div className="col-4 team-container text-center p-4">
            <img className="team-members-image rounded-circle mb-3" src="/static/images/Kailash.jpg" alt="Dr. Kailash Nadh, CTO" style={{ width: "70%" }} />
            <h5>Dr. Kailash Nadh</h5>
            <p className="text-muted">CTO</p>
            <p className="text-muted show-bio">
              <a href="/" className="text-decoration-none">Bio <i className="fa-solid fa-angle-down"></i></a>
            </p>
            <div className="team-featured-desc text-start">
              <p>
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics, and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </p>
            </div>
          </div>
          <div className="col-4 team-container text-center p-4">
            <img className="team-members-image rounded-circle mb-3" src="/static/images/Venu.jpg" alt="Venu Madhav, Chief of Operations" style={{ width: "70%" }} />
            <h5>Venu Madhav</h5>
            <p className="text-muted">COO</p>
            <p className="text-muted show-bio">
              <a href="/" className="text-decoration-none">Bio <i className="fa-solid fa-angle-down"></i></a>
            </p>
            <div className="team-featured-desc text-start">
              <p>
                Venu is the backbone of Zerodha taking care of operations and
                ensuring that we are compliant to rules and regulations. He
                has over a dozen certifications in financial markets and is
                also proficient in technical analysis. Workouts, cycling, and
                adventuring is what he does outside of Zerodha.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-4 team-container text-center p-4">
            <img className="team-members-image rounded-circle mb-3" src="/static/images/Seema.jpg" alt="Seema Patil, Director" style={{ width: "70%" }} />
            <h5>Seema Patil</h5>
            <p className="text-muted">Director</p>
            <p className="text-muted show-bio">
              <a href="/" className="text-decoration-none">Bio <i className="fa-solid fa-angle-down"></i></a>
            </p>
            <div className="team-featured-desc text-start">
              <p>
                Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an
                extremely disciplined fitness enthusiast.
              </p>
            </div>
          </div>
          <div className="col-4 team-container text-center p-4">
            <img className="team-members-image rounded-circle mb-3" src="/static/images/karthik.jpg" alt="Karthik Rangappa, Chief of Education" style={{ width: "70%" }} />
            <h5>Karthik Rangappa</h5>
            <p className="text-muted">Chief of Education</p>
            <p className="text-muted show-bio">
              <a href="/" className="text-decoration-none">Bio <i className="fa-solid fa-angle-down"></i></a>
            </p>
            <div className="team-featured-desc text-start">
              <p>
                Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
              </p>
            </div>
          </div>
          <div className="col-4 team-container text-center p-4">
            <img className="team-members-image rounded-circle mb-3" src="/static/images/Austin.jpg" alt="" style={{ width: "70%" }} />
            <h5>Austin Prakesh</h5>
            <p className="text-muted">Director Strategy</p>
            <p className="text-muted show-bio">
              <a href="/" className="text-decoration-none">Bio <i className="fa-solid fa-angle-down"></i></a>
            </p>
            <div className="team-featured-desc text-start">
              <p>
                Austin is a successful self-made entrepreneur from Singapore.
                His area of specialty revolves around helping organisations
                including grow by optimizing revenue streams and creating
                growth strategies. He is a boxing enthusiast and loves
                collecting exquisite watches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


