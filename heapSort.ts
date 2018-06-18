/**
 * 9 4 2 7 5 3
 * sort in ascending order
 * sort => repeated min extraction
 * 2 3 4 5 7 9
 * use heap!
 */

import { Heap, CompareFn } from './heap';

const heapSort = <T>(array: T[], cmp: CompareFn): T[] => {
    //create heap with comparison function
    const heap = new Heap(cmp);
    for (const item of array) {
        //push each item into the heap
        heap.add(item);
    }
    const result: T[] = [];
    //loop
    for (let index = 0; index < array.length; index++) {
        //extract item of heap and put it into result
        result.push(heap.extractRoot());
    }
    return result;
};
