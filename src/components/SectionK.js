import React from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';

export const SectionK  = () => 
  <Grid fluid={true} className="section-k" >  			     
    <Grid>
      <h3 className="text-uppercase dashed-underline">Pricing Plans</h3>
      <Row>
        <Col xs={12} sm={4} md={3} className="bg-warning" >
          <div>newbie</div>
        </Col>
        <Col xs={12} sm={4} md={3} >
          <div>expert</div>
        </Col>
        <Col xs={12} sm={4} md={3} className="bg-warning" >
          <div>master</div>
        </Col>
      </Row>
    </Grid>            
  </Grid>            
