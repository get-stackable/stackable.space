import React from 'react';
import './MasterHead.scss';

function MasterHead() {
  return (
    <div className="ui dark fluid container">
      <div className="ui center aligned container masterhead">
        <div className="ui large inverted header">
          API BASED CMS
          <div className="sub header">
            your content anywhere
          </div>
        </div>
        <div className="try free">
          <button className="ui yellow button">TRY FREE</button>
          <p>developer plan always <span className="underline">free</span></p>
        </div>
        <img className="banner" src="master-head-banner.jpg"/>
      </div>
    </div>
  );
}

export default MasterHead;
