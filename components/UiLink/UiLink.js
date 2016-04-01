import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import simpleStorage from 'simplestorage.js';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

class UiLink extends Component {
  getLink() {
    let value = simpleStorage.get('ref-key');

    if (this.getQueryStringValue('ref') !== null) {
      value = this.getQueryStringValue('ref');
      return `http://ui.stackable.space/login?ref=${value}`;
    } else if (_.isUndefined(value)) {
      return 'http://ui.stackable.space';
    } else {
      return `http://ui.stackable.space/login?ref=${value}`;
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
    const { children, ...props } = this.props;
    if (canUseDOM) {
      return <a {...props} href={this.getLink()}>{children}</a>;
    } else {
      return <a {...props} href="http://ui.stackable.space">{children}</a>;
    }
  }
}

export default UiLink;
