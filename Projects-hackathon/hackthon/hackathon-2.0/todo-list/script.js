const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskBtn = document.getElementById("add-task-btn");
const editBox = document.getElementById("edit-box");
const editInput = document.getElementById("edit-input");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

addTaskBtn.addEventListener("click", addTask);
listContainer.addEventListener("click", handleTodoActions);
submit.addEventListener("click", submitEdit);
cancel.addEventListener("click", () => {
  editBox.classList.add("hidden");
});
function addTask() {
  if (inputBox.value === "") {
    alert("Please enter your task..");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `<span>${inputBox.value}</span>
                <div class="action">
                    <button class="done">&#10003</button>
                    <button class="edit">Edit</button>
                    <button class="delete">\u00d7</button>
                </div>
    `;
    listContainer.appendChild(li);
  }
  inputBox.value = "";
}

function handleTodoActions(e) {
  const target = e.target;
  const todoItem = target.closest("li");

  if (target.classList.contains("done")) {
    todoItem.classList.toggle("span");
  } else if (target.classList.contains("edit")) {
    editTodoItem(todoItem);
  } else if (target.classList.contains("delete")) {
    todoItem.remove();
  }
}
function editTodoItem(todoItem) {
  editBox.classList.remove("hidden");
  editInput.value = todoItem.querySelector("span").textContent;
  currentEditItem = todoItem;
}

function submitEdit() {
  if (currentEditItem) {
    currentEditItem.querySelector("span").textContent = editInput.value;
    editBox.classList.add("hidden");
    currentEditItem = null;
  }
}
