import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        <a className="header item">
          <img className="logo" src="logo.png"/>
          stackable
        </a>
        <a className="item">
          How it works
        </a>
        <a className="item">
          <strong>Pricing</strong>
        </a>
        <div className="right menu">
          <a className="item">
            Help & Support
          </a>
          <a className="item">
            Documentation
          </a>
          <a className="ui inverted button">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
