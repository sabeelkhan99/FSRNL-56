import React, {useEffect} from 'react'
import Form from '../Form/Form';
import classes from './TodoApp.module.css';
import { v4 as uuid } from 'uuid';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';

const TodoApp = () => {

    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')
    const [todos, setTodos] = useState(initialTodos);
    const [count, setCount] = useState(0);

    const addTodo = (task) => {
        setTodos((prevState) => [...prevState, { id: uuid(), task: task, completed: false }]);
    }

    const toggleMarkCompleted = (id) => {
        setTodos((prevState) => prevState.map((todo)=> {
                return todo.id === id ? { ...todo, completed: !todo.completed } : todo
        }));
    }

    // This will be executed for each re-render 
    useEffect(() => {
        console.log('1. Without dependency array');   
    })

    // This will be executed after the first render
    useEffect(() => {
        console.log('2. empty dependency array');   
    }, [])
    

    // when todos changes
    useEffect(() => {
        console.log('3. todos as dependency');   
        window.localStorage.setItem('todos', JSON.stringify(todos));
        return () => {
            console.log('performing cleaning up');
        }
    }, [todos])
    
    // when count changes
    useEffect(() => {
        console.log('4. count as dependency');   
    }, [count])
    

    //when count or todos changes
    useEffect(() => {
        console.log('5. count or todos as dependency');   
    },[count, todos])


    return (
        <div className={classes["todo-app"]}>
            <h1 onClick={()=> setCount(count+1)}>Hooks Demo: { count }</h1>
            <Form addTodo={addTodo}/>
            <TodoList todos={todos} toggleMarkCompleted={toggleMarkCompleted} />
        </div>
    )
}

export default TodoApp
