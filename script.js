const addBtn = document.querySelector("#addBtn");
const mainInput = document.querySelector("#mainInput");
const tableBody = document.querySelector("#tableBody");
const validator = document.querySelector("#validator");
const clearAll = document.querySelector(".ClearAll-icon")
const clearMessage = document.querySelector("#clearMessage");
const toDoTable = document.querySelector("#toDoTable")
let srNo = 0;
function saveAll() {
    const allTodos = JSON.stringify(toDoTable.innerHTML);
    localStorage.setItem("MyToDos", allTodos);
}

function addTodo() {
    if (mainInput.value.trim() !== "") {
        srNo++;
        const list = document.createElement("tr");
        list.innerHTML = `<td>${mainInput.value}</td>
    <td>
    <button class="btn btn-danger mx-1 del-btn rem-btn">
    <img src="assets/delete.svg" alt="Remove" class="" onclick="removeToDo(this)">
</button>
        <button class="btn btn-success mx-1 edit-btn" onclick="editTask(this)">
            <img src="assets/edit.svg" alt="Edit" class="edit-icon">
        </button>
       
    </td>`;
        tableBody.appendChild(list);
        mainInput.value = "";
        mainInput.classList.remove("redBorder");
        validator.textContent = ``
    }
    else {
        mainInput.classList.add("redBorder");
        validator.innerHTML = `<h5 class="validator">Please add task</h5>`;
    }
    clearMessage.style.display = "none";
    saveAll();
}


function removeToDo(button) {
    const row = button.closest("tr");
    row.remove();
    saveAll();
}
function clearAllTodos() {
    if (tableBody.children.length === 0) {
        clearMessage.style.display = "block";
        mainInput.classList.add("redBorder");
    } else {

        tableBody.innerHTML = "";
        clearMessage.style.display = "none";
        mainInput.classList.remove("redBorder");
        saveAll();
    }
}
function editTask(button) {
    const row = button.closest("tr");
    const taskCell = row.querySelector("td:first-child");
    const editBtn = row.querySelector(".edit-icon");

    if (taskCell.contentEditable === "false") {
        taskCell.classList.add("redBorder"); 
        editBtn.src = "assets/done.svg";
        taskCell.contentEditable = true;
        
        taskCell.focus();
        
    } else {

        if (taskCell.textContent.trim() == "") {
            taskCell.classList.add("redBorder"); 
            validator.innerHTML = `<h5 class=validator>Please add Task</h5>`;
            taskCell.focus();
            
        }
        else {
            validator.textContent = ``
            editBtn.src = "assets/edit.svg";
            taskCell.contentEditable = false;
            taskCell.classList.remove("redBorder"); 
            
        }
    }
    saveAll();

}

function loadToDos() {
    const allTodos = JSON.parse(localStorage.getItem("MyToDos"));
    if (allTodos) {
        tableBody.innerHTML = allTodos;
    }
}


loadToDos();