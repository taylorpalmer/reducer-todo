import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { reducer, initialState } from "./reducers/reducers";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoList dispatch={dispatch} state={state} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
