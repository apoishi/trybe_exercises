// forEach loops through the array and executes the function passed for each of its values. forEach does not return any value.
// Example - 01 for each - numbers
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// Example - 02 for each - array
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// Example - 03 for each - objects
const emailListInData = [
	'roberta@email.com',
	'paulo@email.com',
	'anaroberta@email.com',
	'fabiano@email.com',
  ];

  const showEmailList = (email) => {
	console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };

  emailListInData.forEach(showEmailList);

// The find function is used to find the first element that satisfies the given condition. The function to be passed must return true or false.
// Example - 01 - find - array

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Alternative way, using arrow function
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// The some and every functions are similar. The first returns true if at least one element of an array satisfies a condition. The second returns true if all elements of an array satisfy a condition.
// Example - 01 - some - array
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// Example - 01 - every - object
const grades = {
	portugues: 'Aprovado',
	matematica: 'Reprovado',
	ingles: 'Aprovado',
  };

  const verifyGrades = (studentGrades) => (
	Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );

  console.log(verifyGrades(grades));

// The sort function allows sorting an array according to some established criteria.
// Example - 01
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// Example - 02
// the sort function sorts numbers according to Unicode, that is the reason
// number 10 is after number 1.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// Example -03 - sort
// To solve the previous problem, we need to solve it in a different way
//The logic is that the function receives, from sort, all the elements of the array, in pairs (element1, element2), and compares them. The format is myArray.sort((element1, element2) => /* function logic */). That is: for array [1, 2, 3, 4], the function will receive (2, 1), (3, 2), (4, 3) as parameters and will sort the array based on its result. If the operation of element1 with element2 gives a negative result, element1 goes backwards. Otherwise, it goes forward to, in descending way, only invert element1 - element2 to element2 - element1.

// Ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

// Descending order
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
