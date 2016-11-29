import React, {Component} from 'react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';

export class SectionAlert extends Component {
  render() {
		const { visible, onDismiss } = this.props;
  	if(visible){
	    return ( 
				<Grid>
			    <Row className="show-grid">
			      <Col xs={12}>
			      	<Alert className="text-center" bsStyle="danger" onDismiss={onDismiss}>
						    <strong>Work in progress.</strong> Thanks for checking in.
						  </Alert>
			      </Col>
			    </Row>
			  </Grid>  			     
	    )
  	}
  	return null 
  }
}


