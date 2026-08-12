import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="/images/pizza2.png"
          alt="Neapolitan Pizza"
        />
        <Carousel.Caption className="hero-caption">
          <h3>Neapolitan Pizza</h3>
          <p>Authentic Italian taste in every bite</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="/images/pizza1.png"
          alt="Delicious Pizza"
        />
        <Carousel.Caption className="hero-caption">
          <h3>Delicious Pizza</h3>
          <p>Fresh ingredients, baked to perfection</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;