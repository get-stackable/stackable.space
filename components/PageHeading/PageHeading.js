import React from 'react';
import './PageHeading.scss';

class PageHeading extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="ui dark fluid container">
        <div className="ui center aligned container pageHeading">
          <div className="ui huge inverted header">
            {this.props.title}
            <div className="sub header">
              {this.props.subTitle}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeading;
