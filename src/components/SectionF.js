import React from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';
import IconMonitor from './icons/IconMonitor';
import IconEye from './icons/IconEye';
import IconShoppingCart from './icons/IconShoppingCart';
import IconPlayer from './icons/IconPlayer';
import IconUi from './icons/IconUi';
import IconCamera from './icons/IconCamera';
import IconHeadPhones from './icons/IconHeadPhones';
import IconGlobe from './icons/IconGlobe';


export const SectionF  = () => 
	<Grid className="section-f">
    <Row>
    	<Col xs={12}>
	      <Media>
		     <Media.Left>
		        <h3 className="media-heading dashed-underline">What We Offers</h3>
		      </Media.Left>
		      <Media.Body>
		        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
		      </Media.Body>
		    </Media>
      </Col>
    </Row>
    <Row className="gid-8 text-center">
      <Col xs={12} sm={6} md={3} >
        <IconMonitor height="50px" />
        <div className="text-uppercase">Web Design</div>
      </Col>    
      <Col xs={12} sm={6} md={3} >
        <IconEye height="50px" />
        <div className="text-uppercase">Branding</div>
      </Col>
      <Col xs={12} sm={6} md={3} >
        <IconShoppingCart height="50px" />
        <div className="text-uppercase">Ecommerce</div>
      </Col>
      <Col xs={12} sm={6} md={3} >
        <IconPlayer height="50px" />
        <div className="text-uppercase">Motion</div>
      </Col>
      <Col xs={12} sm={6} md={3} >
        <IconUi height="50px" />
        <div className="text-uppercase">UX / UI</div>
      </Col>
      <Col xs={12} sm={6} md={3} >
        <IconCamera height="50px" />
        <div className="text-uppercase">Photography</div>
      </Col>
      <Col xs={12} sm={6} md={3} >
        <IconHeadPhones height="50px" />
        <div className="text-uppercase">Marketing</div>
      </Col>      
      <Col xs={12} sm={6} md={3} >
        <IconGlobe height="50px" />
        <div className="text-uppercase">SEO</div>
      </Col>
    </Row>
  </Grid>  			     
