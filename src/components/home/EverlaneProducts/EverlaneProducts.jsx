import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/components/_testimonials.css';
import '../../../styles/utilities/_shared.css';
import './EverlaneProducts.css';

const EverlaneProducts = ({ currency = 'USD' }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73
  };
  
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£'
  };
  
  const convertPrice = (price) => {
    const converted = (price * exchangeRates[currency]).toFixed(2);
    return `${currencySymbols[currency]}${converted}`;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=8');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">Loading products...</div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h2 className="mb-3 text-xxl">Everlane Favorites</h2>
          <p className="text-large">Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
        </Col>
      </Row>
      
      <div className="position-relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: '.everlane-swiper-button-next',
            prevEl: '.everlane-swiper-button-prev'
          }}
          pagination={{ 
            clickable: true,
            el: '.everlane-pagination'
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div>
              <div className="mb-3 d-flex align-items-center justify-content-center image-container EverlaneProducts-imageContainer">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="img-fluid image-responsive"
                />
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="mb-1 text-small EverlaneProducts-productTitle">
                    {product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}
                  </p>
                  <p className="mb-0 text-capitalize text-small text-muted">
                    {product.category}
                  </p>
                </div>
                <p className="mb-0 text-small">{convertPrice(product.price)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        
        {/* Desktop Navigation - Outside Content Frame */}
        <button className="everlane-swiper-button-prev btn btn-outline-dark d-none d-xl-flex align-items-center justify-content-center position-absolute nav-button-desktop nav-button-prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="everlane-swiper-button-next btn btn-outline-dark d-none d-xl-flex align-items-center justify-content-center position-absolute nav-button-desktop nav-button-next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      {/* Mobile/Tablet Navigation - Bottom Center */}
      <div className="d-flex justify-content-center mt-4 d-xl-none">
        <button className="everlane-swiper-button-prev btn btn-outline-dark me-3 d-flex align-items-center justify-content-center nav-button">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="everlane-swiper-button-next btn btn-outline-dark d-flex align-items-center justify-content-center nav-button">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      {/* Pagination Dots */}
      <div className="everlane-pagination d-flex justify-content-center mt-3"></div>
      

    </Container>
  );
};

export default EverlaneProducts;