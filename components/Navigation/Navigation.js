import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        <a className="header item" style={{'fontWeight': '800'}}>
          <img className="logo" src="logo.png"/>
          stackable
        </a>
        <a className="item" href="#how-it-works">
          How it works
        </a>
        <a className="item">
          <strong>Pricing</strong>
        </a>
        <div className="right menu">
          <a className="item" href="http://slack.stackable.space">
            Help & Support
          </a>
          <a className="item" href="http://docs.stackable.space">
            Documentation
          </a>
          <a className="item" href="http://blog.stackable.space">
            Blog
          </a>
          <a className="ui inverted button" href="http://ui.stackable.space">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
