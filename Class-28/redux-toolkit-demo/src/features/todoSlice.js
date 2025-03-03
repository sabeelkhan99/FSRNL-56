import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id: nanoid(), task:'Learn Swimming'}]
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload
            }

            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer