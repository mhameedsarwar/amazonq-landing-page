import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Container, Button } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../styles/utilities/_responsive.css';
import '../../../styles/components/_hero.css';
import './HeroCarousel.css';

const slides = [
  {
    id: 1,
    title: "Your Cozy Era",
    subtitle: "Get peak comfy-chic with new winter essentials.",
    buttonText: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Your Cozy Era",
    subtitle: "Get peak comfy-chic with new winter essentials.",
    buttonText: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Your Cozy Era",
    subtitle: "Get peak comfy-chic with new winter essentials.",
    buttonText: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop"
  }
];

const HeroCarousel = () => {

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="hero-swiper hero-carousel"
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <div 
            className={`hero-slide d-flex align-items-center text-white HeroCarousel-slide HeroCarousel-slide-${slide.id}`}
          >
            <Container>
              <div className="hero-content text-start HeroCarousel-content">
                <h1 className="mb-3 HeroCarousel-title">{slide.title}</h1>
                <p className="mb-4 HeroCarousel-subtitle">{slide.subtitle}</p>
                <Button variant="light" className="HeroCarousel-button">
                  {slide.buttonText}
                </Button>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;