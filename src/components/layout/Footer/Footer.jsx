import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <footer className="Footer-main">
      <Container>
        <Row className="Footer-content">
          {/* Email Signup - Shows first on mobile, right on desktop */}
          <Col lg={4} className="Footer-signup order-1 order-lg-2 ps-lg-4 px-3">
            <h6 className="Footer-heading mb-3">Stay in the know</h6>
            <p className="Footer-signupText mb-3">
              Be the first to know about new arrivals, sales & promos!
            </p>
            <form onSubmit={handleSubmit} className="Footer-emailForm mb-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="Footer-emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                aria-label="Email address"
              />
              <button 
                type="submit" 
                className="Footer-submitBtn"
                disabled={isSubmitting}
                aria-label="Subscribe to newsletter"
              >
                {isSubmitting ? '...' : '→'}
              </button>
            </form>
            {message && (
              <p className={`mb-3 ${message.includes('Thank') ? 'text-success' : 'text-danger'}`}>
                {message}
              </p>
            )}
            <div className="Footer-social">
              <a href="#" className="Footer-socialLink" aria-label="Follow us on Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="#" className="Footer-socialLink" aria-label="Follow us on Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" className="Footer-socialLink" aria-label="Follow us on Twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </div>
          </Col>

          {/* Links - Shows second on mobile, left on desktop */}
          <Col lg={8} className="order-2 order-lg-1">
            <Row>
              <Col xs={6} md={3} className="Footer-column">
                <h6 className="Footer-heading">Account</h6>
                <ul className="Footer-links">
                  <li><a href="#">Log In</a></li>
                  <li><a href="#">Sign Up</a></li>
                  <li><a href="#">Redeem a Gift Card</a></li>
                </ul>
              </Col>
              
              <Col xs={6} md={3} className="Footer-column">
                <h6 className="Footer-heading">Company</h6>
                <ul className="Footer-links">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Environmental Initiatives</a></li>
                  <li><a href="#">Factories</a></li>
                  <li><a href="#">DEI</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">International</a></li>
                  <li><a href="#">Accessibility</a></li>
                </ul>
              </Col>
              
              <Col xs={6} md={3} className="Footer-column">
                <h6 className="Footer-heading">Get Help</h6>
                <ul className="Footer-links">
                  <li><a href="#">Customer Care</a></li>
                  <li><a href="#">Size Guide</a></li>
                  <li><a href="#">Shipping & Returns</a></li>
                  <li><a href="#">Contact & FAQ</a></li>
                  <li><a href="#">Bulk Orders</a></li>
                </ul>
              </Col>
              
              <Col xs={6} md={3} className="Footer-column">
                <h6 className="Footer-heading">Connect</h6>
                <ul className="Footer-links">
                  <li><a href="#">Email Sign Up</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Affiliates</a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        
        {/* Bottom Section - Centered */}
        <div className="Footer-bottom">
          <div className="Footer-bottomContent">
            <div className="Footer-legal mb-2">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Do Not Sell or Share My Personal Information</a>
              <a href="#">CA Supply Chain Act</a>
              <a href="#">Accessibility</a>
              <a href="#">Vendor Code of Conduct</a>
            </div>
            <p className="Footer-copyright mb-0">© 2025 Everlane - MHS</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;