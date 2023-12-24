function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value));
        li.onclick = function () {
            this.parentNode.removeChild(this);
        };

        taskList.appendChild(li);
        taskInput.value = '';
    }
}
