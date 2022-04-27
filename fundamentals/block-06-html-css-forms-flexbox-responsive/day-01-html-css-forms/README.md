## Exercises

The exercise today will be to develop a web page with the TrybeTrip form. Develop it into a file called form.html .
1. The form should allow the user to enter the following fields:
* Full name:
	* Limited between 10 and 40 characters.
* Email:
	* Limited between 10 and 50 characters.
* Preferred Destination:
	* 4 options: City, Countryside, Beach, Mountains.
* Why should you be the developer to win the TrybeTrip contest?
	* Limit of 500 characters.
* What is the best date to make your trip?
* Would you like to receive other amazing opportunities offered by Trybe?
* I agree that images from my vacations may be used to advertise future contests.
These will be the main fields used in the next exercises.
2. Create a button to submit the filled information.
Now let's use some javascript, for that create the script.js file and reference it in the HTML.
	* Tip: Put the script tag at the end of your body.
3. Stop the default behavior of the submit button using the preventDefault() method. Our friend Carol Silva told us a little about how to do this, remember?
4. Create a button that clears the information contained in the fields;

## Practices

**Practice - 01**
1. Add the input fields for email and password.
2. Add a checkbox with the text Remind me.
3. Add a button with the text Enter .
4. Add the placeholders Enter your email and Enter your password for the email and password fields.
5. Add the required attribute to the email and password fields.
6. Add the autocomplete="off" attribute to the email field.
7. Add the autofocus attribute to the email field.

**Practice - 02**
1. Add a click event to the element that has the id href . In the event function, implement the .preventDefault() method to prevent the element's default behavior. That is, when you click on the link, nothing should happen.
2. Add a click event on the checkbox element that has the input-checkbox id. In the event function, implement the .preventDefault() method to prevent the element's default behavior. That is, when you click on the box, nothing should happen.
3. Add a keypress event to the input type="text" element that has the input-text id. In the event function, implement the .preventDefault() method so that only the character a (lowercase letter 'a') can be typed in the box. ( tip: to capture the typed key, use event.key )
