import { connect } from 'react-redux';
import { push } from 'routerSvc';
import { stocksSelector, deleteStock } from 'stockSvc';
import List from './StocksList';

const mapStateToProps = state => ({
    items: stocksSelector(state),
});

const mapDispatchToProps = dispatch => ({
    editItem: item => push(`/stocks/edit/${item.id}`),
    deleteItem: id => dispatch(deleteStock(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
