const arr = ['foo', 'bar'];
arr.sort();
console.log(arr); //['bar', 'foo']

/**
 * sort will mutate the array
 * fix by annotating as read only
 */

const arr: ReadonlyArray<string> = ['foo', 'bar']; //no longer allows sort on this array
const copy = arr.slice().sort();

const foo = [1, 3, 22];
foo.sort();
console.log(foo); //[1, 22, 3]
console.log(foo.map(x => x.toString()));
['1', '22', '3'];

//parse in comparer func
const foo = [1, 3, 22];
foo.sort(
	(a, b) => a - b
	/**
	 * if a<b return neg number
	 * if a=== b return 0
	 * if a > b return pos number
	 */
);

const movies = [
	{
		name: 'The Shawshank Redemption',
		year: 1994,
	},
	{
		name: 'The Godfather',
		year: 1972,
	},
	{
		name: 'The Godfather II',
		year: 1974,
	},
];

movies.sort((a, b) => a.year - b.year);
console.log(movies.map(movie => movie.name)); //['The Godfather', 'The GodfatherII', 'The Shawshank Redemption']
//for descending order
movies.sort((b, a) => (a.year = b.year)); //O(n logn)
