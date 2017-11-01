import { connect } from 'react-redux';
import { addDepot } from 'depotSvc';
import { push } from 'routerSvc';
import DepotForm from '../DepotForm';

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
        console.log('VALUES');
        console.log(values);
        dispatch(addDepot(values));
        push('/depots/list');
    },
});

export default connect(null, mapDispatchToProps)(DepotForm);
