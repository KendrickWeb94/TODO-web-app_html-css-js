// Function to delete a task
function deleteTask(taskText) {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter(task => task !== taskText);
    saveTasksToLocalStorage(updatedTasks);
    displayTasks();
}

// Function to create a task list item element
function createTaskListItem(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask('${taskText}')">Delete</button>
    `;
    return li;
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const tasks = getTasksFromLocalStorage();

    if (!tasks.includes(taskText)) {
        tasks.push(taskText);
        saveTasksToLocalStorage(tasks);
        taskInput.value = "";
        const newTaskListItem = createTaskListItem(taskText);
        taskList.appendChild(newTaskListItem);
    } else {
        alert("Task already exists!");
    }
}

// Function to get tasks from local storage
function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = getTasksFromLocalStorage();

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const taskListItem = createTaskListItem(task);
        taskList.appendChild(taskListItem);
    });
}

// Initial display of tasks
displayTasks();


function clearLocalStorage() {
    localStorage.clear();
    alert("Local storage has been cleared.");
}
