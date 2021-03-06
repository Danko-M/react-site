import React, { Component } from 'react';
import { Grid, Row, Col, Media, FormGroup, FormControl, Button } from 'react-bootstrap';
import IconMarker from './icons/IconMarker';
import IconEnvelope from './icons/IconEnvelope';
import IconPhone from './icons/IconPhone';


export class Footer extends Component {
  render() {
  	const FieldGroup = function ({ id, label, help, ...props }) {
		  return (
		    <FormGroup controlId={id}>
		      <FormControl {...props} />
		    </FormGroup>
		  );
		}

		const formInstance = (
		  <form>
		  <Col xs={12} sm={6}>
		    <FieldGroup
		      id="formControlsName"
		      type="text"
		      placeholder="Name"
		      required
		    />
		    <FieldGroup
		      id="formControlsEmail"
		      type="email"
		      placeholder="Email"
		      required
		    />
		    <FieldGroup
		      id="formControlsSubject"
		      type="text"
		      placeholder="Subject"
		      required
		    />
			</Col>
		  <Col xs={12} sm={6}>    
		    <FormGroup controlId="formControlsTextarea">
		      <FormControl componentClass="textarea" placeholder="Message" required />
		    </FormGroup>

		    <Button type="submit" className="pull-right bg-orange">
		      Submit
		    </Button>
			</Col>
		  </form>
		);
  	return ( 
			<Grid fluid={true} className="footer">
				<Grid>
			    <Row className="">
			      <Col xs={12} sm={4}>
					    <Media>
					      <Media.Left align="top">
					        <IconMarker />
					      </Media.Left>
					      <Media.Body>
					        <Media.Heading className="text-uppercase dashed-underline">Address Information</Media.Heading>
					        <small>Level 13, 2 Elizabeth St, Melbourne, Victoria 3000</small>
					      </Media.Body>
					    </Media>  
					    <Media>
					      <Media.Left align="top">
					        <IconEnvelope />
					      </Media.Left>
					      <Media.Body>
					        <Media.Heading className="text-uppercase dashed-underline">Email</Media.Heading>
					        <small><a href="#">hello&welcome@gmail.com</a></small>
					      </Media.Body>
					    </Media>
					    <Media>
					      <Media.Left align="top">
					        <IconPhone />
					      </Media.Left>
					      <Media.Body>
					        <Media.Heading className="text-uppercase dashed-underline">Toll Free Call</Media.Heading>
					        <small>0800 234 56789</small>
					      </Media.Body>
					    </Media>  
			       </Col>
			      <Col xs={12} sm={8}>
			      	<h4 className="text-uppercase dashed-underline media-heading">Leave a message</h4>
			      	<Row>
							  { formInstance }
			      	</Row>
			      </Col>
			    </Row>
			  </Grid> 
		  </Grid> 
      )
  }
}