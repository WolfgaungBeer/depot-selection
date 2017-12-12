/* eslint-disable */
const mapValue = (value, inMin, inMax, outMin, outMax) => {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};
/* eslint-enable */

const getDepotChartData = (stocks) => {
    const depotVolume = stocks.reduce((acc, stock) => acc + stock.r, 0);

    const result = stocks.reduce((acc, stock) => {
        const x = (stock.x / 100) * stock.percent;
        const y = (stock.y / 100) * stock.percent;
        const r = (stock.r / 100) * stock.percent;
        acc.x += x;
        acc.y += y;
        acc.r += r;
        return acc;
    }, { x: 0, y: 0, r: 0 });

    result.x = result.x.toFixed(2);
    result.y = result.y.toFixed(2);
    result.r = mapValue(result.r, 0, depotVolume, 0, 25);

    return { ...result, stocksInfo: stocks };
};

export default getDepotChartData;
