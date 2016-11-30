import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const Hero = () => 
	<Grid bsClass="container-fluid hero">
		<Grid>
	    <Row className="show-grid text-center">
	      <Col xs={12}>
	      	<ul className="list-inline">
					  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
					  <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
					  <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
					  <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
					</ul>
	      	<h1>Helping Our Clients To Achieve Success</h1>	
	      	
	      	<h3>
	      		<em>We make High-level Design Creation Affordable For Everyone</em>
	      	</h3>
	      </Col>
	    </Row>
	  </Grid>      
	</Grid>      
