import React from 'react';
import './Carousel.css';

export default function CarouselItem(props) {
  return (
    <div className={`carousel-item ${props.active ? 'active' : ''}`}>
      <img
        src={`${props.imageUrl}`}
        className="d-block w-100"
        alt={`${props.alt}`}
      />
    </div>
  );
}
