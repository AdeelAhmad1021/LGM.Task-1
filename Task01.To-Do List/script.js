// Get references to HTML elements
var addButton = document.getElementById("addButton");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Add click event to the add button
addButton.addEventListener("click", addTask);

// Add keypress event to the input field (Enter key)
taskInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    var taskText = taskInput.value;
    if (taskText !== "") {
        var newTask = document.createElement("li");
        newTask.textContent = taskText;

        // Add click event to mark task as completed
        newTask.addEventListener("click", function() {
            this.classList.toggle("completed");
        });

        // Add right-click event to toggle high priority
        newTask.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            this.classList.toggle("high-priority");
        });

        // Add delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&times;";
        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation();
            this.parentNode.parentNode.removeChild(this.parentNode);
        });

        var taskActions = document.createElement("div");
        taskActions.classList.add("task-actions");
        taskActions.appendChild(deleteButton);
        newTask.appendChild(taskActions);

        // Append task to task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = "";
    }
}
