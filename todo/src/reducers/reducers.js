const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() },
      ];
    case "TOGGLE_COMPLETED":
      return state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
      });
    case "CLEAR_COMPLETED":
      return state.filter((item) => !item.completed);
    default:
      return state;
  }
};

export { initialState, reducer };
