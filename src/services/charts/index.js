import fs from 'fs';
import Chart from 'chart.js';
import csvjson from 'csvjson';
import getStockChartData from './stocks';
import getDepotChartData from './depots';
import getRandomNumberSet from './random';

export * from './actions';
export { default as reducer } from './reducer';

export const loadChart = (canvasId, type, data, options) => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const chart = new Chart(ctx, { type, data, options });
    return chart;
};

export const loadStockData = (path) => {
    const csvData = fs.readFileSync(path, 'utf8');
    const res = csvjson.toObject(csvData);
    return res;
};

export const getChartDataByDepot = (depot) => {
    const stocksData = depot.stocks.map(stock => getStockChartData(stock));

    const variantCount = 100;
    const data = [];

    for (let depot = 0; depot < variantCount; depot++) { // eslint-disable-line
        const percentData = getRandomNumberSet(100, stocksData.length);
        const withPercent = [];
        for (let stock = 0; stock < stocksData.length; stock++) { // eslint-disable-line
            withPercent[stock] = { ...stocksData[stock], percent: percentData[stock] };
        }
        data[depot] = getDepotChartData(withPercent, depot);
    }

    return { depot, data };
};
