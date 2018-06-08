// node {value, next} -> node {value, next} -> undefined

//define our linked list node here
//interface: structure that enforces specific prop on an obj
interface LinkedListNode<T> {
    value: T;
    next?: LinkedListNode<T>;
}

/**
 * Linked list for items of type T
 */

class LinkedList<T> {
    //save a ref to the head & tail in a var
    public head?: LinkedListNode<T> = undefined;
    public tail?: LinkedListNode<T> = undefined;

    /**
     * create method to let us add an element
     * Adds an item O(1)
     */
    add(value: T) {
        //create a new linked list node with given value
        const node = {
            value,
            next: undefined,
        };
        //if first node, initialize the head
        if (!this.head) {
            this.head = node;
        }
        //if tail exists, it's next should be this node
        if (this.tail) {
            this.tail.next = node;
        }
        //current tail will now be current node
        this.tail = node;
    }

    /**
     * Returns an iterator over values
     */
    values<T>() {
        //start at head
        let current = this.head;
        //while there is a head
        while (current) {
            //want to yield its valiue
            yield current.value;
            //update our current to the next value
            current = current.next;
        }
    }
    /**
     * FIFO removal in O(1)
     */
    dequeue(): T | undefined {
        //return value only if head exists
        if (this.head) {
            //grab our value
            const value = this.head.value;
            //update head to be the next value
            this.head = this.head.next;
            //if new head is undefined, we're out of items after this dequeue
            if (!this.head) {
                //must update the tail to match
                this.tail = undefined;
            }
            return value;
        }
    }
}

// const list = new LinkedList<number>();
// [1, 2, 4, 8].map(x => list.add(x));
// for (const item of list.values()) {
//   console.log(item)
// }
//1, 2, 4, 8
