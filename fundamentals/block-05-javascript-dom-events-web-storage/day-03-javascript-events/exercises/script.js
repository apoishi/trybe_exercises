function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();

// Exercise - 01
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
	let getDaysList = document.querySelector('#days');

	for (let index = 0; index < dezDaysList.length; index += 1) {
		let day = dezDaysList[index];
		let dayItem = document.createElement('li');

		if (day === 24 | day === 31) {
			dayItem.className = 'day holiday';
			dayItem.innerHTML = day;
			getDaysList.appendChild(dayItem);
		} else if (day === 4 | day === 11 | day === 18) {
			dayItem.className = 'day friday';
			dayItem.innerHTML = day;
			getDaysList.appendChild(dayItem);
		} else if (day === 25) {
			dayItem.className = 'day holiday friday';
			dayItem.innerHTML = day;
			getDaysList.appendChild(dayItem);
		} else {
			dayItem.innerHTML = day;
			dayItem.className = 'day';
			getDaysList.appendChild(dayItem);
		}
	};
};
createDaysOfTheMonth();

// Exercise - 02
function createHolidayButton(buttonName) {
	let buttonContainer = document.querySelector('.buttons-container');
	let newButton = document.createElement('button');
	let newButtonID = 'btn-holiday';

	newButton.innerHTML = buttonName;
	newButton.id = newButtonID;
	buttonContainer.appendChild(newButton);
  };

  createHolidayButton('Feriados');

//   Exercise - 03
function displayHolydays() {
let getHolidayButton = document.querySelector('#btn-holiday');
let getHolydays = document.querySelectorAll('.holiday');
let backgroundColor = 'rgb(238, 238, 238)';
let setNewColor = 'white';

getHolidayButton.addEventListener('click', function() {
	for(let index = 0; index < getHolydays.length; index += 1){
		if(getHolydays[index].style.backgroundColor === setNewColor) {
			getHolydays[index].style.backgroundColor = backgroundColor;
		} else{
			getHolydays[index].style.backgroundColor = setNewColor;
		}
	}
})
};
displayHolydays();

// Exercise - 04
function createFridayButton(buttonName) {
	let buttonContainer = document.querySelector('.buttons-container');
	let newButton = document.createElement('button');
	let newButtonID = 'btn-friday';

	newButton.innerHTML = buttonName;
	newButton.id = newButtonID;
	buttonContainer.appendChild(newButton);
  };

  createFridayButton('Sexta-feira');

// Exercise - 05
function displayFridays(fridaysArray) {
	let getFridayButton = document.querySelector('#btn-friday');
	let fridays = document.getElementsByClassName('friday');
	let newFridayText = 'SEXTOU o/';

	getFridayButton.addEventListener('click', function() {
	for (let index = 0; index < fridays.length; index += 1) {
	  if (fridays[index].innerHTML !== newFridayText) {
		  fridays[index].innerHTML = newFridayText;
	  } else {
		  fridays[index].innerHTML = fridaysArray[index];
		}
	  }
	})
  };

  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);

// Exercise - 06
