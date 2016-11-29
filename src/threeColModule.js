import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class Hero extends Component {
  render() {
    return ( 
			<Grid fluid={true}>
				<Grid>
			    <Row className="show-grid">
			      <Col xs={12} sm={4}>1</Col>
			      <Col xs={12} sm={4}>2</Col>
			      <Col xs={12} sm={4}>3</Col>
			    </Row>
			  </Grid>      
			</Grid>      
    )
  }
}


