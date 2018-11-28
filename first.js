const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")
function fearNotLetter(str) {
	let strArr = str.split("");
	let startIndex = alphabet.indexOf(strArr[0]);
	for (let i = startIndex; i < startIndex + strArr.length; i++) {
		if (!strArr.includes(alphabet[i])) {
			return alphabet[i];
		}
	}
}

console.log(fearNotLetter("bcde"));