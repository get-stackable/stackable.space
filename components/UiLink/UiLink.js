import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import simpleStorage from 'simplestorage.js';

class UiLink extends Component {
  getLink() {
    let value = simpleStorage.get('ref-key');

    if (_.isUndefined(value)) {
      return 'http://ui.stackable.space';
    } else {
      return `http://ui.stackable.space/login?ref=${value}`;
    }
  }

  render() {
    const { children, ...props } = this.props;

    return <a {...props} href={this.getLink()}>{children}</a>;
  }
}

export default UiLink;
