import { startTimer, pauseTimer, resetTimer } from './timer.js';
import { addTaskToDropdown, removeTaskFromDropdown } from './tasks.js';

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('setting').addEventListener('click', resetTimer);
document.getElementById('addTask').addEventListener('click', addTask);
document.getElementById('removeTask').addEventListener('click', removeTask);

export function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTable = document.getElementById('taskTableBody');

    if (taskInput.value.trim() === '') return; 

    const row = document.createElement('tr');

    const taskCell = document.createElement('td');
    taskCell.textContent = taskInput.value;

    const removeCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = '❌';
    removeButton.classList.add('remove-task');
    removeButton.onclick = () => {
        row.remove();
        removeTaskFromDropdown(taskInput.value);
    };

    removeCell.appendChild(removeButton);
    row.appendChild(taskCell);
    row.appendChild(removeCell);
    taskTable.appendChild(row);

    addTaskToDropdown(taskInput.value);

    taskInput.value = ''; 
}

export function removeTask() {
    const taskTable = document.getElementById('taskTableBody');
    const lastRow = taskTable.lastElementChild;

    if (lastRow) {
        const taskValue = lastRow.cells[0].textContent;
        lastRow.remove();
        removeTaskFromDropdown(taskValue);
    }
}
