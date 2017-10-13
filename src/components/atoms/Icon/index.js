import React from 'react';
import { string, func, node } from 'prop-types';

const propTypes = {
    color: string,
    scale: string,
    onClick: func,
    injectStyle: func,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    onClick: undefined,
    injectStyle: undefined,
    children: undefined,
};

const Icon = ({ color, scale, onClick, injectStyle, children }) => {
    const buttonProps = { className: 'material-icons scado-icon', onClick, role: 'button', tabIndex: 0 };
    const iconProps = { className: 'material-icons scado-icon' };
    const props = onClick ? buttonProps : iconProps;
    return (
        <i {...props}>
            {children}
            <style jsx>{`
                i {
                    color: ${color};
                    font-size: ${scale};
                    ${onClick && 'cursor: pointer;'};
                    vertical-align: -15%;
                    ${injectStyle && injectStyle({ color, scale })}
                }
            `}</style>
        </i>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
