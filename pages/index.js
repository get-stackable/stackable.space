import React, { Component } from 'react';
import MasterHead from '../components/MasterHead';
import AboutApis from '../components/AboutApis';
import ContainersPreview from '../components/ContainersPreview';

export default class extends Component {

  render() {
    return (
      <div>
        <MasterHead />
        <AboutApis />
        <ContainersPreview />
      </div>
    );
  }

}
