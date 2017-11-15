/* eslint-disable */

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const shuffle = (a) => {
    const clone = [...a];
    for (let i = clone.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
};

const getRandomNumberSet = (max, count) => {
    const randomNumbers = [];
    for (let i = 0; i < count - 1; i++) {
        randomNumbers[i] = getRandomNumber(1, max / count);
    }
    const total = randomNumbers.reduce((acc, value) => acc + value, 0);
    randomNumbers[count - 1] = max - total;
    return shuffle(randomNumbers);
};

export default getRandomNumberSet;
