//time: O n(log n)
//low memory overhead

const quickSort = (array: number[]): number[] => {
	array = array.slice();
	partition(array, 0, array.length);
	return array;
};

const partition = (array: number[], start: number, before: number): void => {
	const length = before - start;
	if (length <= 1) return;

	//pick a pivot and move to the head of array
	const pivotIndex = start + Math.floor(Math.random() * length);
	[array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

	//now first el is pivot
	const pivot = array[start];
	let pivotRank = start;

	// [
	// items less than pivot,
	//  - index for pivot rank
	// items greater than pivot
	// - index for current item
	//remaining items we have yet to see
	// ]
	for (let index = start + 1; index < before; index++) {
		if (array[index] < pivot) {
			pivotRank++;
			[array[index], array[pivotRank]] = [array[pivotRank], array[index]];
		}
	}

	if (pivotRank !== start) {
		[array[pivotRank], array[start]] = [array[start], array[pivotRank]];
	}

	// [
	//   items less than pivot
	//   pivot
	//   itmes greater than pivot
	// ]

	//partition el < pivot
	partition(array, start, pivotRank);
	//partition el > pivot
	partition(array, pivotRank + 1, before);
};
