import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers/reducers";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>Todo</h1>
      <div>
        <input type="text"></input>
        <button onClick={() => }>Add</button>
      </div>
      <div>
        <p>{}</p>
        <button></button>
      </div>
    </div>
  );
};

export default TodoList;
