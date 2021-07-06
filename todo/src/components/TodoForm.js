import React, { useState } from "react";

const TodoForm = (props) => {
  const [newTask, setNewTask] = useState("");

  const changeHandler = (event) => {
    setNewTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.dispatch({
      type: "ADD_TODO",
      payload: newTask,
    });
    setNewTask("");
  };

  const clearHandler = (event) => {
    event.preventDefault();
    props.dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  return (
    <form>
      <input onChange={changeHandler} type="text" name="todo" value={newTask} />
      <button onClick={submitHandler}>Add Task</button>
      <button onClick={clearHandler}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
