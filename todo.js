let tasks = [];
let updateIndex = -1;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') return;

    if (updateIndex === -1) {
        // Adding a new task
        tasks.push(taskValue);
    } else {
        // Updating an existing task
        tasks[updateIndex] = taskValue;
        document.getElementById('updateButton').style.display = 'none';
        updateIndex = -1;
    }

    taskInput.value = '';
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="editTask(${index})">Edit</button>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index];
    document.getElementById('updateButton').style.display = 'inline-block';
    updateIndex = index;
}

function updateTask() {
    addTask(); // Reuse the addTask function to handle updates
}
