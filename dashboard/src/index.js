import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './components/Home';
import { CookiesProvider, useCookies } from 'react-cookie';

const AuthWrapper = () => {
  const [cookies] = useCookies(['token']);
  if (!cookies.token) {
    window.location.href = "http://localhost:3000/signup";
    return null;
  }
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <CssBaseline />
        <AuthWrapper />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
