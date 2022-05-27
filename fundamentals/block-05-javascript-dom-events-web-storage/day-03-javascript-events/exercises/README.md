##Exercises

🚀 1. The dezDaysList array contains the last two days of November and the days of the month of December. Develop a function that dynamically creates each calendar day and adds them as children of the <ul> tag with ID "days". Note that the 29th and 30th of November are in the array as they represent Sunday and Monday respectively.
The days must be contained in a <li> tag, and all must have the day class. Ex: <li class="day">3</li>
The 24th, 25th and 31st are holidays and, in addition to the day class, they must also contain the holiday class. Ex: <li class="day holiday">24</li>
The 4th, 11th, 18th and 25th are Friday. They must contain the day class and the friday class. Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

🚀 2. Implement a function that takes the string "Holidays" as a parameter and dynamically creates a button with the name "Holidays".
Add to this button the ID "btn-holiday".
Add this button as child of <div> tag with class "buttons-container".

🚀 3. Implement a function that adds to the "Holidays" button a "click" event that changes the background color of the days that have the "holiday" class.
It is interesting that this button also has the inverse logic. When clicked again it returns to the initial configuration with the color "rgb(238,238,238)".

🚀 4. Implement a function that takes the string "Friday" as a parameter and dynamically creates a button with the name "Friday".
Add to this button the ID "btn-friday".
Add this button as child of <div> tag with class "buttons-container".

🚀 5. Implement a function that adds to the "Friday" button a "click" event that modifies the text displayed on days that are Friday.
It is interesting that this button also has the inverse logic. When clicked again it returns to the initial configuration displaying the days.

🚀 6. Implement two functions that create a "zoom" effect. When hovering the mouse pointer on a day of the month in the calendar, the text for that day should enlarge, and when the mouse pointer leaves the day, the text should return to its original size.
Tip - Property: event.target.

🚀 7. Implement a function that adds a custom task to the calendar. The function must receive as a parameter the string with the name of the task (eg "cook") and dynamically create an element with the <span> tag containing the task.
The created element must be added as a child of the <div> tag that has the "my-tasks" class.

🚀 8. Implement a function that adds a colored caption to the task created in the previous exercise. This function must receive a string ("color") as a parameter and dynamically create a <div> tag element with the task class.
The color parameter must be used as the background color of the created <div>.
The created element must be added as a child of the <div> tag that has the "my-tasks" class.

🚀 9. Implement a function that adds an event that, when clicking on the element with the <div> tag referring to the color of your task, assigns the task selected class to this element, that is, when your task has the task class selected, it will be selected .
When clicking on the element again, its class should go back to being just a task, that is, this task is no longer a selected task.

🚀 10. Implement a function that adds an event that, when clicking on a day of the month in the calendar, assigns this day the color of the caption of your selected task.
When you click again on the day with the legend color, its color should return to the initial setting rgb(119,119,119).

##Bonus

Implement a function that, when typing an appointment in the "COMPROMISSOS" text box, adds the item to the "MEUS COMPROMISSOS" list by clicking the "ADD" button.
If no characters are entered in the input field, the function should return an alert with an error message when clicking "ADICIONAR".
When pressing the "enter" key the event should also be triggered.
