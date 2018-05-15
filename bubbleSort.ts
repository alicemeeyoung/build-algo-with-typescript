/**
 * Bubble Sort
 *
 */

const bubbleSort = (array: number[]): number[] => {
	array = array.slice();
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	return array;
};

bubbleSort([4, 3, 2, 1]);
/**
 * [4, 3, 2, 1]
 * [3, 4, 2, 1]
 * [3, 2, 4, 1]
 * [3, 2, 1, 4]
 * [2, 3, 1, 4]
 * [2, 1, 3, 4]
 * [1, 2, 3, 4]
 */

/**
 * optimize to terminate earlier
 * bubble sort is good for few values
 * time: exponential
 * space: O(n) since it's done in place
 */

const bubbleSort2 = (array: number[]): number[] => {
	array = array.slice();
	console.log(array);
	while (true) {
		//terminate when no bubbling happens
		let swapped = false; //keep track of bubbling
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				swapped = true;
				console.log(array);
			}
		}
		if (!swapped) break; //break out when no more swapping needed
	}
	return array;
};
