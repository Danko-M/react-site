import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const SectionD  = () => 
	<Grid>
    <Row className="section-d">
      <Col className='col-xs-12 col-sm-1-5'>
      	<h4 className="text-uppercase dashed-underline-left">Design created</h4>
      	<div className="big-numbers">75</div>
      </Col>
      <Col className='col-xs-12 col-sm-1-5'>
      	<h4 className="text-uppercase dashed-underline-left">Projects delivered</h4>
      	<div className="big-numbers">68</div>
    	</Col>
      <Col className='col-xs-12 col-sm-1-5'>
      	<h4 className="text-uppercase dashed-underline-left">Awards won</h4>
      	<div className="big-numbers">14</div>
    	</Col>
      <Col className='col-xs-12 col-sm-1-5'>
      	<h4 className="text-uppercase dashed-underline-left">Happy clients</h4>
      	<div className="big-numbers">34</div>
    	</Col>
      <Col className='col-xs-12 col-sm-1-5'>
      	<h4 className="text-uppercase dashed-underline-left">Pizzas ordered</h4>
      	<div className="big-numbers">94</div>
    	</Col>
    </Row>
  </Grid>  			     
