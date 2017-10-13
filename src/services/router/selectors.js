import { createSelector } from 'reselect';

const routeFromState = state => state.router;

export const routeSelector = createSelector(
    routeFromState,
    router => ({ pathname: router.pathname, search: router.search }),
);
