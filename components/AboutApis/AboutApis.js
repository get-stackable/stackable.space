import React from 'react';
import _ from 'underscore';
import './AboutApis.scss';

let consoleCode = [{
  className: '.typed-console-nodejs',
  strings: ["var stackable = require('stackable');<br />var stackable = new Stackable('MY-PUBLIC-KEY');<br />stackable.getAllItems(function (error, result) {<br />&nbsp;&nbsp;console.log(error, result);<br />});"]
}, {
  className: '.typed-console-php',
  strings: ["$stackable = new Stackable('MY-PUBLIC-KEY');<br />$result = $stackable->getAllItems();<br />print_r($result);"]
}, {
  className: '.typed-console-curl',
  strings: ["curl 'https://api.stackable.space/v1/items -d' 'token=BPGhLf9D9FEM'"]
}];

class AboutApis extends React.Component {
  componentDidMount() {
    $('.console .menu .item').tab();

    setTimeout(() => {
      _.each(consoleCode, (item) => {
        $(item.className).typed({
          typeSpeed: 0,
          backDelay: 4000,
          contentType: 'html',
          loop: true,
          loopCount: 4,
          strings: item.strings
        });
      });
    }, 1500);
  }

  render() {
    return (
      <div className="ui fluid container about apis">
        <div className="ui center aligned container">
          <div className="ui large header">
            Stackable delivers your content to any channel
            <div className="sub header">
              power your next generataion web or mobile app
            </div>
          </div>
        </div>
        <div className="ui fluid dark container" id="how-it-works">
          <div className="ui center aligned container">
            <div className="ui three column very relaxed grid features">
              <div className="column">
                <div className="icon">
                  <img src="greenbx.png" />
                </div>
                <p>Create your containers with our magic creator</p>
              </div>
              <div className="ui vertical divider">
                <img src="arrowblue.png" />
              </div>
              <div className="column">
                <div className="icon">
                  <img src="itemblue.png" />
                </div>
                <p>Manage your container items with ease</p>
              </div>
              <div className="ui vertical divider">
                <img src="arrowred.png" />
              </div>
              <div className="column">
                <div className="icon">
                  <img src="docred.png" />
                </div>
                <p>Deliver your data</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ui console fluid container">
          <div className="ui container">
            <div className="ui stackable two columns grid">
              <div className="column">
                <h3 className="ui header">Easy to use API for all content</h3>
                <p>Content done! great now get ready to rock our API so you can use this on any web app , mobile device or project you can dream of.</p>
                <p><strong>No more server headaches we got you covered.</strong></p>
                <p>Stackble creates an indivitalised api around your data and sends over secure SSL.</p>
                <p>Head over on to our <a href="https://docs.stackable.space">docs</a> to find out more about our api</p>
                <div className="check github">
                  <a className="link" href="https://github.com/get-stackable">
                    Checkout our Github
                    <i className="github icon"></i>
                  </a>
                </div>
              </div>
              <div className="column">
                <div className="ui secondary menu">
                  <a className="item active" data-tab="nodejs">node</a>
                  <a className="item" data-tab="php">php</a>
                  <a className="item" data-tab="curl">curl</a>
                </div>
                <div className="ui tab active" data-tab="nodejs">
                  <div className="typed-console-container">
                    <span className="typed-console-nodejs" />
                  </div>
                </div>
                <div className="ui tab" data-tab="php">
                  <div className="typed-console-container">
                    <span className="typed-console-php" />
                  </div>
                </div>
                <div className="ui tab" data-tab="curl">
                  <div className="typed-console-container">
                    <span className="typed-console-curl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutApis;
