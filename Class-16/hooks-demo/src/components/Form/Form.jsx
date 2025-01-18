import React,{useRef} from 'react';
import styles from './Form.module.css';

const Form = ({addTodo}) => {

    const todoTextInpRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const todoText = todoTextInpRef.current.value;
        if (todoText.trim().length === 0) {
            return;
        }

        addTodo(todoText);
    }

    return (
        <form onClick={formSubmitHandler} className={styles.form}>
            <div>
                <label htmlFor="todo-text"></label>
                <input ref={todoTextInpRef} type="text" id="todo-text" />
            </div>
            <button>Add + </button>
        </form>
    )
}

export default Form
