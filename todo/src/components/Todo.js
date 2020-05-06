import React from "react";
import "../App.css";

const Todo = (props) => {
  return (
    <div className="wrapper">
      <div
        className={`todo ${props.todo.completed ? "completed" : ""}`}
        onClick={() => props.toggleComplete(props.todo.id)}
      >
        <p>{props.todo.item}</p>
      </div>
    </div>
  );
};

export default Todo;
