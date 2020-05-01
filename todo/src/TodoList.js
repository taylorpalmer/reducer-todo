import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducers";

const TodoList = (props) => {
  const [newTodoText, setNewTodoText] = useState("");
  const [state] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setNewTodoText(e.target.value);
  };

  console.log(state);

  return (
    <div className="wrapper">
      <h1>Todo</h1>
      <div className="add-form">
        <input
          className="add-todo"
          type="text"
          name="newTodoText"
          value={newTodoText}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTodoText });
            setNewTodoText("");
          }}
        >
          Add
        </button>
      </div>
      <div className="list">
        <ul>
          {props.todos.map((item) => (
            <li
            className={`todos${item.completed ? " completed" : ""}`}
            key={item.id}
            onClick={() => props.toggle}
          ))}
          <li>state</li>
        </ul>
        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
