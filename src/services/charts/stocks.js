const prepareData = (data) => {
    const sorted = data.sort((a, b) => {
        const dateA = new Date(a.Date);
        const dateB = new Date(b.Date);
        return dateA - dateB;
    });

    return sorted.filter((period) => {
        const { Open, Close } = period;
        return (Open !== 'null') && (Close !== 'null');
    });
};

const getYearChunks = (data) => {
    const result = [[]];
    let index = 0;
    let referenceYear = new Date(data[0].Date).getFullYear();

    for (let i = 0; i < data.length; i++) {
        const currentYear = new Date(data[i].Date).getFullYear();
        if (currentYear > referenceYear) {
            referenceYear = new Date(data[i].Date).getFullYear();
            index++;
            result[index] = [];
        }

        result[index].push(data[i]);
    }

    return result.filter(i => i.length === 12);
};

const getYearYields = (data) => {
    const yearChunks = getYearChunks(data);
    return yearChunks.map((year) => {
        const open = year[0].Open;
        const close = year[year.length - 1].Close;
        const yearYieldPercent = ((close / open) - 1) * 100;
        return yearYieldPercent;
    });
};

const getY = (yearYields) => {
    const meanValue = yearYields.reduce((acc, value) => acc + value, 0);
    const n = 1 / yearYields.length;
    return n * meanValue;
};

const getX = (yearYields) => {
    const yValue = getY(yearYields);

    const n = 1 / yearYields.length;
    const value = yearYields.reduce((acc, val) => {
        const i = val - yValue;
        return acc + (i ** 2);
    }, 0);

    const xValue = Math.sqrt(n * value);
    return xValue;
};

const getStockChartData = (stock) => {
    const { data } = stock;
    const preparedData = prepareData(data);
    const yearYields = getYearYields(preparedData);
    return {
        id: stock.id,
        token: stock.token,
        name: stock.name,
        x: getX(yearYields),
        y: getY(yearYields),
    };
};

export default getStockChartData;
