/**
 * for 'n' positions, probability of any given item appearing at any given index
 *
 * example:
 * a b c d e
 * c
 * c b
 * c b e
 * c b e a
 * c b e a d
 *
 * [0] 1/n probability
 * [1] (n-1)/n * 1/(n-1) => 1/n
 * [2] (n-1)/n * (n-2)(n-1) * 1/(n-2) => 1/n
 * ...
 * [x] 1/n
 */

//Fisher-Yates Shuffle

import { randomInt } from './randomIntegers';

//function shuffle takes in a array of all types & returns array of all types
const shuffle = <T>(array: T[]): T[] => {
    //make a copy of the input array
    array = array.slice();
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //create a var that chooses ar andom index (use randomInt func from before)
        const randomChoiceIndex = randomInt(i, array.length);
        const temp = array[i];
        array[i] = array[randomChoiceIndex];
        array[randomChoiceIndex] = temp;
    }
    return array;
};
