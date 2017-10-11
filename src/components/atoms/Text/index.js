import React from 'react';
import { string, bool, node } from 'prop-types';
import theme from '../../theme';

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
    <span>
        {children}
        <style jsx>{`
            span {
                color: ${theme.color[color]};
                font-size: ${theme.fontScale[scale]};
                font-family: ${heading ? theme.fonts.heading : theme.fonts.paragraph};
            }
        `}</style>
    </span>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
