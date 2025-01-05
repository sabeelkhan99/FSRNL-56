const form = document.querySelector('#form');
const list = document.querySelector('#list');

// TODO
// 1. Organise the below code into class TodoList
// 2. Put all the code in the github repo

function uuid() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const todos = [
    {
        id: uuid(),
        task: "Buy Groceries",
        completed: false
    },
    {
        id: uuid(),
        task: "Learn JS",
        completed: false
    },
    {
        id: uuid(),
        task: "Go to Gym",
        completed: false
    }
];

function refreshTodos() {
    while (list.firstChild) {
        list.firstChild.remove();
    }
    for (let todo of todos) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
    
        li.innerText = todo.task;
        li.append(checkbox);
        list.append(li);
    }
}

function addTodo(todoText) {
    todos.push({ id: uuid(), task: todoText, completed: false });
    refreshTodos();
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const todoText = form.elements[0].value;
    console.log(todoText);
    addTodo(todoText);
});

function init() {
    refreshTodos();
}

init();