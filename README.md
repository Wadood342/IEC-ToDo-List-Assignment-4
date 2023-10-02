# To Do Application
 
LINK TO WEBSITE:  https://wadood342.github.io/IEC-ToDo-List-Assignment-4/           

 HTML (index.html):
 
The HTML structure provides a simple To-Do list application.
It includes an input field to add tasks, buttons to add and clear tasks, and a table to display the tasks.
There are validator messages for input validation and a message for clearing all tasks.

JavaScript (script.js):

•	saveAll(): Saves the To-Do list to local storage as a JSON string.
•	addTodo(): Adds a new task to the To-Do list when the "Add Task" button is clicked. Validates and displays a message if the input is empty.
•	removeToDo(button): Removes a task when the delete button is clicked.
•	clearAllTodos(): Clears all tasks from the list. Displays a message if the list is already clear.

•	editTask(button): 
1.	Allows editing of tasks and validates empty tasks when in edit mode.
2.	When the edit button is clicked, it toggles between "Edit" and "Done" modes.
3.	In "Edit" mode, the task cell becomes editable, and the cursor focus is set on it.
4.	In "Done" mode, the task cell content becomes non-editable, and the changes are saved.
5.	If the edited task cell is empty when switching to "Done" mode, it displays a validator message.
6.	When the validator message is shown, the cursor focus is set on the empty task cell to allow immediate editing.
•	loadToDos(): Loads saved To-Do list data from local storage.

CSS (style.css):

•	Sets a custom font and color scheme for the application.
•	Defines styles for validator messages and input validation.
•	Applies styling to buttons and the table.

