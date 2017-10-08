import React from 'react';
import { node } from 'prop-types';

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const Icon = ({ children }) => (<i className="material-icons icon">{children}</i>);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
