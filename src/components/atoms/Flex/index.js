import React from 'react';
import { bool, string, node } from 'prop-types';

const propTypes = {
    inline: bool,
    justifyContent: string,
    alignItems: string,
    children: node,
};

const defaultProps = {
    inline: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    children: undefined,
};

const Flex = ({ inline, justifyContent, alignItems, children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                display: ${inline ? 'inline-flex' : 'flex'};
                justify-content: ${justifyContent || 'flex-start'};
                align-items: ${alignItems || 'stretch'};
            }
        `}</style>
    </div>
);

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default Flex;
