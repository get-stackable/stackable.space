import React from 'react';
import './FeatureTwo.scss';

function FeatureTwo() {
  return (
    <div className="ui container preview two">
      <div className="ui stackable two column grid features">
        <div className="right column">
          <img className="container preview" src="items-preview.png" />
          <br />
          <a className="link">watch our video on creating an app</a>
        </div>
        <div className="left column">
          <div className="image">
            <img src="itemblue.png" />
          </div>
          <div className="ui huge header">
            Dashboard Ready
            <div className="sub header">
              Now add content like a pro
            </div>
          </div>
          <div className="ui bulleted list">
            <div className="item">Simple UI anyone can add content not just database developers</div>
            <div className="item">Choose who can edit </div>
            <div className="item">Advanced text editors (like medium)</div>
            <div className="item">All your relationships just work!</div>
          </div>
          <a className="ui yellow button" href="http://ui.stackable.space">TRY FREE</a>
        </div>
      </div>
    </div>
  )
}

export default FeatureTwo;
