import { connect } from 'react-redux';
import { editDepot, depotSelector } from 'depotSvc';
import { push } from 'routerSvc';
import DepotForm from '../DepotForm';

const mapStateToProps = (state, ownProps) => ({
    initialValues: depotSelector(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
        console.log('VALUES');
        console.log(values);
        dispatch(editDepot(values));
        push('/depots/list');
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(DepotForm);
