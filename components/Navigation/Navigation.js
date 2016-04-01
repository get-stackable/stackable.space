import React from 'react';
import './Navigation.scss';
import UiLink from '../../components/UiLink';

class Navigation extends React.Component {
  componentDidMount() {
    $('.ui.dropdown.mobile').dropdown();
  }

  goToHowItWorks = () => {
    if (window.location.pathname === '/') {
      smoothScroll.animateScroll('#how-it-works')
    } else {
      window.location.href = '/#how-it-works';
    }
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <a className="header item" href="/" style={{'fontWeight': '800'}}>
            <img className="logo" src="logo.png"/>
            stackable
          </a>
          <a className="item desktop" onClick={this.goToHowItWorks}>
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
            <UiLink className="ui inverted button">
              Login
            </UiLink>
          </div>
          <div className="ui right inverted button dropdown item mobile">
            Menu
            <div className="menu">
              <a className="item" onClick={this.goToHowItWorks}>
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
              <UiLink className="item">
                <strong>Login</strong>
              </UiLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
