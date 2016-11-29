import React, {Component} from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export class SectionAtwoTabs extends Component {
  render() {
    return ( 
			<Tabs defaultActiveKey={1} className="secAtabs" id="uncontrolled-tab-example">
		    <Tab eventKey={2} title="Our History">
					<h3>Our History</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur alias minus, commodi eligendi reprehenderit ea illum placeat recusandae architecto magnam aspernatur doloremque, odio maxime ducimus voluptates eveniet cumque assumenda delectus?</p>
		    </Tab>
		    <Tab eventKey={1} title="About Us">
					<h3>Who We Are</h3>		    	
					<p>We have a reliable and highly productive in-house team operating from a 6,000 square foot office in the heart of downtown San Diego. We build “layers of trust” with our clients through strong communication, simple and transparent billing practices and most importantly, measurable results.</p>
		    </Tab>
		  </Tabs>     
    )
  }
}


