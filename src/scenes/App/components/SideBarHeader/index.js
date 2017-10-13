import React from 'react';
import { string } from 'prop-types';
import { Flex, Icon, Text } from 'scado';
import theme from '../../../theme';
import { flexStyle } from './style';

const { color, scale } = theme;

const propTypes = {
    title: string,
};

const defaultProps = {
    title: undefined,
};

const SideBarHeader = ({ title }) => (
    <Flex justifyContent="center" alignItems="center" injectStyle={flexStyle}>
        <div>
            <Icon color={color.lightGray} scale={scale.xl}>apps</Icon>
            <Text color={color.lightGray} scale={scale.xl} heading>{title}</Text>
        </div>
        <style jsx>{`
            div { padding: 1rem 0; }
        `}</style>
    </Flex>
);

SideBarHeader.propTypes = propTypes;
SideBarHeader.defaultProps = defaultProps;

export default SideBarHeader;
