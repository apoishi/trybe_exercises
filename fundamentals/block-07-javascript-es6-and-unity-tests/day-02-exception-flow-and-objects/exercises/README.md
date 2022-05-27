## Exercises

### Part I
The application asks the user to enter two numbers to make a sum. These numbers are entered through the inputs;
When the button is clicked, the sum function is called, capturing the value written in the inputs and performing the operation. Before, it is necessary to convert the value using parseInt, as it gets at the function in string form;
At the end, the sum function prints the value in a paragraph and cleans the inputs so that the user can enter new values.
Apparently everything is working, but the application has no exception flow. That is, if an error occurs, they will not be handled. How about solving this?

🚀 1. Create a custom error that will be called if the user type only a number.
Try running the application with one of the blank values. Notice that the return is not very descriptive?
Use the throw new Error and the try/catch block.
Print the error in the paragraph with id result, so the user knows what happened. Remember to use descriptive errors!
Avoid roles that have many different responsibilities.

🚀 2. Now add another exception, in case the user enters a non-numeric value.
You can check this using the isNan() function.

🚀 3. Did you remember to clear the inputs after the button click? Did you have to repeat code for this? How about refactoring your function using finally?

### Part II
Complete the customerInfo() function so that your return is similar to "Hello Ana Silveira, delivery to: Rafael Andrade, Phone: 11-98763-1416, Rua das Flores, Nº: 389, AP: 701".
Note that the function parameter is already being passed in the function call.

1. Complete the orderModifier() function so that your return is similar to "Hello Luiz Silva, your order total for margherita, pepperoni and Coke Zero is R$50.00."

2. Modify the buyer person's name.

3. Change the total purchase amount to R$50,00

### Part III
1. Create a function to add the night shift to lesson2. This function must have three parameters, namely: the object to be modified, the key that must be added and its value.

2. Create a function to list an object's keys. This function must take an object as a parameter.

3. Create a function to show the size of an object.

4. Create a function to list the values of an object. This function must take an object as a parameter.

5. Create an object named allLessons, which should group all classes through Object.assign. Each key of this new object will be a class, these keys being: lesson1, lesson2 and lesson3.

6. Using the object created in exercise 5, create a function that returns the total number of students in all classes.

7. Create a function that gets the value of the key according to its position in the object.

8. Create a function that checks if the (key/value) pair exists in the function. This function must have three parameters, namely: the object, the key name and the key value.

### Bonus
🚀 1. Create a function to count how many students attended Math classes. Use the object created in exercise 5.
🚀 2. Create a function that should return an object that represents the teacher's report, the classes he or she taught and the total number of students. Use the object created in exercise 5:
