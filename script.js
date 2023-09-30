const addBtn = document.querySelector("#addBtn");
const mainInput = document.querySelector("#mainInput");
const toDoList =  document.querySelector("#toDoList");
const tableBody = document.querySelector("#tableBody");
const validator = document.querySelector("#validator");
const clearAll = document.querySelector (".ClearAll-icon")
let srNo = 0;



function addTodo() {
    if(mainInput.value !== ""){
        srNo++;
    const list = document.createElement("tr");
    list.innerHTML= `<td>${srNo}.</td> <td>${mainInput.value}</td> <td><button class="btn btn-danger mx-1 del-btn"><img src="assets/delete.svg" alt="" class="" onclick="removeToDo(this)"></button></td>`; 
    tableBody.appendChild(list);
    mainInput.value="";
    mainInput.classList.remove("redBorder");
    validator.textContent=``
}
else{
    mainInput.classList.add("redBorder");
    validator.innerHTML= `<h5 class="validator">Please add task</h5>`;
}
}

function removeToDo(button){
    const row = button.closest("tr");
    row.remove();
}
function clearAllTodos(){
   
    tableBody.innerHTML="";
    srNo = 0;
}
