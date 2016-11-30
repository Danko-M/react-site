import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { SectionAcarousel } from './SectionAcarousel'
import { SectionAtwoTabs } from './SectionAtwoTabs'

export const SectionA = () => 
	<Grid fluid={true}>
		<Grid>
	    <Row className="section-a">
	      <Col xs={12} sm={5} className="bg-orange">
	      	<SectionAcarousel />
	      </Col>
	      <Col xs={12} sm={7}>
	      	<SectionAtwoTabs />
	      </Col>
	    </Row>
	  </Grid>      
	</Grid>      
