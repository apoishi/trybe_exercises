## Exercises

In today's exercises, you will do fifteen small programs. They all work with conditional logic ( if/else and switch/case ), arithmetic operators ( + , - , * , / , % ) and logical operators ( > , < , && , || ). So that you can run your codes, we recommend using the Code Runner extension, you can see more about it in the content we made about using VS Code.

1. Make five programs, one for each basic arithmetic operation. Your program must have two constants, a and b , defined at the beginning with the values ​​that will be operated on. Make programs for:

* Addition (a + b)
* Subtraction (a - b)
* Multiplication (a * b)
* Division (a / b)
* Module (a % b)

2. Write a program that returns the greater of two numbers. At the beginning of the program, define two constants with the values ​​to be compared.

3. Write a program that returns the largest of three numbers. Define at the beginning of the program three constants with the values ​​to be compared.

4. Write a program that, given a value defined in a constant, returns "positive" if that value is positive, "negative" if it is negative, and "zero" otherwise.

5. Write a program that defines three constants with the values ​​of the three interior angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise. If any angle is invalid, the program should return an error message.
* For the angles to be a valid triangle, the sum of the three must be 180 degrees.
* An angle is considered invalid if it does not have a positive value.

6. Write a program that takes the name of a chess piece and returns the moves it makes.
* As a challenge, make the program work whether it is given a part name with capital letters or with lowercase letters, without increasing the number of conditionals.
* As a hint, you can search for a function that makes a string all lower case (lower case).
* If the passed piece is invalid, the program must return an error message.
* Example: bishop (bishop) -> diagonals (diagonals)

7. Write a program that converts a grade given in percentage (from 0 to 100) into grades A to F. Follow these rules:
* Percentage >= 90 -> A
* Percentage >= 80 -> B
* Percentage >= 70 -> C
* Percentage >= 60 -> D
* Percentage >= 50 -> E
* Percentage < 50 -> F
* The program should return an error message and terminate if the grade passed is less than 0 or greater than 100.

8. Write a program that defines three numbers in constants and returns true if at least one of the three is even. Otherwise, it returns false .
* Bonus: use only one if .

9. Write a program that defines three numbers in constants and returns true if at least one of the three is odd. Otherwise, it returns false .
* Bonus: use only one if .

10. Write a program that starts with two values ​​in two different constants: the cost of a product and its selling price. From the values, calculate how much profit (sales value minus the cost of the product) the company will have when selling one thousand of these products.
* Please note that the cost of the product is subject to a 20% tax.
* Your program should also issue an error message and terminate if any of your input values ​​are less than zero.
* The product profitability is the result of subtracting the sale value by the cost of the same, and the 20% tax is also part of the cost value.
	* TotalCostValue = CostValue + taxAboutCost
	* profit = salesAmount - TotalCostValue (product profitability)

11. A person who works with a formal contract in Brazil has the INSS and IR deducted from his gross salary. Write a program that, given a gross salary, calculates the net amount to be received.
The notation for a salary of R$1500.10, for example, should be 1500.10. For tax bands, use the following references:
**INSS (National Social Security Institute)**
* Gross salary up to BRL 1,556.94: 8% rate
* Gross salary from BRL 1,556.95 to BRL 2,594.92: 9% rate
* Gross salary from BRL 2,594.93 to BRL 5,189.82: rate of 11%
* Gross salary above BRL 5,189.82: maximum rate of BRL 570.88

**IR (Income Tax)**
* Up to BRL 1,903.98: exempt from income tax
* From BRL 1,903.99 to BRL 2,826.65: rate of 7.5% and installment of BRL 142.80 to be deducted from tax
* From BRL 2,826.66 to BRL 3,751.05: 15% rate and installment of BRL 354.80 to be deducted from tax
* From BRL 3,751.06 to BRL 4,664.68: rate of 22.5% and installment of BRL 636.13 to be deducted from tax
* Above BRL 4,664.68: rate of 27.5% and installment of BRL 869.36 to be deducted from the tax.

