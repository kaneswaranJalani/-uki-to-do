const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateCounter() {
  const completed = tasks.filter(t => t.completed).length;
  taskCounter.textContent = `Completed: ${completed} | Uncompleted: ${tasks.length - completed}`;
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.priority;

    const checkbox = Object.assign(document.createElement('input'), { type: 'checkbox' });
    checkbox.addEventListener('change', () => removeTask(task.id));

    const span = document.createElement('span');
    span.textContent = task.text;

    li.append(checkbox, span);
    taskList.appendChild(li);
  });
  updateCounter();
}

function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ id: Date.now(), text, priority: priorityInput.value, completed: false });
    taskInput.value = '';
    priorityInput.value = 'low';
    saveAndRender();
  }
});

renderTasks();
