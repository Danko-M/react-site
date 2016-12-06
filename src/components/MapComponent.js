import React from 'react';
import { Grid, Row, Panel } from 'react-bootstrap';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import IconCompass from './icons/IconCompass';


// To do
// 1) Move state to App component
// 2) Use ES6 - export class MyComponent extends React.Component

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

export const MapComponent = React.createClass({
	getInitialState() {
    return {
      open: true
    }
  },

  onMapCreated(map) {
    map.setOptions({
      // disableDefaultUI: true
    });
    this.setState({open: false})
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
    	<Grid fluid={true} className="map">
    		<Row>
    		<Panel onClick={ ()=> this.setState({ open: !this.state.open })} className="text-center bg-orange">
          <IconCompass /> Open The Location Map
        </Panel>
        <Panel collapsible expanded={this.state.open} className="map-panel">          
		      <Gmaps
		        width={'100%'}
		        height={'400px'}
		        lat={coords.lat}
		        lng={coords.lng}
		        zoom={12}
		        loadingMessage={'Be happy'}
		        params={{v: '3.exp', key: 'AIzaSyDdTztUmUYeXg21I-fOcmVWia5qX7MFyi4'}}
		        onMapCreated={this.onMapCreated}>
		        	{/*<Marker
		          lat={coords.lat}
		          lng={coords.lng}
		          draggable={true}
		          onDragEnd={this.onDragEnd} />*/}
			        <InfoWindow
			          lat={coords.lat}
			          lng={coords.lng}
			          content={'<strong>Hello, React</strong>'}
			          onCloseClick={this.onCloseClick} />
			        <Circle
			          lat={coords.lat}
			          lng={coords.lng}
			          strokeColor={'#ffb647'}
			          fillColor={'#ffb647'}
			          radius={500}
			          onClick={this.onClick} />
		      	</Gmaps>
		      </Panel>
    		</Row>
    	</Grid>
    );
  }

});

	     
