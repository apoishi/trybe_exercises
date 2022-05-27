const books = [
	{
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		genre: 'Fantasia',
		author: {
			name: 'George R. R. Martin',
			birthYear: 1948,
		},
		releaseYear: 1991,
	},
	{
		id: 2,
		name: 'O Senhor dos Anéis',
		genre: 'Fantasia',
		author: {
			name: 'J. R. R. Tolkien',
			birthYear: 1892,
		},
		releaseYear: 1954,
	},
	{
		id: 3,
		name: 'Fundação',
		genre: 'Ficção Científica',
		author: {
			name: 'Isaac Asimov',
			birthYear: 1920,
		},
		releaseYear: 1951,
	},
	{
		id: 4,
		name: 'Duna',
		genre: 'Ficção Científica',
		author: {
			name: 'Frank Herbert',
			birthYear: 1920,
		},
		releaseYear: 1965,
	},
	{
		id: 5,
		name: 'A Coisa',
		genre: 'Terror',
		author: {
			name: 'Stephen King',
			birthYear: 1947,
		},
		releaseYear: 1986,
	},
	{
		id: 6,
		name: 'O Chamado de Cthulhu',
		genre: 'Terror',
		author: {
			name: 'H. P. Lovecraft',
			birthYear: 1890,
		},
		releaseYear: 1928,
	},
];

// Exercise - 01 🚀
// When returning strings use template literals
// const formatedBookNames = (arr) => arr.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);

// console.log(formatedBookNames(books));

// Exercise -02 🚀
// When returning array of objects, use {}
function nameAndAge(arr) {
	return arr.map((element) => ({ age: element.releaseYear - element.author.birthYear, author: element.author.name })).sort((a, b) => a.age - b.age)
}
// console.log(nameAndAge(books));

// Exercise - 03 🚀
function fantasyOrScienceFiction(arr) {
	return arr.filter((element) => (element.genre === 'Fantasia' || element.genre === 'Ficção Científica'))
}
// console.log(fantasyOrScienceFiction(books));

// Exercise - 04 🚀
// https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
function oldBooksOrdered() {
	const currentYear = new Date().getFullYear();
	return books.filter((element) => (
		currentYear - element.releaseYear > 60
	)).sort((a, b) => a.releaseYear - b.releaseYear);
}
// console.log(oldBooksOrdered());

// Exercise - 05 🚀
function fantasyOrScienceFictionAuthors() {
	return books.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia'))
		.map((element) => element.author.name)
		.sort();
}
console.log(fantasyOrScienceFictionAuthors());

// Exercise - 06 🚀
function oldBooks() {
	const currentYear = new Date().getFullYear();
	return books.
		filter((element) => currentYear - element.releaseYear > 60)
		.map((element) => element.name)
}
// console.log(oldBooks());

// Exercise - 07 🚀
function authorWith3DotsOnName() {
	return books
		.find((element) => element.author.name.split(' ')
			.filter((element) => element.endsWith('.')).length === 3).name;
}
// console.log(authorWith3DotsOnName());

// Or
const authorWith3DotsOnName = () => books
	.find((element) => element.author.name.split(' ')
		.filter((element) => element.endsWith('.')).length === 3).name;

// console.log(authorWith3DotsOnName());
