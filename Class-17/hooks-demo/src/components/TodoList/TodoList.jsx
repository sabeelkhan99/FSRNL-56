import React from 'react';
import Todo from '../Todo/Todo';
import classes from './TodoList.module.css';

const TodoList = ({todos, toggleMarkCompleted}) => {
  return (
    <div>
        <ul className={classes["todo-list"]}>
            {
                  todos.map((todo) => {
                      return <Todo key={todo.id} todo={todo} toggleMarkCompleted={ toggleMarkCompleted} />
                })      
            }  
        </ul>
    </div>
  )
}

export default TodoList
