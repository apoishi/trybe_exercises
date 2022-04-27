function handleSubmit(event) {
	event.preventDefault();
}
// Para que a página não recarregue ao clicar no botão enviar, temos que colocar o botão dentro do window.onload
window.onload = function () {
	const clearBtn = document.querySelector('#clear-btn');
	clearBtn.addEventListener('click', clearFields);
	const submitBtn = document.querySelector('#submit-btn');
	submitBtn.addEventListener('click', handleSubmit);
};

function clearFields() {
	const formElements = document.querySelectorAll('input');
	const textArea = document.querySelector('textarea');
	for (let index = 0; index < formElements.length; index += 1) {
		const userInput = formElements[index];
		userInput.value = '';
		userInput.checked = false;
	}
	textArea.value = '';
}

