import React, { Component } from 'react';
import Libraries from '../components/Libraries';
import Footer from '../components/Footer';

export default class extends Component {

  render() {
    return (
      <div>
        <div style={{'textAlign': 'center'}}>
          <h1>Careers</h1>
          <p>Coming soon.</p>
        </div>
        <Libraries />
        <Footer />
      </div>
    );
  }

}
