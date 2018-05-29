/**
 * LIFO with O(1) key operations
 */

class Stack<T> {
    //set data to an empty array
    //:T[] return an array
    private data: T[] = [];
    /** adds item in O(1) */
    //void: opposite of 'any'
    push(item: T): void {
        this.data.push(item);
    }
    /**
     * pops the last inserted item in O(1)
     * if there are no more items, it returns undefined
     */

    //return type OR undefined
    pop(): T | undefined {
        return this.data.pop();
    }
    /**
     * returns the number of el in the stack
     */
    size(): number {
        return this.data.length;
    }
}
