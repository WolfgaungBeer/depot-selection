import React from 'react';
import { string, bool, node } from 'prop-types';

const propTypes = {
    color: string,
    scale: string,
    heading: bool,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    heading: undefined,
    children: undefined,
};

const Text = ({ color, scale, heading, children }) => (
    <span className={heading ? 'scado-text-heading' : 'scado-text'}>
        {children}
        <style jsx>{`
            span {
                color: ${color};
                font-size: ${scale};
            }
        `}</style>
    </span>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
