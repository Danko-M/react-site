import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class SectionB extends Component {
  render() {
    return ( 
			<Grid>
		    <Row className="show-grid">
		      <Col xs={12} sm={4}>
		      	<h3>Pixel Perfect</h3>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		      </Col>
		      <Col xs={12} sm={4}>
		      	<h3>Fully Responsive</h3>
		      	<p> Quisquam nobis, eligendi. Earum dolore culpa tenetur qui at, voluptas repellendus quisquam minima incidunt.</p>
		      </Col>
		      <Col xs={12} sm={4}>
		      	<h3>Multipurpose Design</h3>
		      	<p>Asperiores est similique amet soluta quia repellat ad.</p>
		      </Col>
		    </Row>
		  </Grid>  			     
    )
  }
}


