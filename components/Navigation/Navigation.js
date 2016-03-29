import React from 'react';
import './Navigation.scss';
import Link from '../Link';

class Navigation extends React.Component {
  componentDidMount() {
    $('.ui.dropdown.mobile').dropdown();
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <a className="header item" href="/" style={{'fontWeight': '800'}}>
            <img className="logo" src="logo.png"/>
            stackable
          </a>
          <a className="item desktop" href="/#how-it-works">
            How it works
          </a>
          <a className="item desktop" href="/pricing">
            <strong>Pricing</strong>
          </a>
          <div className="right menu desktop">
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
          <div className="ui right inverted button dropdown item mobile">
            Menu
            <div className="menu">
              <a className="item" href="/#how-it-works">
                How it works
              </a>
              <a className="item">
                <strong>Pricing</strong>
              </a>
              <a className="item" href="http://slack.stackable.space">
                Help & Support
              </a>
              <a className="item" href="http://docs.stackable.space">
                Documentation
              </a>
              <a className="item" href="http://blog.stackable.space">
                Blog
              </a>
              <a className="item" href="http://ui.stackable.space">
                <strong>Login</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
