const initialState = {
  todos: [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1,
  },
];}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        }),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((item) => !item.completed),
      };
    default:
      return state;
  }
};

export { initialState, reducer };
