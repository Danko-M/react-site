import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export class MyBtn extends Component {
  render() {
  	const { onClick } = this.props
    return ( 
      <Button onClick={ onClick } bsStyle="success">Success EXt</Button>
    )
  }
}


