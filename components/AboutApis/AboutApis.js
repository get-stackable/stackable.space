import React from 'react';
import './AboutApis.scss';

function AboutApis() {
  return (
    <div className="ui fluid container about apis">
      <div className="ui center aligned container">
        <div className="ui large header">
          Save time. Be happy. Focus on what really matters
          <div className="sub header">
            who needs a big old cms with tons of headache stackup your ultra fast api and dashboard
          </div>
        </div>
      </div>
      <div className="ui divider"></div>
      <div className="ui center aligned container">
        <div className="ui three columns grid features">
          <div className="column">
            <div className="icon">
              <img src="icon-container.png" />
            </div>
            <p>Create your containers with our magic creator</p>
          </div>
          <div className="column">
            <div className="icon">
              <img src="icon-item.png" />
            </div>
            <p>Manage your container items with ease</p>
          </div>
          <div className="column">
            <div className="icon">
              <img src="icon-browser.png" />
            </div>
            <p>Share your new Dashboard</p>
          </div>
        </div>
      </div>
      <div className="ui container">
        <div className="ui two columns grid console">
          <div className="column">
            <h3 className="ui header">Easy to use API for all content</h3>
            <p>Content done! great now get ready to rock our API so you can use this on any web app , mobile device or project you can dream of.</p>
            <p>No more server headaches we got you covered.</p>
            <div className="check github">
              <a className="link">
                Checkout our Github
                <i className="github icon"></i>
              </a>
            </div>
          </div>
          <div className="column">
            console here
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutApis;
