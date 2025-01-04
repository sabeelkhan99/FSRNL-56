const form = document.querySelector('#form');
const list = document.querySelector('#list');


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
]

function addTodo(todoText) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    console.log(checkbox);
    li.innerText = todoText;
    li.append(checkbox);
    
    list.append(li);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const todoText = form.elements[0].value;
    console.log(todoText);
    addTodo(todoText);
});