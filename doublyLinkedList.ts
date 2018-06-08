interface DoublyLinkedListNode<T> {
    value: T;
    next?: DoublyLinkedListNode<T>;
    //need to keep track of previous nodes
    prev?: DoublyLinkedListNode<T>;
}

class DoublyLinkedList<T> {
    public head?: DoublyLinkedListNode<T> = undefined;
    public tail?: DoublyLinkedListNode<T> = undefined;

    /**
     * create method to let us add an element
     * Adds an item O(1)
     */
    add(value: T) {
        const node = {
            value,
            next: undefined,
            //initialize the previous value
            prev: undefined,
        };
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
    }

    /**
     * Returns an iterator over values
     */
    values<T>() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
    /**
     * FIFO removal in O(1)
     */
    dequeue(): T | undefined {
        if (this.head) {
            const value = this.head.value;
            this.head = this.head.next;
            if (!this.head) {
                this.tail = undefined;
            } else {
                //if you get a new head, you need to clear the previous
                this.head.prev = undefined;
            }
            return value;
        }
    }

    pop(): T | undefined {
        if (this.tail) {
            const value = this.tail.value;
            //update the tail to point to the previous node
            this.tail = this.tail.prev; //figure out new tail
            if (!this.tail) {
                //clear head
                this.head = undefined;
            } else {
                //update tail to have no next
                this.tail.next = undefined;
            }
            return value;
        }
    }
}
