//
// select html element $ add listeners
// create $& add todo



// find the element
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const todoLists = document.getElementById("lists");
const messageElement = document.getElementById("message");


// showmessage
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    }, 5000);
}



// deleteTodo
let deleteTodo = (event) => {
    const selectedTodo = event.target.parentElement.parentElement.parentElement;

    todoLists.removeChild(selectedTodo);
    showMessage("todo is deleted", "danger");

    // localStorageTodoDeleted


    let todos = getTodoformLocalstorage();
    todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
    localStorage.setItem("mytodos", JSON.stringify(todos));

}








// createTodo

const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("li-style");
    todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"></i></button> </span>
    `;


    todoLists.appendChild(todoElement);

    const deleteButton = todoElement.querySelector("#deleteButton").addEventListener("click", deleteTodo);

    console.log(todoElement);
}









// getTodoformLocalstorage
const getTodoformLocalstorage = () => {
    return localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")) : [];
}













//addTodo
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;
    console.log(todoInput.value);

    //unique Id
    const todoId = Date.now().toString();
    console.log(todoId);
    createTodo(todoId, todoValue);
    showMessage("todo is created", "success");
    // adding todo localstorage
    const todos = getTodoformLocalstorage();
    todos.push({ todoId, todoValue });
    localStorage.setItem("mytodos", JSON.stringify(todos));

    todoInput.value = "";
}


//loadTodo
const loadTodo = () => {
    const todos = getTodoformLocalstorage();
    todos.map((todo) => createTodo(todo.todoId, todo.todoValue))
};


// adding listener
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodo);
































{
    /* 
    //createTodo

    const createTodo = (todoID, todoValue) => {
    let todoElement = document.createElement("li");
    todoElement.id = todoID;
    todoElement.classList.add("li-style");
    todoElement.innerHTML = `
    <span> ${todoValue}</span>
    <span> <button class="btn" id="deletedButton"> <i class="fa fa-trash" aria-hidden="true"></i>
    </button> </span>
    `;
    console.log(todoElement.targeat.value);
    todoLists.appendChild(todoElement);
};

    */









    /*

//addtodo 
let addTodo = (event) => {
    event.preventDefault();
    // console.log(inputTodo.value);
    let todoValue = inputTodo.value;

//    unique id genaret 

    let todoID = Date.now().toString();
    // console.log(todoID);
    todoCreate(todoID, todoValue);
}

}

*/







    /* 
    //adding listeners
todoForm.addEventListener("submit", addTodo)
    
    */
}