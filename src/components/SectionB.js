import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const SectionB = () => 
	<Grid>
    <Row className="section-b">
      <Col sm={4} xs={12}>
      	<h3 className="dashed-underline">Pixel Perfect</h3>
      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Col>
      <Col xs={12} sm={4}>
      	<h3 className="dashed-underline">Fully Responsive</h3>
      	<p> Quisquam nobis, eligendi. Earum dolore culpa tenetur qui at, voluptas repellendus quisquam minima incidunt.</p>
      </Col>
      <Col xs={12} sm={4}>
      	<h3 className="dashed-underline">Multipurpose Design</h3>
      	<p>Asperiores est similique amet soluta quia repellat ad.</p>
      </Col>
    </Row>
  </Grid>  			     
