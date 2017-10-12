import React from 'react';
import { node } from 'prop-types';
import { Flex, Icon, Text } from 'scado';
import theme from '../../../theme';

const { color, scale } = theme;

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const SideBarHeader = ({ children }) => (
    <Flex justifyContent="center" alignItems="center">
        <div>
            <Icon color={color.lightGray} scale={scale.xl}>apps</Icon>
            <Text color={color.lightGray} scale={scale.xl} heading>Depot Selection</Text>
            <style jsx>{`
                div {
                    padding: 1rem 0;
                    border-bottom-style: solid;
                    border-bottom-color: ${color.lightGray};
                    border-bottom-width: 1px;
                }
            `}</style>
        </div>
    </Flex>
);

SideBarHeader.propTypes = propTypes;
SideBarHeader.defaultProps = defaultProps;

export default SideBarHeader;
