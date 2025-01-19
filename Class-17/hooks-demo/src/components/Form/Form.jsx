import React,{useRef, useState} from 'react';
import styles from './Form.module.css';
import useInput from '../../hooks/use-input';

const Form = ({addTodo}) => {

    const todoTextInpRef = useRef();
    const [value, takeInput] = useInput();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const todoText = todoTextInpRef.current.value;
        if (todoText.trim().length === 0) {
            return;
        }

        addTodo(todoText);
        console.log(value);
    }

    return (
        <form onClick={formSubmitHandler} className={styles.form}>
            <div>
                <label htmlFor="todo-text"></label>
                <input onChange={(event)=> takeInput(event)} ref={todoTextInpRef} type="text" id="todo-text" />
            </div>
            <button>Add + </button>
        </form>
    )
}

export default Form
