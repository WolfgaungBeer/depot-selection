import React from 'react';
import { string, func, node } from 'prop-types';
import theme from '../../theme';

const propTypes = {
    color: string,
    scale: string,
    onClick: func,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    onClick: undefined,
    children: undefined,
};

const Icon = ({ color, scale, onClick, children }) => {
    const buttonProps = { className: theme.iconClassName, onClick, role: 'button', tabIndex: 0 };
    const iconProps = { className: theme.iconClassName };
    const props = onClick ? buttonProps : iconProps;
    return (
        <i {...props}>
            {children}
            <style jsx>{`
                i {
                    color: ${theme.color[color]};
                    font-size: ${theme.fontScale[scale]};
                    ${onClick && 'cursor: pointer;'};
                    vertical-align: -15%;
                }
            `}</style>
        </i>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
