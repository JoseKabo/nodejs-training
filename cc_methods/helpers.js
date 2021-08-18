//TODO: Helpers.
/**
 * Arrary generator generic with limits.
 * @param {number} length The total number of items to generate. Default is 5
 * @param {number} min The minimum number of random. Default is 2
 * @param {number} max The maximum number of random. Default is 6
 * @return {array} An array with random numbers.
 */
const arrGenerator = (length = 5, min =2, max = 6) => {
    const arrGenerated = [];
    for (let i = 0; i < length; i++) {
        arrGenerated.push(random(min, max));
    }
    return arrGenerated;
}

const random = (min, max) => Math.round(Math.random() * (max - min) + min);

module.exports = {
    arrGenerator
}