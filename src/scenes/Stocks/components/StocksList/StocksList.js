import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { Flex } from 'scado';
import { Wrapper } from 'shared-components';
import ListItem from '../StocksListItem';

const propTypes = {
    items: arrayOf(shape({
        id: string,
        token: string,
        name: string,
        dataPath: string,
    })),
    editItem: func,
    deleteItem: func,
};

const defaultProps = {
    items: undefined,
    editItem: undefined,
    deleteItem: undefined,
};

const StocksList = ({ items, editItem, deleteItem }) => (
    <Flex justifyContent="center" alignItems="center">
        <Wrapper width="95%" height="95%">
            {items && items.map(i =>
                (<ListItem
                    key={i.id}
                    item={i}
                    editItem={() => editItem(i)}
                    deleteItem={() => deleteItem(i.id)}
                />),
            )}
        </Wrapper>
    </Flex>
);

StocksList.propTypes = propTypes;
StocksList.defaultProps = defaultProps;

export default StocksList;
