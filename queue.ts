/**
 * FIFO
 * O(1)
 */

class Queue<T> {
    private data: T[] = [];

    enqueue(item: T): void {
        this.data.push(item);
    }
    /* dequeues first item, if no items it returns undefined*/

    dequeue(): T | undefined {
        return this.data.shift(); //wrong O(n) because shift mutates
    }
}

//better implementation
class Queue2<T> {
    private data: { [index: number]: T } = Object.create(null);
    private lastDequequedIndex = 0;
    private nextEnquequeIndex = 0;

    enqueue(item: T): void {
        this.data[this.nextEnquequeIndex] = item;
        this.nextEnquequeIndex++;
    }
    /* dequeues first item, if no items it returns undefined*/

    dequeue(): T | undefined {
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
