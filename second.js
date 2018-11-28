function fearNotLetter(str) {
	let alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
	let strArr = str.split("");
	let alphaSplice = alphabet.splice(alphabet.indexOf(strArr[0]), strArr.length);
	let result =  alphaSplice.filter(x => !strArr.includes(x)).join();
	return result.length > 0 ? result : undefined;
}

console.log(fearNotLetter("jklmnop"));