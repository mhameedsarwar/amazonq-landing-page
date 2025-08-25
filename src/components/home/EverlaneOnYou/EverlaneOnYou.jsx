import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import Loading from '../../ui/Loading';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/utilities/_shared.css';
import './EverlaneOnYou.css';

const EverlaneOnYou = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=8');
        const imageData = response.data.map(product => ({
          id: product.id,
          image: product.image,
          alt: product.title
        }));
        setImages(imageData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to load images');
        // Set fallback images
        setImages([
          { id: 1, image: '/api/placeholder/300/300', alt: 'Customer Style 1' },
          { id: 2, image: '/api/placeholder/300/300', alt: 'Customer Style 2' },
          { id: 3, image: '/api/placeholder/300/300', alt: 'Customer Style 3' }
        ]);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <Loading message="Loading images..." />;
  }

  return (
    <Container className="py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="mb-3 EverlaneOnYou-title">
          Everlane On You
        </h2>
        <p className="mb-2 EverlaneOnYou-description">
          Share your latest look with #EverlaneOnYou for a chance to be featured.
        </p>
        <a 
          href="#" 
          className="text-decoration-underline text-dark EverlaneOnYou-link"
        >
          Add Your Photo
        </a>
      </div>

      {/* Desktop View - Slider */}
      <div className="d-none d-xl-block position-relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            nextEl: '.everlane-on-you-swiper-button-next',
            prevEl: '.everlane-on-you-swiper-button-prev'
          }}
        >
          {images.map(image => (
            <SwiperSlide key={image.id}>
              <div className="position-relative">
                <div className="d-flex align-items-center justify-content-center EverlaneOnYou-desktopImageContainer">
                  <img 
                    src={image.image}
                    alt={image.alt}
                    className="img-fluid EverlaneOnYou-image"
                  />
                </div>
                <button className="btn btn-light position-absolute EverlaneOnYou-cartButton">
                  <i className="fas fa-shopping-cart EverlaneOnYou-cartIcon"></i>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Desktop Navigation - Outside Content Frame */}
        <button className="everlane-on-you-swiper-button-prev btn btn-outline-dark d-flex align-items-center justify-content-center position-absolute nav-button-desktop nav-button-prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="everlane-on-you-swiper-button-next btn btn-outline-dark d-flex align-items-center justify-content-center position-absolute nav-button-desktop nav-button-next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      {/* Mobile/Tablet View - Slider */}
      <div className="d-xl-none position-relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={2.5}
          navigation={{
            nextEl: '.everlane-on-you-swiper-button-next',
            prevEl: '.everlane-on-you-swiper-button-prev'
          }}
          breakpoints={{
            576: { slidesPerView: 3.5, spaceBetween: 20 },
            768: { slidesPerView: 4.5, spaceBetween: 20 }
          }}
        >
          {images.map(image => (
            <SwiperSlide key={image.id}>
              <div className="position-relative">
                <div className="d-flex align-items-center justify-content-center EverlaneOnYou-mobileImageContainer">
                  <img 
                    src={image.image}
                    alt={image.alt}
                    className="img-fluid EverlaneOnYou-image"
                  />
                </div>
                <button className="btn btn-light position-absolute EverlaneOnYou-cartButton">
                  <i className="fas fa-shopping-cart EverlaneOnYou-cartIcon"></i>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
        {/* Mobile/Tablet Navigation - Bottom Center */}
        <div className="d-flex justify-content-center mt-4 d-xl-none">
          <button className="everlane-on-you-swiper-button-prev btn btn-outline-dark me-3 d-flex align-items-center justify-content-center nav-button">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="everlane-on-you-swiper-button-next btn btn-outline-dark d-flex align-items-center justify-content-center nav-button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default EverlaneOnYou;