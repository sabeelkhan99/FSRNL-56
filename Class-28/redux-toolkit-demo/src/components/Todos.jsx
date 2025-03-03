import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo} from '../features/todoSlice';

const Todos = () => {

    const inputTodoRef = useRef()

    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const addTodoHandler = () => {
        if (!inputTodoRef.current.value) {
            return;
        }
        dispatch(addTodo(inputTodoRef.current.value));
    }

    return (
        <div>
            <ul>
                <input type="text" ref={inputTodoRef} />
                <button onClick={addTodoHandler}>Add</button>
                {
                    todos.map((todo) => {
                        return <li key={todo.id}>{ todo.task} <span onClick={()=> dispatch(removeTodo(todo.id))}>X</span></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todos
