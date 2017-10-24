import { connect } from 'react-redux';
import { editStock, stockSelector } from 'stockSvc';
import { push } from 'routerSvc';
import StocksForm from '../StocksForm';

const mapStateToProps = (state, ownProps) => ({
    initialValues: stockSelector(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
        dispatch(editStock(values));
        push('/stocks/list');
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(StocksForm);
