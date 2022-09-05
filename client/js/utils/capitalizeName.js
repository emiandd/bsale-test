
/**
 * It takes a name, makes it all uppercase, splits it into words, capitalizes the first letter of each word, and returns the capitalized name
 * @param name - the name to be capitalized
 * @returns a string with the first letter of each word capitalized.
 */
const capitalizeName = (name) => {
	const nameToUpper = name.toUpperCase();
	const words = nameToUpper.split(' ');
	let wordCapitalized = '';
	let nameCapitalized = '';
	words.map( (word, i) => {
		if(word){
			wordCapitalized = word[0] + word.slice(1).toLowerCase();
			nameCapitalized = `${nameCapitalized} ${wordCapitalized}`;
		}
	})
	return nameCapitalized;
}

export default capitalizeName;