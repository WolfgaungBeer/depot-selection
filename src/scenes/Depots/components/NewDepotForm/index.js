import { connect } from 'react-redux';
import { addDepot } from 'depotSvc';
import { push } from 'routerSvc';
import DepotForm from '../DepotForm';

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
        const stocks = values.stocks.map(s => s.value);
        dispatch(addDepot({ ...values, stocks }));
        push('/depots/list');
    },
});

export default connect(null, mapDispatchToProps)(DepotForm);
