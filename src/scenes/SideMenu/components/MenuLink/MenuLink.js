import React from 'react';
import { string, bool, node } from 'prop-types';
import { Link } from 'react-router-dom';
import { Flex, Icon, Spacing, Text } from 'scado';
import { LinkWrapper, Triangle } from './styled';

const propTypes = {
    icon: string,
    to: string,
    active: bool,
    children: node,
};

const defaultProps = {
    icon: undefined,
    to: undefined,
    active: undefined,
    children: undefined,
};

const MenuLink = ({ icon, to, active, children }) => (
    <Link to={to}>
        <LinkWrapper>
            <Flex justifyContent="space-between" alignItems="center">
                <Flex flex="1 0 5%" />
                <Flex flex="1 0 80%" alignItems="center">
                    <Spacing scale="m" right>
                        <Icon color="lightGray" scale="l">{icon}</Icon>
                    </Spacing>
                    <Text.Span color="lightGray" scale="l">{children}</Text.Span>
                </Flex>
                <Flex flex="1 0 15%" alignItems="center">
                    {active && <Triangle />}
                </Flex>
            </Flex>
        </LinkWrapper>
    </Link>
);

MenuLink.propTypes = propTypes;
MenuLink.defaultProps = defaultProps;

export default MenuLink;
