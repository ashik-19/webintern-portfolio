let tasks = [];

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

//create
button.addEventListener("click", () => {
    const task = input.value.trim();
    if (!task) return;

    tasks.push(task);
    renderTasks();
    input.value = "";
});
//READ 
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((task,index) => {
        list.innerHTML += `
        <li> ${task}
        <button onclick="deleteTask(${index})">Delete</button>
        </li>`;
    });
}

//delete 
function deleteTask(index) {
    tasks.splice(index,1);
    renderTasks();
}

document.getElementById("taskList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(e.target.textContent);
  }
});
