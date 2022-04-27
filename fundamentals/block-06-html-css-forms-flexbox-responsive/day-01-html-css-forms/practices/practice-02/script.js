
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
// Exercise - 01
HREF_LINK.addEventListener('click', (event) => {
	event.preventDefault();
});
// Exercise - 02
INPUT_CHECKBOX.addEventListener('click', (event) => {
	event.preventDefault();
});

// Exercise - 03
INPUT_TEXT.addEventListener('keypress', (event) =>{
	const character = event.key;
	if(character !== 'a'){
	event.preventDefault();
	}
});

