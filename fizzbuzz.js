/**
 * Write a program that prints the integers from 1 to 100 (inclusive)
 * But:
 *  - for multiples of three, print Fizz (instead of number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz(instead of the number)
 */

for (let index = 1; index < 101; index++) {
	if (index % 3 === 0 && index % 5 === 0) {
		console.log('FizzBuzz');
	} else if (index % 3 === 0) {
		console.log('Fizz');
	} else if (index % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(index);
	}
}

//do multiple detection math once and remove console log duplication

for (let index = 1; index < 101; index++) {
	const isFizz = index % 3 === 0;
	const isBuzz = index % 5 === 0;
	let result;

	if (isFizz && isBuzz) {
		result = 'FizzBuzz';
	} else if (isFizz) {
		result = 'Fizz';
	} else if (isBuzz) {
		result = 'Buzz';
	} else {
		result = index;
	}
	console.log(result);
}

//more functional

for (let index = 1; index < 101; index++) {
	const isFizz = index % 3 === 0;
	const isBuzz = index % 5 === 0;
	isFizz && isBuzz ? 'FizzBuzz' : isFizz ? 'Fizz' : isBuzz ? 'Buzz' : index;
	console.log(result);
}
