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
import { Footer } from './components/Footer';
import { SectionModal } from './components/Modal';


class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showAlert: true
    };
    this.closeAlert = this.closeAlert.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

        <SectionModal handleOpen={this.openModal} handleClose={this.closeModal} isOpen={this.state.showModal} />
        
        <Footer />
      </div>      
    );
  }
}

export default App;
