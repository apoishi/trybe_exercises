## Exercises

1. Create a function that returns an object in the form { FullName, email } representing a new person hired. Pass your function as a parameter of the HOF newEmployees to create each person hired under their respective id. Your function must receive as a parameter the full name of the employee and from that automatically generate an email in the format person_name@trybe.com.

2. Develop a HOF that returns the result of a draw. This HOF will generate a random number between 1 and 5 receiving as parameters the number bet and a function that checks if the number bet is equal to the number drawn. The return of your HOF must be a string (Ex: "Try again" or "Congratulations you won").

3. Create a HOF that receives three parameters. The first will be an array of correct answers (Guide), the second will be an array of answers to be verified (answers from the student person) and the third is a function that checks if the answers are correct and counts the final score received by the student. student person. At the end, the HOF must return the total number of correct answers.
When the answer is correct, the score goes up 1 point, when it is incorrect, it goes down 0.5 points, and when there is no answer ("N.A"), the score is not changed.
