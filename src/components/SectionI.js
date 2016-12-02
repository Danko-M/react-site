import React from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';

export const SectionI  = () => 
	<Grid fluid={true} className="section-i text-center" >
		<Grid>
	    <Row>
	    	<h3 className="text-uppercase dashed-underline">Client's Testimonials</h3>
      	<Carousel indicators={false} >
			    <Carousel.Item>
		        <h3>First slide label</h3>
		        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Item>
			    <Carousel.Item>
		        <h3>Second slide label</h3>
		        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Item>
			    <Carousel.Item>
		        <h3>Third slide label</h3>
		        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Item>
			  </Carousel>
	    </Row>
	  </Grid>  			     
  </Grid>  			     
