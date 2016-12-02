import React from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';

export const SectionJ  = () => 
	<Grid className="section-j">
    <Row>
    	<Col xs={12}>
	      <Media>
		     <Media.Left>
		        <h3 className="dashed-underline">Creative Minds</h3>
		      </Media.Left>
		      <Media.Body>
		        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
		      </Media.Body>
		    </Media>
      </Col>
    </Row>
    <Row className="text-center">
      <h3 className="text-uppercase dashed-underline">Brands Who Trust Us</h3>
      <Col xs={6} sm={3} >1</Col>
      <Col xs={6} sm={3} >2</Col>
      <Col xs={6} sm={3} >3</Col>
      <Col xs={6} sm={3} >4</Col>
    </Row>
  </Grid>  			     
