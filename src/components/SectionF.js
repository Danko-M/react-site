import React from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';

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
      <Col xs={12} sm={6} md={3} className="bg-success"></Col>
      <Col xs={12} sm={6} md={3} className="bg-"></Col>
      <Col xs={12} sm={6} md={3} className="bg-warning"></Col>
      <Col xs={12} sm={6} md={3} className="bg-"></Col>
      <Col xs={12} sm={6} md={3} className="bg-"></Col>
      <Col xs={12} sm={6} md={3} className="bg-info"></Col>
      <Col xs={12} sm={6} md={3} className="bg-"></Col>
      <Col xs={12} sm={6} md={3} className="bg-danger"></Col>    	
    </Row>
  </Grid>  			     
