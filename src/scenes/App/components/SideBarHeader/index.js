import React from 'react';
import { string } from 'prop-types';
import { Flex, Spacing, Icon, Text } from 'scado';
import theme from '../../../theme';

const { color, scale } = theme;

const propTypes = {
    icon: string,
    title: string,
};

const defaultProps = {
    icon: undefined,
    title: undefined,
};

const SideBarHeader = ({ icon, title }) => (
    <div>
        <Flex justifyContent="center" alignItems="center">
            <Spacing size="0.5rem" right>
                <Icon color={color.secondary} scale={scale.xl}>{icon}</Icon>
            </Spacing>
            <Text color={color.lightGray} scale={scale.xl} heading>{title}</Text>
        </Flex>
        <style jsx>{`
            div {
                width: 100%;
                height: 4rem;
                border-bottom-style: solid;
                border-bottom-width: 1px;
                border-bottom-color: ${theme.color.lightGray};
            }
        `}</style>
    </div>
);

SideBarHeader.propTypes = propTypes;
SideBarHeader.defaultProps = defaultProps;

export default SideBarHeader;
