import React, { Component } from 'react';
import PageHeading from '../components/PageHeading';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default class extends Component {

  render() {
    return (
      <div>
        <PageHeading
          title="Contact us"
          subTitle="Feel free to drop a message!"/>
        <ContactForm />
        <Footer />
      </div>
    );
  }

}
