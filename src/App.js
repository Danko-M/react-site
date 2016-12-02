import React, { Component } from 'react';
import { SectionAlert } from './components/SectionAlert';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SectionA } from './components/SectionA';
import { SectionB } from './components/SectionB';
import { SectionC } from './components/SectionC';
import { SectionD } from './components/SectionD';
import { SectionE } from './components/SectionE';
import { SectionF } from './components/SectionF';

import { SectionI } from './components/SectionI';
import { SectionJ } from './components/SectionJ';
import { SectionK } from './components/SectionK';
import { Footer } from './components/Footer';
import { SectionModal } from './components/Modal';
import { MapComponent } from './components/MapComponent';


class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showAlert: true,
      message: ""
    };
    this.closeAlert = this.closeAlert.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this._setMessage = this._setMessage.bind(this);
  }
  
  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeAlert() {
    this.setState({ showAlert: false });
  }

  _setMessage(msg) {
    this.setState({ message: msg });
  }
  render() {
    return (
      <div>
        <SectionAlert onDismiss={this.closeAlert} visible={this.state.showAlert} />
        <Navigation />
        <Hero />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        <SectionF />

        <SectionI />
        <SectionJ />
        <SectionK />

        <SectionModal handleOpen={this.openModal} handleClose={this.closeModal} isOpen={this.state.showModal} />
        <MapComponent />
        <Footer />
      </div>      
    );
  }
}

export default App;
