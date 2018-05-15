export function isPalindrome(str: string): boolean {
	const reverse = str
		.split('')
		.reverse()
		.join('');
	return str === reverse;
}

/**
 * Return true if ANY permutation is a palindrome
 * civic true
 * vicic true - permutation of civic
 * toot true
 * toto true
 * civil false
 */

const isAnyPermutationPalindrome = (str: string): boolean => {
	return permutations(str).some(isPalindrome);
};

const isAnyPermutationPalindrome2 = (str: string): boolean => {
	//create a variable unmatched by instantiating a new Set that contains strings
	//new Set = array with no duplicates
	const unmatched = new Set<string>();
	//iterate through each str character
	str.split('').forEach(char => {
		//if unmatched has the character, delete the character from unmatched
		if (unmatched.has(char)) unmatched.delete(char);
		//if unmatched does not have the character, add the character
		else unmatched.add(char);
	});
	//check size and return a bool
	return unmatched.size <= 1;
};
