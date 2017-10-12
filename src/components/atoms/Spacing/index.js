import React from 'react';
import { string, bool, node } from 'prop-types';

const propTypes = {
    size: string,
    top: bool,
    left: bool,
    bottom: bool,
    right: bool,
    children: node,
};

const defaultProps = {
    size: undefined,
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined,
    children: undefined,
};

const style = (size, top, left, bottom, right) => {
    let pos = 'top';
    if (left) pos = 'left';
    if (bottom) pos = 'bottom';
    if (right) pos = 'right';
    return `padding-${pos}: ${size || '1rem'};`;
};

const Spacing = ({ size, top, left, bottom, right, children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                ${style(size, top, left, bottom, right)}
            }
        `}</style>
    </div>
);

Spacing.propTypes = propTypes;
Spacing.defaultProps = defaultProps;

export default Spacing;
