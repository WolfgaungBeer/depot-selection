import { createSelector } from 'reselect';

const depotsFromState = state => state.depots;

export const depotsSelector = createSelector(
    depotsFromState,
    depots => depots,
);
