import React from 'react';
import { string } from 'prop-types';

const propTypes = {
    size: string,
};

const defaultProps = {
    size: undefined,
};

const Spacing = ({ size }) => (
    <div className={`spacing--${size}`} />
);

Spacing.propTypes = propTypes;
Spacing.defaultProps = defaultProps;

export default Spacing;
