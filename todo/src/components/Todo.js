import React from "react";

const Todo = (props) => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;
