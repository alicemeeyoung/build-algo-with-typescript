/**
 * Return a random int between
 * @param start inclusive
 * @param before exclusive
 */

const randomInteger = (start: number, before: number) => {
    return start + Math.floor(Math.random() * (before - start));
};

//random number between 2 values MDN:
const randomNum = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

//random integer between 2 values MDN:
const randomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
