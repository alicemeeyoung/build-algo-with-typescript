// 2 for loops: time complexity is n^2, where n is length of array
const repeatedItem = <T>(array: T[]): T => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) return array[i];
        }
    }
};

//Using set data structure
// time: n (n = length of array)
const repeatedItem1 = <T>(array: T[]): T => {
    //create a new set
    const set = new Set<T>();
    //loop through each item of array
    for (const item of array) {
        //if item of the same value already exists in the set, return the item
        if (set.has(item)) return item;
        //otherwise, add item to the set and then continue
        else set.add(item);
    }
    throw new Error('No item repetition');
};

const repeated = <number>repeatedItem([1, 2, 3]);
