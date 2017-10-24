import { createSelector } from 'reselect';

const stocksFromState = state => state.stocks;

const stockFromState = (state, ownProps) => state.stocks.find(s => s.id === ownProps.match.params.id);

export const stocksSelector = createSelector(
    stocksFromState,
    stocks => stocks,
);

export const stockSelector = createSelector(
    stockFromState,
    stock => stock,
);
