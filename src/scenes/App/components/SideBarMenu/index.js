import React from 'react';
import { node } from 'prop-types';

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const SideBarMenu = ({ children }) => (
    <div>{children}</div>
);

SideBarMenu.propTypes = propTypes;
SideBarMenu.defaultProps = defaultProps;

export default SideBarMenu;
