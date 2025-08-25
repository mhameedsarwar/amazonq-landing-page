import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TopBar from './TopBar';
import NavigationBar from './Navbar';
import '../../../styles/StickyHeader.css';

const Header = ({ currency, setCurrency }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showCurrencyInNav, setShowCurrencyInNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
      
      // Show currency in nav when scrolling down, hide only when at top
      if (scrollTop > lastScrollY && scrollTop > 150) {
        setShowCurrencyInNav(true);
      } else if (scrollTop <= 100) {
        setShowCurrencyInNav(false);
      }
      setLastScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <TopBar currency={currency} setCurrency={setCurrency} showCurrencyInNav={showCurrencyInNav} />
      <div className={`${isSticky ? 'sticky-header' : ''}`}>
        <NavigationBar currency={currency} setCurrency={setCurrency} showCurrencyInNav={showCurrencyInNav} />
        <div className="bg-white border-bottom py-2 d-none d-lg-block">
          <Container>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#" className="nav-link text-dark me-3 small">Holiday Gifting</a>
              <a href="#" className="nav-link text-dark me-3 small">New Arrivals</a>
              <a href="#" className="nav-link text-dark me-3 small">Best-Sellers</a>
              <a href="#" className="nav-link text-dark me-3 small">Clothing</a>
              <a href="#" className="nav-link text-dark me-3 small">Tops & Sweaters</a>
              <a href="#" className="nav-link text-dark me-3 small">Pants & Jeans</a>
              <a href="#" className="nav-link text-dark me-3 small">Outerwear</a>
              <a href="#" className="nav-link text-dark me-3 small">Shoes & Bags</a>
              <a href="#" className="nav-link text-dark small">Sale</a>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;