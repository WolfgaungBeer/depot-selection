import React from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { Flex, Icon, Text } from 'scado';
import theme from '../../../theme';

const { color, scale, app } = theme;

const propTypes = {
    active: bool,
    to: string,
    icon: string,
    text: string,
};

const defaultProps = {
    active: undefined,
    to: undefined,
    icon: string,
    text: undefined,
};

const MenuItem = ({ active, to, icon, text }) => (
    <Link to={to}>
        <Flex justifyContent="center" alignItems="center">
            <div className="left">
                <Icon color={color.lightGray} scale={scale.l}>{icon}</Icon>
                <Text color={color.lightGray} scale={scale.l}> {text}</Text>
            </div>
            {active && <div className="right" />}
        </Flex>
        <style jsx>{`
            .left {
                padding: 0.7rem 0 0.7rem 1rem;
                flex: 1 1 80%;
            }
            .right {
                flex: 1 1 20%;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 10px 10px 0;
                border-color: transparent ${app.backgroundColor} transparent transparent;
            }
        `}</style>
    </Link>
);

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
