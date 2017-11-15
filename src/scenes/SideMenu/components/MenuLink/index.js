import { connect } from 'react-redux';
import { routeSelector } from 'routerSvc';
import MenuLink from './MenuLink';

const isActive = (state, ownProps) => {
    const route = routeSelector(state);
    return route.pathname === ownProps.to;
};

const mapStateToProps = (state, ownProps) => ({
    active: isActive(state, ownProps),
});

export default connect(mapStateToProps)(MenuLink);
