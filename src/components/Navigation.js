import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const Navigation = () => 
  <Navbar>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Featured Work</NavItem>
        <NavItem eventKey={4} href="#">Services</NavItem>
        <NavItem eventKey={5} href="#">Works</NavItem>
        <NavItem eventKey={6} href="#">Contact</NavItem>
      </Nav>			      
    </Navbar.Collapse>
  </Navbar>
