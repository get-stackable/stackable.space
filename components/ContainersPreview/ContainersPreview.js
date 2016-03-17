import React from 'react';
import './ContainersPreview.scss';

function ContainersPreview() {
  return (
    <div className="ui dark fluid container containers preview">
      <div className="ui center aligned container">
        <div className="ui huge inverted header">
          Create powerful data
          <div className="sub header">
            our tools let you create simple or complex content
          </div>
        </div>
      </div>
      <div className="ui center aligned container">
        <div className="ui three columns grid features">
          <div className="column left text">
            <p>Describe your data easily</p>
          </div>
          <div className="column">
            <img className="container preview" src="container-preview.png" />
          </div>
          <div className="column right text">
            <p>Instant preview of data</p>
          </div>
        </div>
        <div className="ui grid">
          <div className="sixteen wide column">
            <a className="link">watch our video on creating an app</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainersPreview;
