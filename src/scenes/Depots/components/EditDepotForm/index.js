import { connect } from 'react-redux';
import { editDepot, depotSelector } from 'depotSvc';
import { push } from 'routerSvc';
import DepotForm from '../DepotForm';

const mapStateToProps = (state, ownProps) => ({
    initialValues: depotSelector(state, ownProps.match.params.id),
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
        const stocks = values.stocks.map(s => s.value);
        dispatch(editDepot({ ...values, stocks }));
        push('/depots/list');
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(DepotForm);
