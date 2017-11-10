import { connect } from 'react-redux';
import { depotSelector } from 'depotSvc';
import { loadChart, loadStockData, testData, testOptions } from 'chartsSvc';
import BubbleChart from './BubbleChart';

const getData = (state, depot) => {
    const depotStocks = depot.stocks || [];
    const stocksFromState = state.stocks || [];
    const stocks = stocksFromState.filter(s => depotStocks.includes(s.id));
    const stocksWithData = stocks.map(stock => ({ ...stock, data: loadStockData(stock.dataPath) }));
    console.log('STOCKS WITH DATA');
    console.log(stocksWithData);
    // return stocksWithData;
    return undefined;
};

const getOptions = (state, depot) => undefined;

const mapStateToProps = (state, ownProps) => ({
    depot: depotSelector(state, ownProps.depotId),
    loadChart: (canvasId, depot) => {
        const data = getData(state, depot) || testData;
        const options = getOptions(state, depot) || testOptions;
        loadChart(canvasId, 'bubble', data, options);
    },
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(BubbleChart);
