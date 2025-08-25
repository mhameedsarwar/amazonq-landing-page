import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './TopBar.css';

const TopBar = ({ currency, setCurrency, showCurrencyInNav }) => {
  
  const currencyFlags = {
    USD: 'https://flagcdn.com/w20/us.png',
    EUR: 'https://flagcdn.com/w20/eu.png', 
    GBP: 'https://flagcdn.com/w20/gb.png'
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="bg-dark text-white py-2">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <div></div>
          <div className="d-flex align-items-center">
            <span className="small text-white me-3 d-none d-md-inline">Get early access on launches and offers</span>
            <a href="#" className="small text-white text-decoration-underline">Sign Up For Texts</a>
          </div>
          <div className={`d-flex align-items-center ${showCurrencyInNav ? 'd-none' : ''}`}>
            <img src={currencyFlags[currency]} alt={currency} className="me-2" width="20" height="15" />
            <select className="form-select form-select-sm text-white border-0 TopBar-currencySelect" value={currency} onChange={handleCurrencyChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;