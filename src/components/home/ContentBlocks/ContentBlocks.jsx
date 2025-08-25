import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/utilities/_shared.css';
import './ContentBlocks.css';

const blocks = [
    {
      id: 1,
      title: "Our Holiday Gift Picks",
      description: "The best presents for everyone on your list.",
      buttonText: "Read More",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Cleaner Fashion",
      description: "See the sustainability efforts behind each of our products.",
      buttonText: "Learn More",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    }
  ];

const ContentBlocks = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (blockId) => {
    setImageErrors(prev => ({ ...prev, [blockId]: true }));
  };

  const renderBlock = (block) => (
    <div className="content-block text-center">
      <h3 className="mb-4 ContentBlocks-title">
        {block.title}
      </h3>
      <img 
        src={imageErrors[block.id] ? '/api/placeholder/600/400' : block.image}
        alt={block.title}
        className="img-fluid mb-4 ContentBlocks-image"
        onError={() => handleImageError(block.id)}
        loading="lazy"
      />
      <p className="mb-4 ContentBlocks-description">
        {block.description}
      </p>
      <a 
        href="#" 
        className="text-decoration-underline text-dark ContentBlocks-link"
      >
        {block.buttonText}
      </a>
    </div>
  );

  return (
    <Container className="py-5">
      <div className="ContentBlocks-container">
        {/* Desktop View - 2 Columns */}
        <Row className="d-none d-lg-flex">
          {blocks.map(block => (
            <Col lg={6} key={block.id} className="mb-4">
              {renderBlock(block)}
            </Col>
          ))}
        </Row>
        
        {/* Mobile/Tablet View - Slider */}
        <div className="d-lg-none">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.content-blocks-swiper-button-next',
              prevEl: '.content-blocks-swiper-button-prev'
            }}
          >
            {blocks.map(block => (
              <SwiperSlide key={block.id}>
                {renderBlock(block)}
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Mobile Navigation - Bottom Center */}
          <div className="d-flex justify-content-center mt-4">
            <button className="content-blocks-swiper-button-prev btn btn-outline-dark me-3 d-flex align-items-center justify-content-center nav-button">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="content-blocks-swiper-button-next btn btn-outline-dark d-flex align-items-center justify-content-center nav-button">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContentBlocks;