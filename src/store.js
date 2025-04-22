import { createStore } from "redux";

const initial = {
  todo: [],
  nextId: 1,
};

function todoReducer(state = initial, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = { id: state.nextId, title: action.payload.title };
      return {
        ...state,
        todo: [...state.todo, newTodo],
        nextId: state.nextId + 1,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload.id),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todo: state.todo.map((x) =>
          x.id === action.payload.id ? { ...x, title: action.payload.title } : x
        ),
      };

    default:
      return state;
  }
}

const store = createStore(todoReducer);

export default store;
