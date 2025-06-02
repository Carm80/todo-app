document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // When "add task" button is clicked
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create list element
            const li = document.createElement("li");

            // create checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "task-checkbox";

            // create span for task text
            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;

            // Create delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn"

            // add evetn to delete button
            deleteButton.addEventListener("click", () => {
                const confirmDelete = confirm("Are you sure?")
                if (checkbox.checked) {
                    taskSpan.style.textDecoration = "line-through";
                    taskSpan.style.color = "gray";
                } else {
                    taskSpan.style.textDecoration = "none";
                    taskSpan.style.color = "black";
                }

            });

            // appends element to list
            li.appendChild(checkbox);
            li.appendChild(taskSpan);
            li.appendChild(deleteButton);

            // add li to task list
            taskList.appendChild(li);

            // clear
            taskInput.value = "";


        }

    });
})


















