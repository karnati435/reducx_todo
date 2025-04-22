import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todolist = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div>
      <h4>Your Todos:</h4>
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} />
        ))
      )}
    </div>
  );
};

export default Todolist;