**Example:** A person has a gross salary of R$ 3,000.00. The calculation will be:
* The gross salary is between R$2,594.93 and R$5,189.82, so your rate for INSS is 11%. The INSS will be 11% of BRL 3,000, that is, BRL 330.00.
* To find out the base salary, subtract the INSS rate from the gross salary: R$ 3,000.00 - R$ 330.00 = R$ 2,670.00.
* To get the IR amount, we have a salary (the INSS has already been deducted) between R$ 1,903.99 and 2,826.65, the rate being then 7.5%, with a portion of R$ 142.80 to be deducted from the tax. So we have:
	* R$ 2,670.00: salary with INSS already deducted;
	* 7.5%: income tax rate;
	* R$ 142.80 installment to be deducted from the tax.
* Doing the math, we have: (7.5% of BRL 2,670.00) - BRL 142.80 = BRL 57.45
* The last calculation to obtain the net salary is BRL 2,670.00 - BRL 57.45 (base salary - IR amount) = BRL 2,612.55.
Result: R$ 2,612.55.
**Tip:** how about identifying the rates with explanatory name variables?

## Practices

**Practice - 01**
1. Create a constant called myName and give it your name (Example: Carolina).
2. Create a constant called birthCity and assign it your hometown.
3. Create a variable called birthYear and assign it the year you were born.
4. Use console.log() to print out the constants and variables you created.
5. Change the value assigned to the birthYear variable to 2030. Do a console.log(birthYear) again to see what happens!
6. Change the value assigned to the birthCity constant. Do a console.log(birthCity) again! Could you explain why we get an error message? 🤔

**Practice - 02**
1. Create a constant called base and a variable called height and assign their respective values: 5 and 8.
2. Create a constant called area and assign to it the result of multiplying the base by the height. **Tip:** remember to always use console.log() to print variables and check the results of operations!
3. Create a constant called perimeter and assign to it the sum of all sides of the rectangle.

**Practice - 03**
1. Create a constant that receives the grade of a candidate in a technical challenge, and assigns to it a value between 1 and 100;
2. Implement a logic that checks whether the candidate has passed, failed, or is on the waitlist. To do this, consider the following information:
	* If the grade is greater than or equal to 80, print "Congratulations, you were approved!"
	* If the grade is less than 80 and greater than or equal to 60, print "You are on our waiting list"
	* If the grade is less than 60, print "You failed"
3. Create a conditional structure using if , else if and else to create your algorithm, and the logical operators that apply to each situation.
4. Change the grade value to verify that the conditions you implemented work;

**Practice - 04**
1. Create a constant called "currentHour" that takes a number between 4 and 24 of your choice, to * represent the hours of the day.
2. Create a variable called "message" which is initially an empty string.
3. Implement conditionals so that:
* If the time is greater than or equal to 22, enter "We shouldn't eat anything, it's bedtime" in the "message" variable.
* If the time is greater than or equal to 18 and less than 22, enter "Rango da Noite, let's have dinner :D" in the variable "message".
* If the time is greater than or equal to 2 pm and less than 6 pm, enter "Shall we make a cake for breakfast?" in the "message" variable.
* If the time is between 11 am and 2 pm, enter "Lunch time!!!" in the "message" variable.
* If the time is between 4 and 11, enter "Hmmm, smell of freshly brewed coffee" in the "message" variable.
4. Now print the message variable outside of your conditions.
5. Create a variable called "weekDay" that takes the string "Wednesday".
6. Implement conditionals so that:
* If our "weekDay" variable is "Monday", "Tuesday", "Wednesday", "Thursday" or "Friday", print "Yay, another day of learning at Trybe >: D".
* If it's a weekend day, print "FINALLY, well deserved rest Yay".
7. Try changing the string value or even building your own algorithm. This subject is very important for your learning :).

**Practice - 05**
1. Create a variable to store the candidate's status in the selection process, which can be: 'approved' , 'list' or 'disapproved' ;
2. Create a conditional structure with the switch/case that will print the messages from the previous exercise if the candidate's status is 'passed' , 'listed' or 'failed' . By default, print the 'not applicable' message.
