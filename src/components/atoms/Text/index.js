import React from 'react';
import { string, bool, func, node } from 'prop-types';

const propTypes = {
    color: string,
    scale: string,
    heading: bool,
    injectStyle: func,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    heading: undefined,
    injectStyle: undefined,
    children: undefined,
};

const Text = ({ color, scale, heading, injectStyle, children }) => (
    <span className={heading ? 'scado-text-heading' : 'scado-text'}>
        {children}
        <style jsx>{`
            span {
                color: ${color};
                font-size: ${scale};
                ${injectStyle && injectStyle({ color, scale, heading })}
            }
        `}</style>
    </span>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
