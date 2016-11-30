import React from 'react';
import { Carousel } from 'react-bootstrap';

export const SectionAcarousel = () => 
	<Carousel interval={5000} controls={false}>
    <Carousel.Item>
    	<h2>We Are Creative</h2>
      <p>Watch us rock your world with our web design capabilities</p>
    </Carousel.Item>
    <Carousel.Item>
    	<h2>We Can</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Item>
    <Carousel.Item>
    	<h2>We Can</h2>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Item>
  </Carousel>   
