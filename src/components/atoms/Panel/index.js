import React from 'react';
import { bool, string, node } from 'prop-types';

const propTypes = {
    color: string,
    shadow: bool,
    borderRadius: string,
    children: node,
};

const defaultProps = {
    color: undefined,
    shadow: undefined,
    borderRadius: undefined,
    children: undefined,
};

const Panel = ({ color, shadow, borderRadius, children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                width: 100%;
                height: 100%;
                background-color: ${color};
                ${shadow && 'box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.56)'};
                ${borderRadius && `border-radius: ${borderRadius}`};
            }
        `}</style>
    </div>
);

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default Panel;
