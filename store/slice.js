import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        removeTodo: (state, action) => {
            const id = action.payload
            return state.filter(e => e.id !== id)
        }
    }
})

export const { actions, reducer } = todosSlice
export const { addTodo, removeTodo } = actions