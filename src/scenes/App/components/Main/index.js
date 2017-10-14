import React from 'react';
import { node } from 'prop-types';
import theme from '../../../theme';

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const Main = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                position: absolute;
                top: 0px;
                left: ${theme.app.sideMenuWidth};
                width: calc(100% - ${theme.app.sideMenuWidth});
                height: 100%;
                background-color: ${theme.app.backgroundColor};
            }
        `}</style>
    </div>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
