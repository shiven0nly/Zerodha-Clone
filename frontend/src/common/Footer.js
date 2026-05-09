import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-top bg-light">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-3">
            <Link to="/">
              <img
                src="/media/logo.svg"
                style={{ width: "50%" }}
                className="mb-3"
                alt="logo"
              />
            </Link>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              © 2010 - 2024, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col-3">
            <h5 className="mb-4 text-dark fs-6">Company</h5>
            <ul className="list-unstyled text-secondary" style={{ fontSize: "14px", lineHeight: "2.5" }}>
              <li><Link to="/about" className="text-decoration-none text-secondary">About</Link></li>
              <li><Link to="/product" className="text-decoration-none text-secondary">Products</Link></li>
              <li><Link to="/pricing" className="text-decoration-none text-secondary">Pricing</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Referral programme</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Careers</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Zerodha.tech</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Press & media</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Zerodha Cares (CSR)</Link></li>
            </ul>
          </div>
          <div className="col-3">
            <h5 className="mb-4 text-dark fs-6">Support</h5>
            <ul className="list-unstyled text-secondary" style={{ fontSize: "14px", lineHeight: "2.5" }}>
              <li><Link to="/support" className="text-decoration-none text-secondary">Contact us</Link></li>
              <li><Link to="/support" className="text-decoration-none text-secondary">Support portal</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Z-Connect blog</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">List of charges</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Downloads & resources</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Videos</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Market overview</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">How to file a complaint?</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Status of your complaints</Link></li>
            </ul>
          </div>
          <div className="col-3">
            <h5 className="mb-4 text-dark fs-6">Account</h5>
            <ul className="list-unstyled text-secondary" style={{ fontSize: "14px", lineHeight: "2.5" }}>
              <li><Link to="/signup" className="text-decoration-none text-secondary">Open an account</Link></li>
              <li><Link to="#" className="text-decoration-none text-secondary">Fund transfer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Broking Ltd. –
            SEBI Registration no.: IN-DP-431-2019 Commodity trading through
            Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address:​ Zerodha Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to{" "}
            <a href="mailto:complaints@zerodha.com" className="text-decoration-none">
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a href="mailto:depository@zerodha.com" className="text-decoration-none">
              depository@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in
            your bank account. As a business we don't give stock tips, and have
            not authorized anyone to trade on behalf of others. If you find
            anyone claiming to be part of Zerodha and offering such services,
            please create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
};
