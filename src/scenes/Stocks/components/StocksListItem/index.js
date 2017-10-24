import React from 'react';
import { shape, string, func } from 'prop-types';
import { Flex, Icon, Text } from 'scado';
import { StocksWrapper as Wrapper } from './styled';

const propTypes = {
    item: shape({
        id: string,
        token: string,
        name: string,
        dataPath: string,
    }),
    editItem: func,
    deleteItem: func,
};

const defaultProps = {
    item: undefined,
    editItem: undefined,
    deleteItem: undefined,
};

const StocksListItem = ({ item, editItem, deleteItem }) => (
    <Wrapper width="100%" height="3rem">
        <Flex justifyContent="space-between" alignItems="center">
            <Flex flex="0 1 5%" alignItems="center">
                <Icon color="secondary" scale="xl">insert_chart</Icon>
            </Flex>
            <Flex flex="0 1 15%" alignItems="center">
                <Text.Span>Kürzel: {item.token}</Text.Span>
            </Flex>
            <Flex flex="0 1 30%" alignItems="center">
                <Text.Span>Name: {item.name}</Text.Span>
            </Flex>
            <Flex flex="0 1 40%" alignItems="center">
                <Text.Span>Dateipfad: {item.dataPath}</Text.Span>
            </Flex>
            <Flex flex="0 1 10%" alignItems="center">
                <Icon scale="l" onClick={editItem}>mode_edit</Icon>
                <Icon color="error" scale="xl" onClick={deleteItem}>clear</Icon>
            </Flex>
        </Flex>
    </Wrapper>
);

StocksListItem.propTypes = propTypes;
StocksListItem.defaultProps = defaultProps;

export default StocksListItem;
