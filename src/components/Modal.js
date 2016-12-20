import React, { Component } from 'react';
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap';

export class SectionModal extends Component {
  render() {
    const { isOpen, handleOpen, handleClose } = this.props
    return ( 
      <Grid className="section-l">
        <Row>
          <Col xs={12}>
            <Button bsStyle="warning" bsSize="small" onClick={handleOpen}>
              Launch modal
            </Button>  
            <Modal show={isOpen}>
              <Modal.Header>
                <Modal.Title>Modal heading
                  <button onClick={handleClose} type="button" className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Text in a modal</h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <hr />
                <h4>Overflowing text to show scroll behavior</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
              </Modal.Footer>                         
            </Modal>   
          </Col>
        </Row>
      </Grid>      
    )
  }
}