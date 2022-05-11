## Exercises

Practicing test implementation
You will implement several tests in different contexts in order to consolidate the mechanics and also the way of thinking about tests.
Copy the already implemented functions and develop the tests. Separate functions and tests into different files to avoid any kind of problem.
Create the files with the respective function name. Ex: sum.js and sum.test.js

🚀 1. The function sum(a, b) returns the sum of parameter a with b
Test if sum(4, 5) returns 9
Test if sum(0, 0) returns 0
Test if sum function throws an error when parameters are 4 and "5"(string 5)
Test if the error message is "parameters must be numbers" when calling sum(4, "5")

🚀 2. The myRemove(arr, item) function receives an array arr and returns a copy of this array without the item element if it exists in the array
Check if calling myRemove([1, 2, 3, 4], 3) returns the expected array
Check if calling myRemove([1, 2, 3, 4], 3) does not return array [1, 2, 3, 4]
Check if calling myRemove([1, 2, 3, 4], 5) returns the expected array

🚀 3. The myFizzBuzz(num)function takes a number num and returns "fizzbuzz" if the number is divisible by 3 and 5, returns "fizz" if it is divisible only by 3, returns "buzz" if divisible only by 5, returns the number itself if it is not divisible by 3 or 5 and returns false if num is not a number
Make a call with a number divisible by 3 and 5 and check if the return is as expected
Make a call with a number divisible by 3 and check if the return is as expected
Make a call with a number divisible by 5 and check if the return is as expected
Make a call with a number that is not divisible by 3 or 5 and check if the return is as expected
Make a call with a parameter that is not a number and check if the return is as expected

In Block 4 you developed a project to test your knowledge of Javascript and programming logic: Playground functions. In the following exercises, you will work with tests for some functions that you have created! Take the opportunity to refactor them and use all the resources we've learned so far, such as Higher Order Functions and Javascript ES6 features.

🚀 4. For the encode and decode functions create the following tests in Jest:
Test if encode and decode are functions;
For the encode function test whether the vowels a, e, i, o, u are converted to 1, 2, 3, 4 and 5, respectively;
For the decode function test if the numbers 1, 2, 3, 4 and 5 are converted into the vowels a, e, i, o, u, respectively;
Test if the other letters/numbers are not converted for each case;
Test if the string that is returned by the functions has the same number of characters as the string passed as a parameter.

🚀 5. The techList function receives as parameters an array containing a list of technologies and a string with a name. For each technology in the array the function creates, in alphabetical order, an object.
Implement the techList function from the given tests. Try refactoring the function you created for this project! It is important never to change tests or variables already written in the code.


🚀 6. The hydrate function receives a string in the form "drink number", and returns the suggestion of how many glasses of water you should drink to hydrate. For every drink, you should have a glass of water to avoid having a hangover. Implement the hydrate function from the given tests. Try refactoring the function you created for the Playground Function project! It is important never to change tests or variables already written in the code.

### Bonus

🚀 1. Are you ready for a challenge?! In this exercise, you will practice test-driven development by implementing:
The function;
Tests for this function;
Consider the data below. You must create a function that receives two parameters: the id of the employee and the information available about him (firstName, lastName, specialties). You must also create the tests for this function. Your function should then return the results of the search for the id for that employee and the information queried. If the id is not in the staff, your function should return the error "Unidentified ID". If the information to be accessed does not exist, the function should return the error "Information unavailable".
