const mainInput = document.querySelector("#mainInput");
const addBtn = document.querySelector("#addBtn");
const toDoList = document.querySelector("#toDoList");
const validator = document.querySelector("#validator")

function addTodo () {
    if( mainInput.value !== ""){
    const list = document.createElement("li")
    list.innerHTML = `<div class="d-grid gap-2 d-md-flex justify-content-md-end">${mainInput.value} <button class="btn btn-primary me-md-2" type="button">Button</button>  </div>`;
    toDoList.appendChild(list);
// console.log(list);
    mainInput.value=""
    validator.textContent=""
}
    else{
    validator.innerHTML=`<h5>Please provide a data.</h5>`
   }  
    
    

}

// const addBtn = document.querySelector("#addBtn");
// const mainInput = document.querySelector("#mainInput")
// const toDoList = document.querySelector("#toDoList")

// function addTo(){
//     const li = document.createElement('li');
    
//     li.innerHTML = `<div> <p> ${mainInput.value}<button type="button" class="btn btn-primary my-3">Remove</button> </p></div>`;
//     toDoList.appendChild(li);
    
//     console.log(li)
// }











































