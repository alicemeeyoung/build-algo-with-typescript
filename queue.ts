/**
 * FIFO
 * O(1)
 */

class Queue<T> {
    //empty array 'data'
    private data: T[] = [];
    //push our item into the data array
    enqueue(item: T): void {
        this.data.push(item);
    }
    /* dequeues first item, if no items it returns undefined*/

    dequeue(): T | undefined {
        return this.data.shift(); //wrong O(n) because shift changes the index
    }
}

//using objects as a map (data collection where data is stored in pairs with key and value mapped to that key; eliminates duplicates)
//objects vs. map
//objects: key must be simple types (integer, string, symbols)
//order of elements is not preserved
//map: any data type(obj, array, etc.)
//order of elements is preserved
//instance of object
//create with new syntax
//Object.create is used when
//choose prototype w/o need to define constructor
//{} with no prototypes
//careful using this one

//better implementation to maintain O(1) runtime
class Queue2<T> {
    //create a data obj that takes in teh index as an array
    //Object.create(null) creates an object that doesn't have any methods

    private data: { [index: number]: T } = Object.create(null);
    //keep track of the last you dequeued or enqueued
    private lastDequequedIndex = 0;
    private nextEnquequeIndex = 0;

    /**Enqueue adds to the last */
    enqueue(item: T): void {
        this.data[this.nextEnquequeIndex] = item;
        //for future calls
        this.nextEnquequeIndex++;
    }
    /* dequeues first item, if no items it returns undefined*/

    dequeue(): T | undefined {
        //is the last dequeued index caught up to the next?
        //if so, defaults to undefined
        if (this.lastDequequedIndex !== this.nextEnquequeIndex) {
            const dequeued = this.data[this.lastDequequedIndex];
            delete this.data[this.lastDequequedIndex];
            this.lastDequequedIndex++;
            return dequeued;
        }
    }

    size(): number {
        return this.nextEnquequeIndex - this.lastDequequedIndex;
    }
}
