import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { Flex } from 'scado';
import { Wrapper } from 'shared-components';
import ListItem from '../DepotListItem';

const propTypes = {
    items: arrayOf(shape({
        id: string,
        name: string,
        stocks: arrayOf(string),
    })),
    showCharts: func,
    editItem: func,
    deleteItem: func,
};

const defaultProps = {
    items: undefined,
    showCharts: undefined,
    editItem: undefined,
    deleteItem: undefined,
};

const DepotList = ({ items, showCharts, editItem, deleteItem }) => (
    <Flex justifyContent="center" alignItems="center">
        <Wrapper width="95%" height="95%">
            {items && items.map(i =>
                (<ListItem
                    key={i.id}
                    item={i}
                    showCharts={() => showCharts(i.id)}
                    editItem={() => editItem(i.id)}
                    deleteItem={() => deleteItem(i.id)}
                />),
            )}
        </Wrapper>
    </Flex>
);

DepotList.propTypes = propTypes;
DepotList.defaultProps = defaultProps;

export default DepotList;
