import React from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';

export const SectionK  = () => 
	<Grid className="section-k">
    <h3 className="text-uppercase dashed-underline">Pricing Plans</h3>
    <Row>
      <Col xs={12} sm={4} md={3} className="bg-info">1</Col>
      <Col xs={12} sm={4} md={3}>2</Col>
      <Col xs={12} sm={4} md={3} className="bg-info">3</Col>
    </Row>
  </Grid>  			     
