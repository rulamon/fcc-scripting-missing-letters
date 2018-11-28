const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function fearNotLetter(str) {
	let strArr = str.split("");
	for (let i = alphabet.indexOf(strArr[0]); i < alphabet.length; i++) {
		if (!strArr.includes(alphabet[i])) {
			return alphabet[i];
		}
	}
}

console.log(fearNotLetter("abce"));