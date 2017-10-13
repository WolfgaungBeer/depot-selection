import { connect } from 'react-redux';
import { routeSelector } from '../../../../services/router';
import MenuItem from './MenuItem';

const mapStateToProps = (state, ownProps) => ({
    active: routeSelector(state).pathname === ownProps.to,
});

export default connect(mapStateToProps)(MenuItem);
