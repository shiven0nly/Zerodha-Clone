import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { CookiesProvider } from 'react-cookie';

import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/signup';
import Login from './landing_page/signup/login';
import AboutPage from './landing_page/about/AboutPage';
import { ProductsPage } from './landing_page/products/ProductsPage';
import { PricingPage } from './landing_page/pricing/PricingPage';
import { SupportPage } from './landing_page/support/SupportPage';

import Navbar from './common/Navbar';
import { Footer } from './common/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <UserProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
    </CookiesProvider>
  </React.StrictMode>
);
