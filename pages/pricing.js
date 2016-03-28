import React, { Component } from 'react';
import PageHeading from '../components/PageHeading';
import Libraries from '../components/Libraries';
import Footer from '../components/Footer';
import PricingBasic from '../components/PricingBasic';

export default class extends Component {

  render() {
    return (
      <div>
        <PageHeading
          title="Pricing"
          subTitle="No credit card required"/>
        <PricingBasic />
        <Libraries />
        <Footer />
      </div>
    );
  }

}
