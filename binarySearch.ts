/**
 *
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */

//time: O(n) access all el of array
const binarySearch = (array: number[], element: number): number => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === element) return index;
    }
    return -1;
};

//also O(n)
const binarySearch1 = (array: number[], element: number): number => {
    return array.findIndex(x => x === element);
};

//Olog(n)
const binarySearch2 = (array: number[], element: number, start = 0, end = array.length - 1): number => {
    //base case to terminate recursion
    //if problem space is < 0 terminate
    if (end < start) return -1;
    //divide problem space
    const middle = Math.floor((start + end) / 2);
    //if middle matches element we are searching for, return the middle
    return element === array[middle]
        ? middle
        : element < array[middle] //else check elements less than the middle
            ? binarySearch2(array, element, start, middle - 1) //recurse through first half
            : binarySearch2(array, element, middle + 1, end); //recurse through second half of problem space
};

//keeps cutting problem space in half and checking the middle number
