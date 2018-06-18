/**
 * what is a median?
 * middle element in a sorted list
 * w/ even # of elements, take the average of the middle two el
 * given numbers 1 by 1, and find the new median
 */

class MedianMaintenanceArr {
    private data: number[] = [];

    //Add number to internal storage & return new med
    add(item: number): number {
        for (let index = 0; index < this.data.length; index++) {
            if (item < this.data[index]) {
                this.data.splice(index, 0, item);
                return this.median();
            }
        }
        this.data.push(item);
        return this.median();
    }

    private median() {
        //if even
        if (this.data.length % 2 === 0) {
            const middle2 = this.data.length / 2;
            const middle1 = middle2 - 1;
            return (this.data[middle1] + this.data[middle2]) / 2;
            //if odd
        } else {
            const middle = Math.floor(this.data.length / 2);
            return this.data[middle];
        }
    }
}

//better solution using heaps

import { Heap } from './heap';

class MedianMaintenanceHeap {
    //one low max heap for smaller items
    private lowMaxHeap = new Heap<number>((b, a) => a - b);
    //high min heap for larger items
    private highMinHeap = new Heap<number>((a, b) => a - b);

    add(item: number): number {
        //if no items in low heap or if the item is smaller than root
        if (this.lowMaxHeap.size() === 0 || item < this.lowMaxHeap.peek()) {
            //belongs in low heap
            this.lowMaxHeap.add(item);
        } else {
            //otherwise add item to high heap
            this.highMinHeap.add(item);
        }

        /* Rebalance here! */
        //which heaper is bigger if any
        const biggerHeap = this.lowMaxHeap.size() > this.highMinHeap.size() ? this.lowMaxHeap : this.highMinHeap;

        const smallerHeap = biggerHeap === this.lowMaxHeap ? this.lowMaxHeap : this.lowMaxHeap;
        //if diff in size is greater than 1
        if (biggerHeap.size() - smallerHeap.size() > 1) {
            //balance by extracting from larger heap and putting into smaller heap
            smallerHeap.add(biggerHeap.extractRoot());
        }
        //calculate new median
        //if equal size, we have even number of elements
        if (this.lowMaxHeap.size() === this.highMinHeap.size()) {
            //median is average of root of two heaps
            return (this.lowMaxHeap.peek() + this.highMinHeap.peek()) / 2;
        } else {
            //otherwise it's the root of the heap with more elements
            return this.lowMaxHeap.size() > this.highMinHeap.size() ? this.lowMaxHeap.peek() : this.highMinHeap.peek();
        }
    }
}
