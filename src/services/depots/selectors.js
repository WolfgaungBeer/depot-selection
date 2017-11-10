import { createSelector } from 'reselect';

const depotsFromState = state => state.depots;
const depotFromState = (state, id) => state.depots.find(s => s.id === id);

export const depotsSelector = createSelector(
    depotsFromState,
    depots => depots,
);

export const depotSelector = createSelector(
    depotFromState,
    depot => depot,
);
