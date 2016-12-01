import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const SectionC = () => 
	<Grid fluid={true}>
    <Row className="section-c">
      <Col md={3} className="sec-c-first"></Col>
      <Col xs={12} sm={7} md={5} className="mid">
      	<h3 className="dashed-underline">Featured Project</h3>
      	<h2>Shining Sun Web</h2>
      	<p>Reiciendis, fugiat natus dolorum dolore iste similique ea, aliquam sequi dolores rerum consequatur temporibus ipsam doloribus minus veritatis veniam iure pariatur expedita.</p>
				<table className="table table-hover"> 
					<tbody> 
						<tr><th scope="row">Client</th><td>Shinning Web</td></tr> 
						<tr><th scope="row">Tehnology Used</th><td>HTML, CSS, JS, Photoshop</td></tr> 
						<tr><th scope="row">Delivered On</th><td>31st December 2016</td></tr> 
					</tbody> 
				</table>
      </Col>
      <Col xs={12} sm={5} md={4} className="text-center bg-orange">
      	<h3>Client Comment</h3>
      	<p><em>These guys are very skilled. They do know how to handle complex projects easily.</em></p>
      	<h5 className="text-uppercase">Thomas Hilton</h5>
      	<h6 className="text-uppercase">Founder : &#9788; Shining Sun Web</h6>
    	</Col>
    </Row>
  </Grid>  			     
