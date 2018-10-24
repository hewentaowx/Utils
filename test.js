// const isInt = num => num % 1 === 0;

// console.log(isInt(1));
// console.log(isInt(1.8));
// console.log(isInt(-11));

function isIsomorphic(firstString, secondString) {

	// Check if the same length. If not, they cannot be isomorphic
	if (firstString.length !== secondString.length) return false;

	const letterMap = {};

	for (let i = 0; i < firstString.length; i++) {
		const letterA = firstString[i];
		const letterB = secondString[i];
		// console.log('letterA--->>', letterA, 'letterB--->>>', letterB);
		console.log('letterMap[letterA]===>>>>', letterMap[letterA]);
		console.log('letterMap===>>', letterMap);
		if (letterMap[letterA] === undefined) {
			letterMap[letterA] = letterB;
		} else if (letterMap[letterA] !== letterB) {
			// console.log('aaa--->>', letterMap[letterA], 'bbbbb---->>', letterB);
			return false;
		}
	}
	return true;
}
// console.log(isIsomorphic('egg', 'add'));
// console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('eag', 'egg'));
