import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import TopBar from '../TopBar';

function Layout({ children }) {
  return (
    <div>
      <div className="ui dark fluid container">
        <TopBar />
        <Navigation />
      </div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
