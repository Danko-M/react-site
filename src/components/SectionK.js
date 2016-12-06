import React from 'react';
import { Grid, Row, Col, Media, Button } from 'react-bootstrap';
import IconUser from './icons/IconUser';
import IconCup from './icons/IconCup';
import IconRocket from './icons/IconRocket';

export const SectionK  = () => 
  <Grid fluid={true} className="section-k" >  			     
    <Grid>
      <h3 className="text-uppercase dashed-underline">Pricing Plans</h3>
      <Row>
        <Col md={3} sm={4} xs={12}  className="bg-white" >
          <IconUser />
          <div className="text-uppercase">newbie</div>
          <div className="price">&#36;29 per month</div>
          <ul className="list-unstyled">
            <li>Unlimited Travel</li>
            <li>Free 2 Days 3 Nights Stay</li>
            <li>10 Pizza + 5 Drinks</li>
            <li>Private Jet Available</li>
            <li>5 Star Hotel Stay</li>
          </ul>
          <Button type="submit" className="">
            Submit
          </Button>
        </Col>
        <Col xs={12} sm={4} md={3} className="bg-orange" >
          <IconCup />
          <div className="text-uppercase">expert</div>
          <div className="price">&#36;59 per month</div>
          <ul className="list-unstyled">
            <li>Unlimited Travel</li>
            <li>Free 2 Days 3 Nights Stay</li>
            <li>10 Pizza + 5 Drinks</li>
            <li>Private Jet Available</li>
            <li>5 Star Hotel Stay</li>
          </ul>
          <Button type="submit" className="">
            Submit
          </Button>
        </Col>
        <Col xs={12} sm={4} md={3} className="bg-white" >
          <IconRocket />
          <div className="text-uppercase">master</div>
          <div className="price">&#36;89 per month</div>
          <ul className="list-unstyled">
            <li>Unlimited Travel</li>
            <li>Free 2 Days 3 Nights Stay</li>
            <li>10 Pizza + 5 Drinks</li>
            <li>Private Jet Available</li>
            <li>5 Star Hotel Stay</li>
          </ul>
          <Button type="submit" className="">
            Submit
          </Button>
        </Col>
      </Row>
    </Grid>            
  </Grid>            
