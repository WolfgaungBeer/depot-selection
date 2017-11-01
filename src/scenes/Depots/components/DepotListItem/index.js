import React from 'react';
import { shape, string, func } from 'prop-types';
import { Flex, Icon, Text } from 'scado';
import { DepotWrapper as Wrapper } from './styled';
import MultiSelect from '../MultiSelect';

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

const DepotListItem = ({ item, editItem, deleteItem }) => (
    <Wrapper width="100%" height="3rem">
        <Flex justifyContent="space-between" alignItems="center">
            <Flex flex="0 1 5%" alignItems="center">
                <Icon color="secondary" scale="xl">bubble_chart</Icon>
            </Flex>
            <Flex flex="0 1 30%" alignItems="center">
                <Text.Span>Name: {item.name}</Text.Span>
            </Flex>
            <Flex flex="0 1 40%" alignItems="center">
                <MultiSelect name="stocks" input={{ value: item.stocks }} multi disabled />
            </Flex>
            <Flex flex="0 1 10%" alignItems="center">
                <Icon scale="l" onClick={editItem}>mode_edit</Icon>
                <Icon color="error" scale="xl" onClick={deleteItem}>clear</Icon>
            </Flex>
        </Flex>
    </Wrapper>
);

DepotListItem.propTypes = propTypes;
DepotListItem.defaultProps = defaultProps;

export default DepotListItem;
