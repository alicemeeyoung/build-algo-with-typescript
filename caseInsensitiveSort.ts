//CASE INSENSITIVE SORTING

const words = ['Alpha', 'beta', 'Gamma', 'delta'];

words.sort();
words.forEach(x => console.log(x)); //Alpha, Gamma, beta, delta
// default sort is case sensitive

words.sort((a, b) => a.localeCompare(b));

words.sort((a, b) =>
	a
		.toLowerCase() //convert to lower case & then use localeCompare
		.localeCompare(b.toLowerCase())
);

words.forEach(x => console.log(x)); //Alpha, beta, delta, Gamma
