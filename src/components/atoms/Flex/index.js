import React from 'react';
import { bool, string, func, node } from 'prop-types';

const propTypes = {
    inline: bool,
    justifyContent: string,
    alignItems: string,
    injectStyle: func,
    children: node,
};

const defaultProps = {
    inline: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    injectStyle: undefined,
    children: undefined,
};

const Flex = ({ inline, justifyContent, alignItems, injectStyle, children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                width: 100%;
                height: 100%;
                display: ${inline ? 'inline-flex' : 'flex'};
                justify-content: ${justifyContent || 'flex-start'};
                align-items: ${alignItems || 'stretch'};
                ${injectStyle && injectStyle({ inline, justifyContent, alignItems })}
            }
        `}</style>
    </div>
);

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default Flex;
