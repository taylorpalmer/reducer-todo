import React, { useState, useReducer } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { initialState, reducer } from "./reducers/reducers";

function App() {
  const [newTodoText, setNewTodoText] = useState("");
  const [state] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setNewTodoText(e.target.value);
  };

  return (
    <div className="App">
      <TodoList todos={state.todos} />
    </div>
  );
}

export default App;
