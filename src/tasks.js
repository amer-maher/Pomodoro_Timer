export function addTaskToDropdown(task) {
    const taskSelect = document.getElementById('taskSelect');
    const option = document.createElement('option');
    option.text = task;
    taskSelect.add(option);
}

export function removeTaskFromDropdown(task) {
    const taskSelect = document.getElementById('taskSelect');
    for (let i = 0; i < taskSelect.options.length; i++) {
        if (taskSelect.options[i].text === task) {
            taskSelect.remove(i);
            break;
        }
    }
}
