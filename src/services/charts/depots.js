const getDepotChartData = (stocks) => {
    const result = stocks.reduce((acc, stock) => {
        const x = (stock.x / 100) * stock.percent;
        const y = (stock.y / 100) * stock.percent;
        acc.x += x;
        acc.y += y;
        return acc;
    }, { x: 0, y: 0, r: 10 });

    result.x = result.x.toFixed(2);
    result.y = result.y.toFixed(2);
    return { ...result, stocksInfo: stocks };
};

export default getDepotChartData;
