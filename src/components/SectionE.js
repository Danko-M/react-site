import React from 'react';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';


export const SectionE = () => 
  <Grid fluid={true}>
    <Row className="section-e text-uppercase">
      <Col xs={12} sm={4} className="bg-orange">
      	<h3>Check our skills</h3>
      	<div>Html / Css</div>
      	<ProgressBar now={90} label={"90%"} />
      	<div>Javascript</div>
      	<ProgressBar now={90} label={"90%"} />
      	<div>Adobe Photoshop</div>
      	<ProgressBar now={80} label={"80%"} />
      	<div>Photography</div>
      	<ProgressBar now={65} label={"65%"} />
      	<div>Motion</div>
      	<ProgressBar now={70} label={"70%"} />
    	</Col>
      <Col xs={12} sm={8} className="hidden-xs"></Col>
    </Row>
  </Grid>