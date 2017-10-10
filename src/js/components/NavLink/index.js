import React from 'react';
import { bool, func, node } from 'prop-types';

const propTypes = {
    active: bool,
    onClick: func,
    children: node,
};

const defaultProps = {
    active: undefined,
    onClick: undefined,
    children: undefined,
};

const NavLink = ({ active, onClick, children }) => (
    <div role="button" tabIndex={0} className="navlink" onClick={onClick}>
        <div className="left">{children}</div>
        {active && <div className="right" />}
    </div>
);

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
