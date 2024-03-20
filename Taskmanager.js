const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const dueDatePicker = document.getElementById('due-date-picker');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const dueDate = dueDatePicker.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const listItem = document.createElement('li');
  const taskParagraph = document.createElement('p');
  const deleteButton = document.createElement('button');

  taskParagraph.textContent = taskText;
  deleteButton.textContent = 'Delete';

  listItem.appendChild(taskParagraph);

  if (dueDate) {
    const dueDateSpan = document.createElement('span');
    dueDateSpan.textContent = ` (Due: ${dueDate})`;
    listItem.appendChild(dueDateSpan);
  }

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = '';
  dueDatePicker.value = '';

  deleteButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
  });
}
