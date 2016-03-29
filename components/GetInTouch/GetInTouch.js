import React from 'react';
import './GetInTouch.scss';

class GetInTouch extends React.Component {
  render() {
    return (
      <div className="ui fluid container get touch">
        <div className="ui center aligned container">
          <div className="ui large main inverted header">
            Need something a bit special? get in touch.
          </div>
          <a className="big ui yellow button" href="#">
            contact us
          </a>
        </div>
      </div>
    )
  }
}

export default GetInTouch;
