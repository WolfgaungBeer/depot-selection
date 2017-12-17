import { connect } from 'react-redux';
import { selectedDepotSelector } from 'chartsSvc';
import ChartInfo from './ChartInfo';

const mapStateToProps = state => ({
    selectedDepot: selectedDepotSelector(state),
});

export default connect(mapStateToProps)(ChartInfo);
