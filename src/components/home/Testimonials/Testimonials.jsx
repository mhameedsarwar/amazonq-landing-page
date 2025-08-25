import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import Loading from '../../ui/Loading';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/components/_testimonials.css';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=5');
        const testimonialsData = response.data.map((product, index) => ({
          id: product.id,
          quote: `Love this ${product.category}! ${product.description?.split('.')[0] || 'Great product'}.`,
          author: `User${product.id}`,
          product: product.title?.length > 30 ? product.title.substring(0, 30) + '...' : product.title || 'Product',
          image: product.image
        }));
        setTestimonials(testimonialsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Set fallback testimonials
        setTestimonials([
          {
            id: 1,
            quote: "Love the quality and sustainable practices!",
            author: "Sarah M.",
            product: "Organic Cotton Tee",
            image: "/api/placeholder/300/300"
          }
        ]);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <Loading message="Loading testimonials..." />;
  }

  return (
    <Container className="py-5">
      <div className="position-relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.testimonials-swiper-button-next',
            prevEl: '.testimonials-swiper-button-prev'
          }}
          pagination={{ 
            clickable: true,
            el: '.testimonials-pagination'
          }}
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="pe-lg-4">
                    <h3 className="mb-4 Testimonials-title">
                      People Are Talking
                    </h3>
                    <div className="mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning me-1"></i>
                      ))}
                    </div>
                    <blockquote className="mb-4 Testimonials-quote">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="mb-0 Testimonials-author">
                      -- {testimonial.author}, {testimonial.product}
                    </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex align-items-center justify-content-center Testimonials-imageContainer">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.product}
                      className="img-fluid Testimonials-image"
                    />
                  </div>
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Navigation Arrows - Outside Container */}
        <button className="testimonials-swiper-button-prev btn btn-outline-dark d-none d-xl-flex align-items-center justify-content-center position-absolute Testimonials-desktopNavButton Testimonials-desktopNavButtonPrev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="testimonials-swiper-button-next btn btn-outline-dark d-none d-xl-flex align-items-center justify-content-center position-absolute Testimonials-desktopNavButton Testimonials-desktopNavButtonNext">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      {/* Mobile/Tablet Navigation - Bottom Center */}
      <div className="d-flex justify-content-center mt-4 d-xl-none">
        <button className="testimonials-swiper-button-prev btn btn-outline-dark me-3 d-flex align-items-center justify-content-center Testimonials-mobileNavButton">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="testimonials-swiper-button-next btn btn-outline-dark d-flex align-items-center justify-content-center Testimonials-mobileNavButton">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      {/* Pagination Dots */}
      <div className="testimonials-pagination d-flex justify-content-center mt-3"></div>
    </Container>
  );
};

export default Testimonials;