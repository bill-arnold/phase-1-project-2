// Get references to the form and list elements
const form = document.querySelector("#add-task-form");
const taskList = document.querySelector("#todo-list ul");

// Add a submit event listener to the form
form.addEventListener("submit", e => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the task title from the input element
  const taskTitle = document.querySelector("#task-title").value;

  // Create a new list item element
  const taskItem = document.createElement("li");

  // Add a class of "completed" if the task is completed
  taskItem.classList.add("completed");

  // Set the innerHTML of the task item to the task title
  taskItem.innerHTML = `
    <span class="task-title">${taskTitle}</span>
    <button class="delete-button">Delete</button>
  `;

  // Append the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the task title input
  document.querySelector("#task-title").value = "";
});

// Add a click event listener to the task list
taskList.addEventListener("click", e => {
  // Get the target element that was clicked
  const target = e.target;

  // If the target is a delete button, delete the task
  if (target.classList.contains("delete-button")) {
    target.parentElement.remove();
  }

  // If the target is the task title, toggle the completed class
  if (target.classList.contains("task-title")) {
    target.parentElement.classList.toggle("completed");
  }
});
