## Exercises

🚀 You will implement a Pokedex in a simplified way!! For those unfamiliar with the Pokemon universe, the Pokedex is an encyclopedia of all pokemons in the wild.

For these exercises, your application needs to show all the pokemons present in the data.js file mentioned above.
You can use imagination to style your application. However, it is mandatory that you implement at least these two components:

Pokemon: as its name says, this component represents a pokemon. This component receives as input an object that contains information regarding a specific pokemon. This component needs to return the following mandatory information to be shown to anyone using the application, this information must be validated using PropTypes:
* pokemon name
* pokemon type;
* average pokemon weight, accompanied by the measurement unit used;
* pokemon image.

Pokedex: This component represents the pokemon encyclopedia. This component receives as input a list of pokemons to be shown on the screen. For each of these incoming pokemons, Pokedex calls the Pokemon component.
