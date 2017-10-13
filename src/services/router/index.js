import history from '../../history';

export { default as reducer } from './reducer';
export * from './actions';
export * from './selectors';

export const push = path => history.push(path);
