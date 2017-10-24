import { connect } from 'react-redux';
import { addStock } from 'stockSvc';
import { push } from 'routerSvc';
import StocksForm from '../StocksForm';

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
        dispatch(addStock(values));
        push('/stocks/list');
    },
});

export default connect(null, mapDispatchToProps)(StocksForm);
