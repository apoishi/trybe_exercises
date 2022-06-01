## Exercises

1. According to the code below, what is the execution order of the commented lines?

2. According to the code below, what is the order of completion of the commented lines?

3. The getPlanet function below prints the planet Mars synchronously. Modify getPlanet so that Mars is printed asynchronously after 4 seconds.

4. Suppose you need to simulate a message sent from the Curiosity robot from Mars to Earth. Curiosity sends the current temperature on Mars to Earth, taking a variable time of up to 5 seconds for it to finish sending. Create the sendMarsTemperature function, which prints the temperature on Mars.

5. Now that you have done the function that sends the temperature of Mars, suppose you manage to send to the Curiosity robot what you want to do, once you have successfully obtained the temperature on Mars. Then, add in the sendMarsTemperature function a callback that contains the actions to be taken on the temperature.

6. Finally, the Curiosity robot has a 60% message sending success rate due to the fact that the robot is already very busy with other operations. Then, add another callback to the sendMarsTemperature function that contains the actions to be taken in case of failure.

7. Write a test that checks the callback of an uppercase function, which transforms the letters of a word into uppercase. Remember to beware of false positives in asynchronous tests.

8. For the next exercise, you will know how is the first day of a Pokémon trainer! In Professor Oak's lab, you are informed that there are three Pokemon available: Bulbasaur, Charmander, and Squirtle. Complete the getPokemonDetails function call so that it prints the details of the pokémon you have chosen to the console. PS: it is possible that Professor Carvalho's system presents errors if the pokémon doesn't exist in the database, so don't forget to handle them too, okay?

9. In order to prevent future trainers from being harmed, Professor Carvalho asked you to help him write tests for the system that distributes pokémons. Create a new .test.js or .spec.js file and copy the code below. Complete the tests for the getPokemonDetails function according to the specification.

10. For this exercise, try to guess the console.log output of the tests below without running them, and see if you understand well how beforeEach and afterEach work.
