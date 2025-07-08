import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./feature/slice";
function App() {
  const { register, handleSubmit } = useForm();
  const todos = useSelector((state) => state?.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTodo(data));
  };
  todos?.map((todo) => {
    console.log(todo.text);
  });
  const deletefunc = (id) => {
    console.log(id);
    dispatch(removeTodo(id));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>React Redux Form</h1>

          <input type="text" {...register("text")} />

          <input type="submit" />
        </form>
      </div>

      <div style={{ backgroundColor: "red", padding: "20px" }}>
        {todos?.map((todo) => {
          return (
            <div key={todo.id} style={{ color: "white" }}>
              {todo.text}{" "}
              <span
                onClick={() => deletefunc(todo.id)}
                style={{ border: "1px solid black", cursor: "pointer" }}
              >
                dele
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
