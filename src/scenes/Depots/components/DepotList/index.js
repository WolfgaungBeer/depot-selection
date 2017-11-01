import { connect } from 'react-redux';
import { push } from 'routerSvc';
import { depotsSelector, deleteDepot } from 'depotSvc';
import List from './DepotList';

const mapStateToProps = state => ({
    items: depotsSelector(state),
});

const mapDispatchToProps = dispatch => ({
    editItem: item => push(`/depots/edit/${item.id}`),
    deleteItem: id => dispatch(deleteDepot(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
