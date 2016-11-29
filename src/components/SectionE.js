import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class SectionE extends Component {
  render() {
    return ( 
			<Grid fluid={true}>
		    <Row className="show-grid">
		      <Col xs={12} sm={4} className="bg-info">33%</Col>
		      <Col xs={12} sm={8} className="bg-success">66%</Col>
		    </Row>
		  </Grid>  			     
    )
  }
}


