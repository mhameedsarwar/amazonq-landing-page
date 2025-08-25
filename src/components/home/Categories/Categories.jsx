import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/components/_categories.css';
import '../../../styles/utilities/_mobile-fixes.css';
import '../../../styles/utilities/_shared.css';
import './Categories.css';

const categories = [
    {
      id: 1,
      name: "SHIRTS",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop",
      link: "/shirts"
    },
    {
      id: 2,
      name: "DENIM",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
      link: "/denim"
    },
    {
      id: 3,
      name: "TEES",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      link: "/tees"
    },
    {
      id: 4,
      name: "PANTS",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
      link: "/pants"
    },
    {
      id: 5,
      name: "SWEATERS",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop",
      link: "/sweaters"
    },
    {
      id: 6,
      name: "OUTERWEAR",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop",
      link: "/outerwear"
    }
  ];

const Categories = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (categoryId) => {
    setImageErrors(prev => ({ ...prev, [categoryId]: true }));
  };

  const getImageSrc = (category) => {
    return imageErrors[category.id] ? '/api/placeholder/300/400' : category.image;
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 display-6">Shop by Category</h2>
      {/* Desktop View - 6 Columns */}
      <Row className="d-none d-lg-flex">
        {categories.map(category => (
          <Col lg={2} key={category.id} className="mb-4">
            <div className="text-center category-item">
              <div className="category-image-wrapper mb-3">
                <img 
                  src={getImageSrc(category)} 
                  alt={`Shop ${category.name}`}
                  className="img-fluid rounded Categories-desktopImage image-cover"
                  onError={() => handleImageError(category.id)}
                  loading="lazy"
                />
              </div>
              <a href={category.link} className="text-decoration-none text-dark category-link">
                <span className="fw-bold text-uppercase Categories-desktopCategoryName">{category.name}</span>
              </a>
            </div>
          </Col>
        ))}
      </Row>
      
      {/* Mobile/Tablet View - Slider */}
      <div className="d-lg-none">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={2.5}
          navigation={{
            nextEl: '.categories-swiper-button-next',
            prevEl: '.categories-swiper-button-prev'
          }}
          breakpoints={{
            576: { slidesPerView: 3.5, spaceBetween: 20 },
            768: { slidesPerView: 4.5, spaceBetween: 20 }
          }}
        >
          {categories.map(category => (
            <SwiperSlide key={category.id}>
              <div className="text-center category-item">
                <div className="category-image-wrapper mb-3">
                  <img 
                    src={getImageSrc(category)} 
                    alt={`Shop ${category.name}`}
                    className="img-fluid rounded Categories-mobileImage image-cover"
                    onError={() => handleImageError(category.id)}
                    loading="lazy"
                  />
                </div>
                <a href={category.link} className="text-decoration-none text-dark category-link">
                  <span className="fw-bold text-uppercase Categories-mobileCategoryName">{category.name}</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Arrows */}
        <div className="d-flex justify-content-center mt-4">
          <button 
            className="categories-swiper-button-prev btn btn-outline-dark me-3 d-flex align-items-center justify-content-center nav-button"
            aria-label="Previous categories"
          >
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button 
            className="categories-swiper-button-next btn btn-outline-dark d-flex align-items-center justify-content-center nav-button"
            aria-label="Next categories"
          >
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Categories;