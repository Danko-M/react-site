import React from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';
import creative_01 from '../img/creative-01.jpg';
import creative_02 from '../img/creative-02.jpg';
import creative_03 from '../img/creative-03.jpg';

import brand_01 from '../img/brand-01.png';
import brand_02 from '../img/brand-02.png';
import brand_03 from '../img/brand-03.png';
import brand_04 from '../img/brand-04.png';


export const SectionJ  = () => 
	<Grid className="section-j">
    <Row>
    	<Col xs={12}>
	      <Media>
		     <Media.Left>
		        <h3 className="media-heading dashed-underline">Creative Minds</h3>
		      </Media.Left>
		      <Media.Body>
		        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
		      </Media.Body>
		    </Media>
        <Row className="text-center creatives">
          <Col xs={12} sm={4} md={3} >
            <div className="">
              <img src={creative_01} alt=".." className="center-block img-responsive" />
            </div>
          </Col>
          <Col xs={12} sm={4} md={3}>
            <div>
              <img src={creative_02} alt=".." className="center-block img-responsive" />
            </div>
          </Col>
          <Col xs={12} sm={4} md={3} >
            <div>
              <img src={creative_03} alt=".." className="center-block img-responsive" />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="text-center">
      <h3 className="text-uppercase dashed-underline">Brands Who Trust Us</h3>
      <Col xs={6} sm={3} ><img className="img-responsive" src={brand_01} alt=".."/></Col>
      <Col xs={6} sm={3} ><img className="img-responsive" src={brand_02} alt=".."/></Col>
      <Col xs={6} sm={3} ><img className="img-responsive" src={brand_03} alt=".."/></Col>
      <Col xs={6} sm={3} ><img className="img-responsive" src={brand_04} alt=".."/></Col>
    </Row>
  </Grid>  			     
