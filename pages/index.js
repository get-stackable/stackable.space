import React, { Component } from 'react';
import MasterHead from '../components/MasterHead';
import AboutApis from '../components/AboutApis';
import FeatureOne from '../components/FeatureOne';
import FeatureTwo from '../components/FeatureTwo';
import Libraries from '../components/Libraries';
import Footer from '../components/Footer';

export default class extends Component {

  render() {
    return (
      <div>
        <MasterHead />
        <AboutApis />
        <FeatureOne />
        <FeatureTwo />
        <Libraries />
        <Footer />
      </div>
    );
  }

}