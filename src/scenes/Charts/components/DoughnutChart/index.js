import { connect } from 'react-redux';
import { loadChart, selectedDepotSelector } from 'chartsSvc';
import DoughnutChart from './DoughnutChart';

const rand = () => Math.round(Math.random() * 255);

const getData = (selectedDepot) => {
    const data = [];
    const backgroundColor = [];
    const labels = [];
    if (selectedDepot) {
        selectedDepot.stocksInfo.forEach((stock) => {
            data.push(stock.percent);
            backgroundColor.push(`rgba(${rand()}, ${rand()}, ${rand()}, 1)`);
            labels.push(stock.token);
        });
    }
    return { datasets: [{ data, backgroundColor }], labels };
};

const mapStateToProps = (state) => {
    const selectedDepot = selectedDepotSelector(state);
    return {
        selectedDepot,
        loadChart: (canvasId) => {
            const data = getData(selectedDepot);
            return loadChart(canvasId, 'doughnut', data, { events: ['click'] });
        },
    };
};

export default connect(mapStateToProps)(DoughnutChart);
