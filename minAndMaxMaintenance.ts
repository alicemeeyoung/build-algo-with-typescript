/**
 * you are given numbers slowly
 *
 * add 5, add 2, add 3
 * extract the current min: 2
 * extract: 3
 * add 1
 * extract current min
 */

/**
 * min array data structure
 * maintains a min value
 */

class MinimumArray {
    data: number[] = [];

    add(item: number) {
        //iterate through data
        for (let index = 0; index < this.data.length; index++) {
            //if item's value is > element
            if (item > this.data[index]) {
                //replaces 0 at index with item
                this.data.splice(index, 0, item);
                return;
            }
        }
        this.data.push(item);
    }

    extract(): number | undefined {
        return this.data.pop();
    }
}

//for max swap out the argument in comparison function
class MaximumArray extends MinimumArray {
    add(item: number) {
        for (let index = 0; index < this.data.length; index++) {
            if (item < this.data[index]) {
                this.data.splice(index, 0, item);
                return;
            }
        }
        this.data.push(item);
    }
}

//use classes in sample
const maintain = new MinimumArray();
[1, 4, 2, 5].forEach(x => maintain.add(x));
let curr = maintain.extract();
while (curr !== null) {
    console.log(curr);
    curr = maintain.extract();
}
