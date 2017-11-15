import { connect } from 'react-redux';
import { depotSelector } from 'depotSvc';
import { loadChart, loadStockData, getChartDataByDepot, setSelectedDepot } from 'chartsSvc';
import BubbleChart from './BubbleChart';

let savedChartData = null;

const getData = (depot, stocksFromState) => {
    const depotStocks = depot.stocks || [];
    const stocks = stocksFromState.filter(s => depotStocks.includes(s.id));
    const stocksWithData = stocks.map(stock => ({ ...stock, data: loadStockData(stock.dataPath) }));
    const depotWithStocks = { ...depot, stocks: stocksWithData };
    const chartData = getChartDataByDepot(depotWithStocks);
    savedChartData = chartData;
    return {
        datasets: [{
            label: chartData.depot.name,
            backgroundColor: chartData.data.map(() => 'rgba(255, 99, 132, 0.2)'),
            borderColor: chartData.data.map(() => 'rgba(255, 99, 132, 1)'),
            data: chartData.data,
        }],
    };
};

const getOptions = setSelected => ({
    events: ['click'],
    onClick: (event, data) => {
        const index = data[0]._index; // eslint-disable-line
        setSelected(savedChartData.data[index]);
    },
});

const mapStateToProps = (state, ownProps) => ({
    depot: depotSelector(state, ownProps.depotId),
    stocks: state.stocks || [],
});

const mapDispatchToProps = dispatch => ({
    setSelectedDepot: depot => dispatch(setSelectedDepot(depot)),
});

const mergeProps = (stateProps, dispatchProps) => Object.assign({}, {
    loadChart: (canvasId) => {
        const { depot, stocks } = stateProps;
        const data = getData(depot, stocks);
        const options = getOptions(dispatchProps.setSelectedDepot);
        return loadChart(canvasId, 'bubble', data, options);
    },
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(BubbleChart);
