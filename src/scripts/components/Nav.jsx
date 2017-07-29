import React from 'react';

const Nav = ({ title }) => (
  <div className="nav">
    <span className="logo">{title || 'Cooking App'}</span>
  </div>
);

Nav.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Nav;
