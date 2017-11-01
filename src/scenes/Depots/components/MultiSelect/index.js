import { connect } from 'react-redux';
import { stocksSelector } from 'stockSvc';
import MultiSelect from './MultiSelect';

const mapOptions = (state) => {
    const stocks = stocksSelector(state);
    return stocks.map(stock => ({ value: stock.id, label: stock.token }));
};

const mapStateToProps = state => ({
    options: mapOptions(state),
});

export default connect(mapStateToProps)(MultiSelect);
