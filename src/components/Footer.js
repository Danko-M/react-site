import React from 'react';
import { Grid, Row, Col, Media, FormGroup, FormControl, HelpBlock, Radio, ControlLabel, Checkbox, Button } from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
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
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      placeholder="Enter"
    />
    <FieldGroup
      id="formControlsSubject"
      type="text"
      placeholder="Subject"
    />
	</Col>
  <Col xs={12} sm={6}>    
    <FormGroup controlId="formControlsTextarea">
      <FormControl componentClass="textarea" placeholder="Message" />
    </FormGroup>

    <Button type="submit" className="pull-right bg-orange">
      Submit
    </Button>
	</Col>
  </form>
);


export const Footer = () => 
	<Grid fluid={true} className="footer">
		<Grid>
	    <Row className="">
	      <Col xs={12} sm={4}>
			    <Media>
			      <Media.Left align="top">
			        <img width={48} height={48} src="http://placehold.it/48x48" alt="..."/>
			      </Media.Left>
			      <Media.Body>
			        <Media.Heading className="text-uppercase dashed-underline">Address Information</Media.Heading>
			        <small>Level 13, 2 Elizabeth St, Melbourne, Victoria 3000</small>
			      </Media.Body>
			    </Media>  
			    <Media>
			      <Media.Left align="top">
			        <img width={48} height={48} src="http://placehold.it/48x48" alt="..."/>
			      </Media.Left>
			      <Media.Body>
			        <Media.Heading className="text-uppercase dashed-underline">Email</Media.Heading>
			        <small><a href="#">hello&welcome@gmail.com</a></small>
			      </Media.Body>
			    </Media>
			    <Media>
			      <Media.Left align="top">
			        <img width={48} height={48} src="http://placehold.it/48x48" alt="..."/>
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
					  {formInstance}
	      	</Row>
	      </Col>
	    </Row>
	  </Grid> 
  </Grid> 