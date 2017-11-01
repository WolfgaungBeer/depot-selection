import { createSelector } from 'reselect';

const depotsFromState = state => state.depots;

const depotFromState = (state, ownProps) => state.depots.find(s => s.id === ownProps.match.params.id);

export const depotsSelector = createSelector(
    depotsFromState,
    depots => depots,
);

export const depotSelector = createSelector(
    depotFromState,
    depot => depot,
);
