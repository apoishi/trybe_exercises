## Exercises

Read the instructions carefully and do what is asked! We will use this array to perform exercises 1 to 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1. In this first exercise, loop through the array printing all the values ​​it contains with the console.log() function;
2. For the second exercise, add up all the values ​​contained in the array and print the result;
3. For the third exercise, calculate and print the arithmetic mean of the values ​​contained in the array;
* The arithmetic mean is the result of the sum of all elements divided by the total number of elements.
4. With the same code as in the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20";
5. Using for , find the largest value contained in the array and print it;
6. Find out how many odd values ​​there are in the array and print the result. If there is none, print the message: "no odd value found";
7. Using for , find the smallest value contained in the array and print it;
8. Using for , create an array that goes from 1 to 25 and print the result;
9. Using the array created in the previous exercise, print the result of dividing each of the elements by 2 .

## Bonus

For the next two exercises _[read this article] (http://devfuria.com.br/logica-de-programacao/exemplos-na-linguagem-c-do-algoritmo-bubble-sort/)_ and try to understand what is happening in the code below:

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
Based on your reading, consider the numbers array below and do the exercises:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1. Sort the numbers array in ascending order and print their values;
2. Sort the numbers array in descending order and print their values;
3. Now create a new array from the numbers array, without losing it. Each value in the new array must equal the corresponding value in the numbers array multiplied by the next. For example: the first value of the new array should be 45, as it is the multiplication of 5 (first value) and 9 (next value). The second value of the new array should be 27, as it is the multiplication of 9 (second value) and 3 (next value), and so on. If there is no next value, the multiplication must be done by 2. Do this using the for and push method. The result should be the array below:

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

## Practices

**Practice - 01**

1. Get the "Services" value from the menu array:

let menu = ['Home', 'Services', 'Portfolio', 'Links'];
let menuServices = ;

console.log(menuServices);

2. Look for the index of the "Portfolio" value of the menu array:

let menu = ['Home', 'Services', 'Portfolio', 'Links'];
let indexOfPortfolio = ;

console.log(indexOfPortfolio);

3. Add the value "Contact" at the end of the menu array:

let menu = ['Home', 'Services', 'Portfolio', 'Links'];
console.log(menu);

**Practice - 02**

1. Use for to print the elements of the groceryList list with console.log() :

let groceryList = ['Rice', 'Beans', 'Lettuce', 'Watermelon'];

**Practice - 03**

1. Use for/of to print the elements of the names list with console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
