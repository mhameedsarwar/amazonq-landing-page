import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/components/_promotional-blocks.css';
import '../../../styles/utilities/_shared.css';
import './PromotionalBlocks.css';

const blocks = [
    {
      id: 1,
      title: "New Arrivals",
      buttonText: "SHOP THE LATEST",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Best-Sellers",
      buttonText: "SHOP YOUR FAVORITES",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=500&fit=crop"
    },
    {
      id: 3,
      title: "The Holiday Outfit",
      buttonText: "SHOP OCCASION",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop"
    }
  ];

const PromotionalBlocks = () => {
  const renderBlock = (block) => (
    <div 
      className="position-relative text-white d-flex align-items-center justify-content-center text-center promotional-block PromotionalBlocks-block"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${block.image})`
      }}
    >
      <div>
        <h3 className="mb-3 PromotionalBlocks-title">{block.title}</h3>
        <Button variant="light" className="button-standard">
          {block.buttonText}
        </Button>
      </div>
    </div>
  );

  return (
    <Container className="py-5">
      {/* Desktop View - 3 Columns */}
      <div className="d-none d-lg-block">
        <Row>
          {blocks.map(block => (
            <Col lg={4} key={block.id} className="mb-4">
              {renderBlock(block)}
            </Col>
          ))}
        </Row>
      </div>
      
      {/* Mobile/Tablet View - Slider */}
      <div className="d-lg-none">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={1.2}
          centeredSlides={false}
          navigation={{
            nextEl: '.promotional-swiper-button-next',
            prevEl: '.promotional-swiper-button-prev'
          }}
          breakpoints={{
            576: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 }
          }}
        >
          {blocks.map(block => (
            <SwiperSlide key={block.id}>
              {renderBlock(block)}
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Arrows */}
        <div className="d-flex justify-content-center mt-4">
          <button className="promotional-swiper-button-prev btn btn-outline-dark me-3 d-flex align-items-center justify-content-center nav-button">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="promotional-swiper-button-next btn btn-outline-dark d-flex align-items-center justify-content-center nav-button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PromotionalBlocks;