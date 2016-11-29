import React, {Component} from 'react';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

export class SectionE extends Component {
  render() {
    return ( 
			<Grid fluid={true}>
		    <Row className="section-e text-uppercase">
		      <Col xs={12} sm={4} className="bg-orange">
		      	<h3>Check our skills</h3>
		      	<div>Html / Css 90%</div>
		      	<ProgressBar now={90} />
		      	<div>Javascript 90%</div>
		      	<ProgressBar now={90} />
		      	<div>Adobe Photoshop 80%</div>
		      	<ProgressBar now={80} />
		      	<div>Photography 65%</div>
		      	<ProgressBar now={65} />
		      	<div>Motion 70%</div>
		      	<ProgressBar now={70} />
	      	</Col>
		      <Col xs={12} sm={8} className="bg-success">66%</Col>
		    </Row>
		  </Grid>  			     
    )
  }
}


