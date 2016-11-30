import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const SectionD  = () => 
	<Grid>
    <Row className="show-grid text-center">
      <Col className='col-xs-12 col-sm-1-5'>
      	<div className="text-uppercase">Design created</div>
      	<div>75</div>
      </Col>
      <Col className='col-xs-12 col-sm-1-5'>
      	<div className="text-uppercase">Projects delivered</div>
      	<div>68</div>
    	</Col>
      <Col className='col-xs-12 col-sm-1-5'>
      	<div className="text-uppercase">Awards won</div>
      	<div>14</div>
    	</Col>
      <Col className='col-xs-12 col-sm-1-5'>
      	<div className="text-uppercase">Happy clients</div>
      	<div>34</div>
    	</Col>
      <Col className='col-xs-12 col-sm-1-5'>
      	<div className="text-uppercase">Pizzas ordered</div>
      	<div>94</div>
    	</Col>
    </Row>
  </Grid>  			     
