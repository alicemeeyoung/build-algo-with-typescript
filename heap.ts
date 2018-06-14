/**
 * smallest item in the tree is the root node
 * complete binary tree
 * can have different looking trees (the only guaranteed same position is the root node)
 *
 * normally implemented as an array
 * [] = 0,1,2,...13
 *
 * left(0) = 7
 * left(1) = 3
 * left(3) = 7
 *
 * left(n) -> self + n items on the right + 1
 * left(n) = n+n+1 = 2n+1
 * right(n) = 2n + 2
 *
 * parentLeft(n) = (n-1)/2
 * parentRight(n) = (n-2)/2
 *
 * 2n+1 => left is odd
 * 2n + 2 => right is even
 *
 * parent(n) =>
 *  n is even => (n-2)/2
 *    else => (n-1)/2
 *
 * Example:
 * need a compare function
 * function compare(a,b) {
 * if(a is less than b by some ordering criterion) {
 *  return -1
 * } else if (a is > b by the ordering criterion) {
 *  return 1
 * } else {
 *  return 0
 * }
 * }
 */

type CompareFn = <T>(a: T, b: T) => number;

/**
 * implement heap data structure
 * heap is used as a priority queue
 * default compre behavior gives min heap
 */

class Heap<T> {
    private data: T[] = [];
    constructor(private compareFn: CompareFn<T>) {}

    private left(nodeIndex: number): number {
        return 2 * nodeIndex + 1;
    }

    private right(nodeIndex: number): number {
        return 2 * nodeIndex + 2;
    }

    private parent(nodeIndex: number): number {
        return nodeIndex % 2 === 0 ? (nodeIndex - 2) / 2 : (nodeIndex - 1) / 2;
    }

    add(element: T) {
        this.data.push(element);
        this.siftUp(this.data.length - 1);
    }

    private siftUp(index: number): void {
        let parent = this.parent(index);
        while (index > 0 && this.compareFn(this.data[parent], this.data[index]) > 0) {
            [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
            index = parent;
            parent = this.parent(index);
        }
    }

    extractRoot(): T | undefined {
        if (this.data.length > 0) {
            const root = this.data[0];
            const last = this.data.pop();
            if (this.data.length > 0) {
                this.data[0] = last;
                this.siftDown(0);
            }
            return root;
        }
    }

    private siftDown(nodeIndex: number): void {
        const minIndex = (left: number, right: number) => {
            if (right >= this.data.length) {
                if (left >= this.data.length) {
                    return -1;
                } else {
                    return left;
                }
            } else {
                if (this.compareFn(this.data[left], this.data[right]) <= 0) {
                    return left;
                } else {
                    return right;
                }
            }
        };
        let min = minIndex(this.left(nodeIndex), this.right(nodeIndex));

        while (min >= 0 && this.compareFn(this.data[nodeIndex], this.data[min]) > 0) {
            [this.data[min], this.data[nodeIndex]] = [this.data[nodeIndex], this.data[min]];
            nodeIndex = min;
            min = minIndex(this.left(nodeIndex), this.right(nodeIndex));
        }
    }

    size() {
        return this.data.length;
    }

    peek(): T | undefined {
        if (this.data.length > 0) {
            return this.data[0];
        } else {
            return undefined;
        }
    }
}

// //for max heap change (a,b) to (b,a)
// const heap = new Heap<number>((a, b) => a -b);
// heap.add(1);
// heap.add(3);
// heap.add(2);

// console.log(heap.extractRoot()); //1
// console.log(heap.extractRoot())//2
