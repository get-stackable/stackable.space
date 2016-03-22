import React from 'react';
import './FeatureOne.scss';

function FeatureOne() {
  return (
    <div className="ui dark fluid container preview">
      <div className="ui container">
        <div className="ui two column grid features">
          <div className="left column">
            <div className="image">
              <img src="icon-container.png" />
            </div>
            <div className="ui huge inverted header">
              Create powerful data
              <div className="sub header">
                Powerful containers hold your content they are magic too
              </div>
            </div>
            <div className="ui bulleted list">
              <div className="item">Tons of advanced Field types supported</div>
              <div className="item">Validate Fields Instantly</div>
              <div className="item">Preview the container as it might look to an editor</div>
              <div className="item">Advanced Image support to Amazon Buckets</div>
              <div className="item">Drag and Drop & Container Relationships</div>
            </div>
          </div>
          <div className="right column">
            <img className="container preview" src="container-preview.png" />
            <br />
            <a className="link">watch our video on creating an app</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureOne;
