import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import TopBar from '../TopBar';
import {VelocityComponent} from 'velocity-react';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSubComponent: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showSubComponent: 1});
    }, 30);
  }

  render() {
    return (
      <div>
        <div className="ui dark fluid container">
          <TopBar />
          <Navigation />
        </div>
        <VelocityComponent animation={{opacity: this.state.showSubComponent}} duration={220}>
          <div>
            {this.state.showSubComponent === 1 ? this.props.children : ''}
          </div>
        </VelocityComponent>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
