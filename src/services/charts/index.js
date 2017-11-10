import fs from 'fs';
import Chart from 'chart.js';
import csvjson from 'csvjson';

export { default as getStockChartData } from './stocks';
export { default as getDepotChartData } from './depots';

export const testData = {
    labels: ['test1', 'test2', 'test3'],
    datasets: [{
        label: 'test',
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        data: [{ x: 1, y: 1, r: 10 }, { x: 2, y: 2, r: 5 }, { x: 1, y: 3, r: 15 }],
    }],
};

export const testOptions = {};

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
