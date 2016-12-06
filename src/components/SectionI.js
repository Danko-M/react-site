import React from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import IconSpeechBuble from './icons/IconSpeechBuble';

export const SectionI  = () => 
	<Grid fluid={true} className="section-i text-center" >
		<Grid>
	    <Row>
	    	<h3 className="text-uppercase dashed-underline">Client's Testimonials</h3>
      	<Carousel 
      		indicators={false} 
					prevIcon={<i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>} 
					nextIcon={<i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>} 
				>
			    <Carousel.Item>
		        <h3>First slide label</h3>
		        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		        <IconSpeechBuble />
		        <h5 className="text-uppercase">Thomas Hilton</h5>
		        <h6 className="text-uppercase">Founder : Shining Sun Web</h6>
			    </Carousel.Item>
			    <Carousel.Item>
		        <h3>Second slide label</h3>
		        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		        <IconSpeechBuble />
		        <h5 className="text-uppercase">Thomas Hilton</h5>
		        <h6 className="text-uppercase">Founder : Shining Sun Web</h6>
			    </Carousel.Item>
			    <Carousel.Item>
		        <h3>Third slide label</h3>
		        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		        <IconSpeechBuble />
		        <h5 className="text-uppercase">Thomas Hilton</h5>
		        <h6 className="text-uppercase">Founder : Shining Sun Web</h6>
			    </Carousel.Item>
			  </Carousel>
	    </Row>
	  </Grid>  			     
  </Grid>  			     
