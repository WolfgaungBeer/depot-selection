import { connect } from 'react-redux';
import { push } from 'routerSvc';
import { depotsSelector, deleteDepot } from 'depotSvc';
import List from './DepotList';

const mapStateToProps = state => ({
    items: depotsSelector(state),
});

const mapDispatchToProps = dispatch => ({
    showCharts: id => push(`/charts/${id}`),
    editItem: id => push(`/depots/edit/${id}`),
    deleteItem: id => dispatch(deleteDepot(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
