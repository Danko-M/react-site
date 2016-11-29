import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class SectionC extends Component {
  render() {
    return ( 
			<Grid fluid={true}>
		    <Row className="section-c">
		      <Col xs={12} sm={3} className="sec-c-first"></Col>
		      <Col xs={12} sm={5} className="mid">
		      	<strong>Featured Project</strong>
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
		      <Col xs={12} sm={4} className="bg-orange">
		      	<h3>Client Comment</h3>
		      	<p>Similique itaque consequatur sit adipisci eaque expedita eveniet, harum ex illo neque perferendis. Illo fugit provident sed porro quam, officiis, reiciendis incidunt?</p>
	      	</Col>
		    </Row>
		  </Grid>  			     
    )
  }
}


