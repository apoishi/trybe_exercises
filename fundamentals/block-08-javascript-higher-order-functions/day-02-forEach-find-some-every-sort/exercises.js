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

//   Exercise - 01 🚀
  function authorBornIn1947() {
	return books.find((book) => book.author.birthYear === 1947).author.name;
  }

console.log(authorBornIn1947());

// Exercise - 02
function smallerName() {
	let nameBook = books[0].name;
	books.forEach((book) => {
		if(book.name.length < nameBook.length){
			 nameBook = book.name;
		}
	})
	return nameBook;
  }
console.log(smallerName());

// Exercise - 03
function getNamedBook(letterNumbers) {
	return books.find((book) => book.name.length == letterNumbers).name;

  }
  console.log(getNamedBook(26));

// Exercise - 04
const expectedResult4 = false;
function booksOrderedByReleaseYearDesc() {
	return books.sort((a, b) => b.releaseYear - a.releaseYear)
  }
  console.log(booksOrderedByReleaseYearDesc());

//   Exercise - 05 🚀
const expectedResult5 = false;
function everyoneWasBornOnSecXX() {
	return books.every((element) => element.author.birthYear >=1980 && element.author.birthYear <= 1999)
  }
  console.log(everyoneWasBornOnSecXX());

//   Exercise - 06 🚀
const expectedResult6 = true;
function someBookWasReleaseOnThe80s() {
	return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
  }
console.log(someBookWasReleaseOnThe80s());

// Exercise - 07
const expectedResult7 = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
