import React from 'react';
import { string, node } from 'prop-types';
import { Flex, Spacing, Text } from 'scado';

const propTypes = {
    title: string,
    children: node,
};

const defaultProps = {
    title: undefined,
    children: undefined,
};

const PageHeader = ({ title, children }) => (
    <Flex justifyContent="space-between" alignItems="center">
        <Spacing scale="m" left>
            <Text.H2>{title}</Text.H2>
        </Spacing>
        <Spacing scale="m" right>
            {children}
        </Spacing>
    </Flex>
);

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;
