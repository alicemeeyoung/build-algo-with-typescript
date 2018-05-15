/**
 * Anagram: A word that can be rearranged to produce a new word
 * Given two strings, determine if they are anagrams of each other
 * - 'earth' and 'heart' => true
 * - 'silent' and 'listen' => true
 * - 'foo' and 'bar' => false
 */

//complexity: n!
export function areAnagrams1(s1: string, s2: string): boolean {
	//constraints params to string, must return bool
	for (const permutation of permutations(s1)) {
		if (permutation === s2) return true;
	}
	return false;
}

//n log(n)
export function areAnagrams2(s1: string, s2: string): boolean {
	s1 = s1
		.split('')
		.sort()
		.join();
	s2 = s2
		.split('')
		.sort()
		.join();
	return s1 === s2;
}

//use hash map counts characters between two string
//big O: n; n = number of characters in the string
export function areAnagrams3(s1: string, s2: string): boolean {
	//Map with string keys and number values
	const charCount = new Map<string, number>();
	//iterate through charac in s1
	for (const char of s1.split('')) {
		//set char count, get previous value, and if there's no prev value initialize it to 0 & incrememnt by 1
		charCount.set(char, (charCount.get(char) || 0) + 1);
	}
	//iterate through s2's char
	for (const char of s2.split('')) {
		//if there is not already a key in the char count for this character return false
		if (!charCount.has(char)) return false;
		//otherwise decrement count for this count
		charCount.set(char, charCount.get(char) - 1);
	}
	//get all values of charCount & turn it into an array
	//iterate through array & check if values are 0
	return Array.from(charCount.values()).every(val => val === 0);
}
