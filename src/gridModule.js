import React from 'react';
import { Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem, ProgressBar } from 'react-bootstrap';

export const grid = <Grid bsClass="container-fluid alert-success">
          <Grid bsClass="container alert-info">
            <Row className="show-grid">
              <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
              <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col md={6}><ProgressBar bsStyle="warning" active now={45} /></Col>
              <Col md={6}>
                <ButtonToolbar>
                  <DropdownButton bsStyle="danger" title="Button danger" id="dropdown-size-medium">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
                </ButtonToolbar>   
              </Col>
            </Row>
          </Grid>
        </Grid>;
