import React, { useReducer } from "react";

const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 1,
};

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export { initialState, reducer };
