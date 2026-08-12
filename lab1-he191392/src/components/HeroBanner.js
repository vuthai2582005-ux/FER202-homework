import React from 'react';
import { Carousel } from 'react-bootstrap';

function HeroBanner(){
  return (
    <Carousel fade interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="/Images/banner1.jpg"
              alt="Sale"
            />
            <Carousel.Caption className="hero-caption">
              <h3 style={{fontStyle:"italic"}}>SUMMER SALE UP TO 50%</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="/Images/banner2.jpg"
              alt="Sale"
            />
            <Carousel.Caption className="hero-caption">
              <h3 style={{fontStyle:"italic"}}>SUMMER SALE UP TO 50%</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="/Images/banner3.jpg"
              alt="Sale"
            />
            <Carousel.Caption className="hero-caption">
              <h3 style={{fontStyle:"italic"}}>SUMMER SALE UP TO 50%</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  );
};

export default HeroBanner;