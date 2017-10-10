import React from 'react';
import { node } from 'prop-types';

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const SideMenuHeader = ({ children }) => (
    <div className="side-menu-header">
        <div className="side-menu-header-wrapper">{children}</div>
    </div>
);

SideMenuHeader.propTypes = propTypes;
SideMenuHeader.defaultProps = defaultProps;

export default SideMenuHeader;
