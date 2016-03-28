import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="four wide column">
            <h4 className="ui inverted header">Help & Support</h4>
            <div className="ui inverted link list">
              <a href="http://slack.stackable.space" className="item">Slack</a>
              <a href="https://twitter.com/GetStackable" className="item">Twitter</a>
              <a href="https://www.facebook.com/Stackablespace-1079849398701825/" className="item">Facebook</a>
              <a href="mailto:hi@appfuel.co.uk" className="item">Email</a>
              <a href="http://docs.stackable.space" className="item">Documentation</a>
            </div>
          </div>
          <div className="four wide column">
            <h4 className="ui inverted header">Libraries</h4>
            <div className="ui inverted link list">
              <a href="https://github.com/get-stackable/stackable-javascript" className="item">Javascript</a>
              <a href="https://github.com/get-stackable/stackable-javascript" className="item">NodeJS</a>
              <a href="https://github.com/get-stackable/stackable-php" className="item">PHP</a>
              <a href="#" className="item">iOS / Swift</a>
              <a href="#" className="item">Android</a>
            </div>
          </div>
          <div className="four wide column">
            <h4 className="ui inverted header">Updates</h4>
            <div className="ui inverted link list">
              <a href="http://blog.stackable.space" className="item">Blog</a>
              <a href="#" className="item">Newsletter</a>
              <a href="/about" className="item">About</a>
              <a href="/careers" className="item">Careers</a>
            </div>
          </div>
          <div className="four wide column">
            <h4 className="ui inverted header">&copy; 2016 Stackable</h4>
            <p><a href="http://www.appfuel.co.uk" className="link">appfuel.co.uk</a> -  boutique javascript agency</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
