import React from 'react';
import { node } from 'prop-types';
import theme from '../../../theme';

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const SideBar = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                position: absolute;
                top: 0px;
                left: 0px;
                width: ${theme.app.sideMenuWidth};
                height: 100%;
                background-color: ${theme.color.darkGray};
            }
        `}</style>
    </div>
);

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

export default SideBar;
