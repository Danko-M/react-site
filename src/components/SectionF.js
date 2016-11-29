import React, {Component} from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';

export class SectionF extends Component {
  render() {
    return ( 
			<Grid>
		    <Row bsClass="row sectionF">
		    	<Col xs={12}>
			      <Media>
				     <Media.Left>
				        <strong>What We Offers</strong>
				      </Media.Left>
				      <Media.Body>
				        <Media.Heading>Media Heading</Media.Heading>
				        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				      </Media.Body>
				    </Media>
		      </Col>
		      <Col xs={12} sm={6} md={3}>01a</Col>
		      <Col xs={12} sm={6} md={3}>02a</Col>
		      <Col xs={12} sm={6} md={3}>03a</Col>
		      <Col xs={12} sm={6} md={3}>04a</Col>
		      <Col xs={12} sm={6} md={3}>01b</Col>
		      <Col xs={12} sm={6} md={3}>02b</Col>
		      <Col xs={12} sm={6} md={3}>03b</Col>
		      <Col xs={12} sm={6} md={3}>04b</Col>
		    </Row>
		  </Grid>  			     
    )
  }
}


