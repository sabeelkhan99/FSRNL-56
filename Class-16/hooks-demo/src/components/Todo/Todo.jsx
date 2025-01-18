import React from 'react';
import classes from './Todo.module.css';

const Todo = ({ todo, toggleMarkCompleted }) => {

    const markCompletedHandler = () => {
        toggleMarkCompleted(todo.id);
    }

    return (
        <li className={`${classes.todo} ${todo.completed ? classes.checked: ''}`}>
            {todo.task}
            <input onChange={markCompletedHandler} type='checkbox' defaultChecked={todo.completed} />
        </li>
    )
}

export default Todo
