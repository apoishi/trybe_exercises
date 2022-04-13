## Exercises

**Part I**
Using the object below, do the following exercises:
let info = {
  character: 'Daisy',
  origin: 'Donald Duck',
  note: 'Main character's girlfriend in Donald Duck comics',
};
1. Print on the console a welcome message for the character above, including her name. Expected value in the console:
Welcome, Margaret

2. Insert a new property into the object with the key name 'recurring' and the value 'Yes' and then print the object in the console. Expected value in the console:
Copy
{
  character: 'Daisy',
  origin: 'Donald Duck',
  note: 'Main character's girlfriend in Donald Duck comics',
  applicant: 'Yes'
}
3.  Make a for/in that shows all the keys of the object. Expected value in the console:
character
source
note
recurrent

4. Make a new for/in , but now show all the values ​​of the object's keys. Expected value in the console:

Daisy
Donald Duck
Main character's girlfriend in Donald Duck comics
Yes

5. Now, define a second object with the same structure (the same keys) as the first one and the following values: 'Scrooge Uncle', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'The Last MacScrooge', ' Yes'. Then print the values ​​of each object together according to each of the keys. Expected value in the console:
Daisy and Uncle Scrooge
Donald Duck and Christmas on Bear Mountain, Dell's Four Color Comics #178
Main character's girlfriend in Donald Duck and The Last MacScrooge comics
Both recurring // Attention to that last line!

Using the object below, do the following exercises:
let reader = {
  name: 'Julia',
  last name: 'Person',
  age: 21,
  Favorite books: [
    {
      title: 'The Worst Day Ever',
      author: 'Daniela Kopsch',
      publisher: 'Tordesillas',
    },
  ],
};
6. Access the name , surname and title keys, which is inside the favorite books key, and make a console.log in the following format: "Julia Pessoa's favorite book is called 'O Pior Dia de Todos'".

7. Add a new favorite book in the Favoritebooks key, which is an array. Assign to this key an object containing the following information:
{
  title: 'Harry Potter and the Prisoner of Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}

8. Access the keys name and Favoritebooks and make a console.log in the following format: "Julia has 2 favorite books".

**Part II**
Now let's do an exercise that will make it clear how functions with well-defined responsibilities make the code better written.
Array manipulation can be complex at times and that's why JavaScript has several methods for its manipulation. Documentation is always our greatest ally, if you are curious to read more about these methods, click here to access the complete documentation. Don't worry about understanding all the methods, they will be worked on more and more frequently during the course and whenever a new method is needed it will be taught to you.
Spoiler-alert : For the day's exercises, the split , join and reverse methods can be very useful.

1. Create a function that receives a string and returns true if it is a palindrome , or false if it is not.
Palindrome example: macaw .
checkPalindrome('macaw') ;
Expected return: true
checkPalindrome('development') ;
Expected return: false

2. Create a function that receives an array of integers and returns the index of the highest value.
Test array: [2, 3, 6, 7, 10, 1]; .
Expected value in function return: 4 .

3. Create a function that receives an array of integers and returns the index of the smallest value.
Test array: [2, 4, 6, 7, 10, 0, -3]; .
Expected value in function return: 6 .

4. Create a function that receives an array of names and returns the name with the most characters.
Test array: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Expected value in the function return: Fernanda .

5. Create a function that receives an array of integers and returns the integer that is repeated the most.
Test array: [2, 3, 2, 5, 8, 2, 3]; .
Expected value in function return: 2 .

6. Create a function that receives a natural number (non-negative integer) N and returns the sum of all numbers from 1 to N.
Test value: N = 5 .
Expected value in function return: 1+2+3+4+5 = 15 .

7. Create a function that receives a word string and another ending string. Make sure the ending string is the end of the word string. Assume that the ending string will always be shorter than the word string.
Test value: 'trybe' and 'be'
Expected value in function return: true
checkEndWord('trybe', 'be') ;
Expected return: true
checkEndWord('joaofernando', 'fernan');
Expected return: false


## Practices

**Practice -01**
Now let's do some fixing exercises to consolidate the knowledge acquired in the previous video! 😉
1. Create a player object containing the variables listed below.
let name = 'Martha';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

2. Access the name , lastName and age keys and concatenate your information to print a message in the console in the following format: "The player Marta Silva is 34 years old".

3. Add to the object the key bestInTheWorld and assign to this key an array containing the dates in which the player Marta was considered the best in the world.
[2006, 2007, 2008, 2009, 2010, 2018]

4. Access the key bestInTheWorld and make a console.log in the following format: "The player Marta Silva was elected the best in the world for 6 times".

5. Access the medals key and make a console.log in the following format: "The player has 2 gold medals and 3 silver medals".
Now we'll see a variation of the for loop, which makes it easier for us to deal with objects.

**Practice - 02**
1. Using the object below, use for/in and print the message 'Hello xxxxx' on the console for each name, replacing the xxxxx with the name in question.
let names = {
   person1: 'João',
   person2: 'Mary',
   person3: 'Jorge',
};

2. Using the object below, use for/in and print a console.log with the keys and values of this object.
let car = {
   model: 'A3 Sedan',
   manufacturer: 'Audi',
   year: 2020
};

**Practice - 03**
Take each of exercises 1-5 from day 4.1 and make them all functions of the same file. The variables you define at the beginning of each file must be removed and turned into function parameters.
After refactoring your code, verify that it is still working as specified. Test each function with a few different inputs.
