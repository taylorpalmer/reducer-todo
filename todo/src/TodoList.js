import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducers";

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.task);
  };

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
        >
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
          <li>{state.todos}</li>
        </ul>
        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
