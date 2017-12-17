import React from 'react';
import { shape } from 'prop-types';
import { Flex, Text } from 'scado';
import { Wrapper } from 'shared-components';

const propTypes = {
    selectedDepot: shape({}),
};

const defaultProps = {
    selectedDepot: undefined,
};

const ChartInfo = ({ selectedDepot }) => {
    if (!selectedDepot) return null;
    const stocksInfo = selectedDepot.stocksInfo || [];

    return (
        <Flex justifyContent="center" alignItems="center">
            <Wrapper width="95%" height="95%">
                <ul>
                    {stocksInfo.map(stock =>
                        <li key={stock.id}><Text.Label>{stock.token} : {stock.name}</Text.Label></li>,
                    )}
                </ul>
            </Wrapper>
        </Flex>
    );
};

ChartInfo.propTypes = propTypes;
ChartInfo.defaultProps = defaultProps;

export default ChartInfo;
