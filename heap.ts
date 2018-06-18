/**
 * Heap property: If P is a parent node of C, then the value of node P is < value of node C
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
    //accepts a compare function
    constructor(private compareFn: CompareFn<T>) {}
    //left child node
    private left(nodeIndex: number): number {
        return 2 * nodeIndex + 1;
    }
    //right child node
    private right(nodeIndex: number): number {
        return 2 * nodeIndex + 2;
    }
    //traversal to parent from given node index
    //depends on whether index is even or odd
    private parent(nodeIndex: number): number {
        return nodeIndex % 2 === 0 ? (nodeIndex - 2) / 2 : (nodeIndex - 1) / 2;
    }

    //adds element to heap Olog(n)
    add(element: T) {
        //add to end of array
        this.data.push(element);
        //may be a violation so we'll add a sift up
        //make sure smallest node rises to the top
        this.siftUp(this.data.length - 1);
    }

    //run time complexity: log N
    private siftUp(index: number): void {
        //load the parent
        let parent = this.parent(index);
        //check if each iteration at index is smaller than parent
        while (index > 0 && this.compareFn(this.data[parent], this.data[index]) > 0) {
            //swap with parent
            [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
            //check new item against its parent
            index = parent;
            parent = this.parent(index);
        }
    }

    //retrieves and removes root el of heap Nlog(n)
    //return undefined if heap is empty
    extractRoot(): T | undefined {
        //check that it's not empty
        if (this.data.length > 0) {
            //fetch the root, if you remove the root item, they'll be a hole
            const root = this.data[0];
            //fill the "hole" with the last el - results in min num of array changes
            const last = this.data.pop();
            if (this.data.length > 0) {
                //remove to head of array
                //run the risk of root being bigger than children
                this.data[0] = last;
                //move down with sift down routine
                this.siftDown(0);
            }
            return root;
        }
    }

    //log N
    private siftDown(nodeIndex: number): void {
        //return index containing smaller value
        const minIndex = (left: number, right: number) => {
            //check ranges
            if (right >= this.data.length) {
                if (left >= this.data.length) {
                    //-1 to signal end
                    return -1;
                    //return left child
                } else {
                    return left;
                }
            } else {
                //else compare left and child
                if (this.compareFn(this.data[left], this.data[right]) <= 0) {
                    return left;
                } else {
                    return right;
                }
            }
        };
        let min = minIndex(this.left(nodeIndex), this.right(nodeIndex));
        //switch current node with smaller of its children
        while (min >= 0 && this.compareFn(this.data[nodeIndex], this.data[min]) > 0) {
            //ensure new parent will be the smaller one
            [this.data[min], this.data[nodeIndex]] = [this.data[nodeIndex], this.data[min]];
            nodeIndex = min;
            min = minIndex(this.left(nodeIndex), this.right(nodeIndex));
        }
    }

    //returns number of elements
    size() {
        return this.data.length;
    }

    //looks at its value
    peek(): T | undefined {
        if (this.data.length > 0) {
            //return item at 0th index
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
