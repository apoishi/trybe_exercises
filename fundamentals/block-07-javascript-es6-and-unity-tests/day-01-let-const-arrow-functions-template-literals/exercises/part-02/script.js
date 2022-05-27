// Exercise - 01
const factorial = number => {
	let result = 1;

	for (let index = 2; index <= number; index += 1) {
		result *= index;
	}

	return result;
}

console.log(factorial(5));

// Alternative - exercise -01
const factorial2 = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial2(5));

// Exercise - 02
const longestWord = text => {
	let wordArray = text.split(' ');
	let maxLength = 0;
	let result = '';

	for (const word of wordArray) {
		if (word.length > maxLength) {
			maxLength = word.length;
			result = word;
		}
	}

	return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Alternative - exercise -02
const longestWord2 = text => text.split(' ')
	.sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Exercise - 03

// <!DOCTYPE html>
// <body>
//   <div>
//     <span id ="text"></span>
//   </div>
//   <button id="button_test">click aqui!</button>
// </body>
// <script>
let clickCount = 0;
let textToDisplay = document.getElementById("text");

document.getElementById("button_test")
	.addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);
// </script>
// </html>


