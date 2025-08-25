import React, { useState, useMemo } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SearchModal from './SearchModal';
import UserDropdown from './UserDropdown';
import './Navbar.css';

const currencyFlags = {
  USD: 'https://flagcdn.com/w20/us.png',
  EUR: 'https://flagcdn.com/w20/eu.png', 
  GBP: 'https://flagcdn.com/w20/gb.png'
};

const NavigationBar = ({ currency, setCurrency, showCurrencyInNav }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [imageError, setImageError] = useState({});
  const [expandedSection, setExpandedSection] = useState(null);

  const [showSearch, setShowSearch] = useState(false);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleImageError = (currencyCode) => {
    setImageError(prev => ({ ...prev, [currencyCode]: true }));
  };

  const getFlagSrc = (currencyCode) => {
    return imageError[currencyCode] ? null : currencyFlags[currencyCode];
  };

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);



  return (
    <div className="position-relative">
      <Navbar className="bg-white border-bottom shadow-sm" variant="light">
        <Container>
        <Navbar.Brand href="/" className="fw-bold position-absolute start-50 translate-middle-x d-none d-lg-block">
          Everlane
        </Navbar.Brand>
        <Navbar.Brand href="/" className="fw-bold d-lg-none">
          Everlane
        </Navbar.Brand>

        <div className="d-flex align-items-center d-lg-none">
          <button 
            className="btn btn-outline-light border-0 text-dark me-2"
            onClick={() => setShowSearch(true)}
            aria-label="Search"
          >
            <i className="fas fa-search fs-5"></i>
          </button>
          <UserDropdown />
          <button className="btn btn-outline-light border-0 text-dark me-2">
            <i className="fas fa-shopping-cart fs-5"></i>
          </button>
          {showCurrencyInNav && (
            <div className="d-flex align-items-center me-2">
              {getFlagSrc(currency) && (
                <img 
                  src={getFlagSrc(currency)} 
                  alt={`${currency} flag`} 
                  className="me-1" 
                  width="16" 
                  height="12"
                  onError={() => handleImageError(currency)}
                />
              )}
              <select 
                className="form-select form-select-sm text-dark border-1 Navbar-currencySelect-mobile" 
                value={currency} 
                onChange={handleCurrencyChange}
                aria-label="Select currency"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          )}
          <button className="btn btn-outline-light border-0 text-dark" onClick={handleShow}>
            <i className="fas fa-bars fs-5"></i>
          </button>
        </div>

        <div className="d-none d-lg-flex align-items-center">
          <div className="nav-item-with-mega women-nav">
            <a href="#" className="nav-link text-dark me-3">
              Women
            </a>
            <div className="mega-menu-dropdown women-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="mega-menu-section-title">HIGHLIGHTS</h6>
                    <ul className="mega-menu-items">
                      <li><a href="#" className="mega-menu-link">Shop All New Arrivals</a></li>
                      <li><a href="#" className="mega-menu-link">The Gift Guide</a></li>
                      <li><a href="#" className="mega-menu-link">New Bottoms</a></li>
                      <li><a href="#" className="mega-menu-link">New Tops</a></li>
                      <li><a href="#" className="mega-menu-link">T-shirt Bundles</a></li>
                      <li><a href="#" className="mega-menu-link">Under $100</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h6 className="mega-menu-section-title">FEATURED SHOPS</h6>
                    <ul className="mega-menu-items">
                      <li><a href="#" className="mega-menu-link">The Holiday Outfit Edit</a></li>
                      <li><a href="#" className="mega-menu-link">Giftable Sweaters</a></li>
                      <li><a href="#" className="mega-menu-link">Uniform & Capsule</a></li>
                      <li><a href="#" className="mega-menu-link">The Performance Chino Shop</a></li>
                      <li><a href="#" className="mega-menu-link">Top Rated Men's Clothing</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <div className="mega-menu-featured-card">
                      <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=250&h=200&fit=crop" alt="The Holiday Outfit Edit" className="mega-menu-card-image" />
                      <div className="mega-menu-card-content">
                        <h6>The Holiday Outfit Edit</h6>
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mega-menu-featured-card">
                      <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=250&h=200&fit=crop" alt="Giftable Sweaters" className="mega-menu-card-image" />
                      <div className="mega-menu-card-content">
                        <h6>Giftable Sweaters</h6>
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="nav-item-with-mega men-nav">
            <a href="#" className="nav-link text-dark me-3">
              Men
            </a>
            <div className="mega-menu-dropdown men-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="mega-menu-section-title">HIGHLIGHTS</h6>
                    <ul className="mega-menu-items">
                      <li><a href="#" className="mega-menu-link">Shop All New Arrivals</a></li>
                      <li><a href="#" className="mega-menu-link">The Gift Guide</a></li>
                      <li><a href="#" className="mega-menu-link">New Bottoms</a></li>
                      <li><a href="#" className="mega-menu-link">New Tops</a></li>
                      <li><a href="#" className="mega-menu-link">T-shirt Bundles</a></li>
                      <li><a href="#" className="mega-menu-link">Under $100</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h6 className="mega-menu-section-title">FEATURED SHOPS</h6>
                    <ul className="mega-menu-items">
                      <li><a href="#" className="mega-menu-link">The Holiday Outfit Edit</a></li>
                      <li><a href="#" className="mega-menu-link">Giftable Sweaters</a></li>
                      <li><a href="#" className="mega-menu-link">Uniform & Capsule</a></li>
                      <li><a href="#" className="mega-menu-link">The Performance Chino Shop</a></li>
                      <li><a href="#" className="mega-menu-link">Top Rated Men's Clothing</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <div className="mega-menu-featured-card">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=200&fit=crop" alt="The Holiday Outfit Edit" className="mega-menu-card-image" />
                      <div className="mega-menu-card-content">
                        <h6>The Holiday Outfit Edit</h6>
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mega-menu-featured-card">
                      <img src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=250&h=200&fit=crop" alt="Giftable Sweaters" className="mega-menu-card-image" />
                      <div className="mega-menu-card-content">
                        <h6>Giftable Sweaters</h6>
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <a href="#" className="nav-link text-dark me-3">About</a>
          <a href="#" className="nav-link text-dark">Everworld Stories</a>
        </div>

        <div className="d-none d-lg-flex align-items-center ms-auto">
          <button 
            className="btn btn-outline-light border-0 text-dark me-2"
            onClick={() => setShowSearch(true)}
            aria-label="Search"
          >
            <i className="fas fa-search fs-5"></i>
          </button>
          <UserDropdown />
          <button className="btn btn-outline-light border-0 text-dark me-2">
            <i className="fas fa-shopping-cart fs-5"></i>
          </button>
          {showCurrencyInNav && (
            <div className="d-flex align-items-center">
              {getFlagSrc(currency) && (
                <img 
                  src={getFlagSrc(currency)} 
                  alt={`${currency} flag`} 
                  className="me-2" 
                  width="20" 
                  height="15"
                  onError={() => handleImageError(currency)}
                />
              )}
              <select 
                className="form-select form-select-sm text-dark border-1 Navbar-currencySelect" 
                value={currency} 
                onChange={handleCurrencyChange}
                aria-label="Select currency"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          )}
        </div>

        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <div className="mobile-nav-section">
                <button 
                  className="mobile-nav-toggle d-flex justify-content-between align-items-center w-100 border-0 bg-transparent py-3"
                  onClick={() => setExpandedSection(expandedSection === 'women' ? null : 'women')}
                >
                  <span className="fw-medium">Women</span>
                  <i className={`fas fa-chevron-${expandedSection === 'women' ? 'up' : 'down'}`}></i>
                </button>
                {expandedSection === 'women' && (
                  <div className="mobile-submenu ps-3 pb-3">
                    <div className="mb-3">
                      <h6 className="mobile-submenu-title">HIGHLIGHTS</h6>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Shop All New Arrivals</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>The Gift Guide</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>New Bottoms</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>New Tops</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>T-shirt Bundles</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Under $100</a>
                    </div>
                    <div>
                      <h6 className="mobile-submenu-title">FEATURED SHOPS</h6>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>The Holiday Outfit Edit</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Giftable Sweaters</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Uniform & Capsule</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>The Performance Chino Shop</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Top Rated Men's Clothing</a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mobile-nav-section">
                <button 
                  className="mobile-nav-toggle d-flex justify-content-between align-items-center w-100 border-0 bg-transparent py-3"
                  onClick={() => setExpandedSection(expandedSection === 'men' ? null : 'men')}
                >
                  <span className="fw-medium">Men</span>
                  <i className={`fas fa-chevron-${expandedSection === 'men' ? 'up' : 'down'}`}></i>
                </button>
                {expandedSection === 'men' && (
                  <div className="mobile-submenu ps-3 pb-3">
                    <div className="mb-3">
                      <h6 className="mobile-submenu-title">HIGHLIGHTS</h6>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Shop All New Arrivals</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>The Gift Guide</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>New Bottoms</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>New Tops</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>T-shirt Bundles</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Under $100</a>
                    </div>
                    <div>
                      <h6 className="mobile-submenu-title">FEATURED SHOPS</h6>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>The Holiday Outfit Edit</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Giftable Sweaters</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Uniform & Capsule</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>The Performance Chino Shop</a>
                      <a href="#" className="mobile-submenu-link" onClick={handleClose}>Top Rated Men's Clothing</a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#" className="nav-link text-dark py-3" onClick={handleClose}>About</a>
              <a href="#" className="nav-link text-dark py-3" onClick={handleClose}>Everworld Stories</a>
              
              <hr className="my-3" />
              
              <a href="#" className="nav-link text-dark py-2" onClick={handleClose}>Holiday Gifting</a>
              <a href="#" className="nav-link text-dark py-2" onClick={handleClose}>New Arrivals</a>
              <a href="#" className="nav-link text-dark py-2" onClick={handleClose}>Best-Sellers</a>
              <a href="#" className="nav-link text-dark py-2" onClick={handleClose}>Clothing</a>
              <a href="#" className="nav-link text-dark py-2" onClick={handleClose}>Tops & Sweaters</a>
              <a href="#" className="nav-link text-dark py-2" onClick={handleClose}>Pants & Jeans</a>
              <a href="#" className="nav-link text-dark py-2" onClick={handleClose}>Outerwear</a>
              <a href="#" className="nav-link text-dark py-2" onClick={handleClose}>Shoes & Bags</a>
              <a href="#" className="nav-link text-dark py-2 sale-link" onClick={handleClose}>Sale</a>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        
        <SearchModal 
          show={showSearch}
          onHide={() => setShowSearch(false)}
        />
        </Container>
      </Navbar>
      

    </div>
  );
};

export default NavigationBar;