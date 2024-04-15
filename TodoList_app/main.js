let toDoList = document.querySelector(".todo-list");
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");

let task = document.querySelector(".task");

function addTask(e) {
    if (taskInput.value === "") {
        alert('You need write some task before add');
    } else {
        let i = 1;
        let taskClone = task.cloneNode(true);
        let checkSign = taskClone.firstElementChild;
        let taskOutput = taskClone.children[1];
        let delButton = taskClone.lastElementChild;

        checkSign.id = `${checkSign.id}-${i}`;
        taskOutput.setAttribute("for", checkSign.id)
        i++;

        taskClone.style.display = "flex";

        taskOutput.textContent = taskInput.value;

        toDoList.appendChild(taskClone);

        taskInput.value = "";

        delButton.onclick = function () {
            this.parentElement.remove();
        }

    }
}

addButton.addEventListener("click", addTask);