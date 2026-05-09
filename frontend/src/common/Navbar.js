import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useCookies } from 'react-cookie';

function Navbar() {
  const { logout } = useContext(UserContext);
  const [cookies] = useCookies(['token']);
  const isLoggedIn = !!cookies.token;

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container px-5 py-2">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active text-secondary" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-secondary" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : null}
            <li className="nav-item">
              <Link className="nav-link active text-secondary" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-secondary" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-secondary" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-secondary" to="/support">
                Support
              </Link>
            </li>
            
            {isLoggedIn && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-secondary" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-circle-user fs-4"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://zerodha-dashboard-woad.vercel.app" target="_blank" rel="noopener noreferrer">
                      Dashboard
                    </a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
