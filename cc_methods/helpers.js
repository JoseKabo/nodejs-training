//TODO: Helpers.
const arrGenerator = (length = 5) => {
    const arrGenerated = [];
    for (let i = 0; i < length; i++) {
        arrGenerated.push(random(2, 6));
    }
    return arrGenerated;
}

const random = (min, max) => Math.round(Math.random()) * (max - min) + min;

module.exports = {
    arrGenerator
}