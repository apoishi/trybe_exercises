function characteres(word) {
let largestWord = word[0];
for ( let index in word){
	if(largestWord.length < word[index].length){
		largestWord = word[index];
	}
}
return largestWord;
}
console.log(characteres(['Maria', 'Fernanda', 'Carol', 'Lia']));

