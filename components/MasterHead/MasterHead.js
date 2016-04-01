import React from 'react';
import './MasterHead.scss';
import UiLink from '../../components/UiLink';

function MasterHead() {
  return (
    <div className="ui dark fluid container">
      <div className="ui center aligned container masterhead">
        <div className="ui large inverted header">
          Create Dynamic Content in <span className="underline">Seconds</span>
          <div className="sub header">
            enjoy an instant API & Dashboard
          </div>
        </div>
        <div className="try free">
          <UiLink className="ui yellow button">TRY FREE</UiLink>
          <p>developer plan always <span className="underline">free</span></p>
        </div>
        <img className="banner" src="master-head-banner.jpg"/>
      </div>
    </div>
  );
}

export default MasterHead;
