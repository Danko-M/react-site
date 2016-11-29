import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class SectionD extends Component {
  render() {
    return ( 
			<Grid>
		    <Row className="show-grid text-center">
		      <Col className='col-xs-12 col-sm-1-5 well'>1 - 20%</Col>
		      <Col className='col-xs-12 col-sm-1-5 well'>2 - 20%</Col>
		      <Col className='col-xs-12 col-sm-1-5 well'>3 - 20%</Col>
		      <Col className='col-xs-12 col-sm-1-5 well'>4 - 20%</Col>
		      <Col className='col-xs-12 col-sm-1-5 well'>5 - 20%</Col>
		    </Row>
		  </Grid>  			     
    )
  }
}


