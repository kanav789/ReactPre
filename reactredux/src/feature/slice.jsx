import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const idToRemove = action.payload;
      console.log(`Removing todo with id: ${idToRemove}`, action);
      state.todos = state.todos.filter((todo) => todo.id !== idToRemove);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
