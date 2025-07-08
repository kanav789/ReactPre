import { configureStore } from "@reduxjs/toolkit";
import todoReduce from "../feature/slice.jsx";
export const store = configureStore({
  reducer: todoReduce,
});
