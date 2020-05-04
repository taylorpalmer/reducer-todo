import Todo from "../components/Todo";

const TodoList = (props) => {
  const toggleComplete = (todo) => {
    props.dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo,
    });
  };

  return (
    <div className="wrapper">
      {props.state.map((todo) => (
        <Todo toggleComplete={toggleComplete} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
