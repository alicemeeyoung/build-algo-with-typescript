//time complexity: 1, 2, 3...n-1 O(n^2)
//space: O(n)

const insertionSort = (array: number[]): number[] => {
	array = array.slice();
	console.log(array);
	for (let i = 1; i < array.length; i++) {
		const current = array[i];
		console.log({ section: array.slice(0, i), current });
		let j = i - 1; //j = number we are comparing against
		while (j >= 0 && array[j] > current) {
			array[j + 1] = array[j]; //slide to the right
			j--;
		}
		array[j + 1] = current;
	}
	return array;
};

insertionSort([4, 3, 2, 1]);
/**
 * [4, 3, 2, 1]`
 * {section: [4], current: 3}
 * {section: [3, 4], current: 2}
 * {section: [2, 3, 4], current: 1}
 * [1, 2, 3, 4]
 */
