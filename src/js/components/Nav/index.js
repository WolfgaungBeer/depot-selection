import React from 'react';
import { node } from 'prop-types';

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const Nav = ({ children }) => (
    <nav className="nav">{children}</nav>
);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
