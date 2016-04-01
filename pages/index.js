import React, { Component } from 'react';
import MasterHead from '../components/MasterHead';
import AboutApis from '../components/AboutApis';
import FeatureOne from '../components/FeatureOne';
import FeatureTwo from '../components/FeatureTwo';
import Libraries from '../components/Libraries';
import Footer from '../components/Footer';
import simpleStorage from 'simplestorage.js';

export default class extends Component {
  componentDidMount() {
    if (this.getQueryStringValue('ref') !== null) {
      simpleStorage.set('ref-key', this.getQueryStringValue('ref'), {TTL: 3600000}); //1 hour
    }
  }

  getQueryStringValue (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

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
