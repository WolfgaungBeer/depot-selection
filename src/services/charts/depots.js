const getDepotChartData = (stocks) => {
    const check = stocks.reduce((acc, value) => acc + value.percent, 0);
    if (check !== 100) throw new Error('all stocks together should have 100%');
    console.log(stocks);

    const result = stocks.reduce((acc, stock) => {
        const x = (stock.x / 100) * stock.percent;
        const y = (stock.y / 100) * stock.percent;
        acc.x += x;
        acc.y += y;
        return acc;
    }, { x: 0, y: 0 });

    return result;
};

export default getDepotChartData;
