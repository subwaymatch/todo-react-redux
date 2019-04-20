import {
  ADD_TODO,
  DELETE_TODO,
  MARK_TODO_AS_DONE,
  MARK_TODO_AS_UNDONE,
  CHANGE_SORT_BY,
  SORT_BY_DATE
} from "../actions/todoActions";

const initialState = {
  latestId: 0,
  sortBy: SORT_BY_DATE,
  todos: [
    {
      id: 0,
      text: "Get more milk",
      isComplete: false,
      createdAt: Date.now()
    }
  ]
};

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newId = state.latestId + 1;

      return Object.assign({}, state, {
        latestId: newId,
        todos: [
          ...state.todos,
          {
            id: newId,
            text: action.payload.text,
            isComplete: false,
            createdAt: Date.now()
          }
        ]
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(item => item.id !== action.payload.id)
      });
    case MARK_TODO_AS_DONE:
      return Object.assign({}, state, {
        todos: state.todos.map(item => {
          if (item.id === action.payload.id) {
            item.isComplete = true;
          }

          return item;
        })
      });
    case MARK_TODO_AS_UNDONE:
      return Object.assign({}, state, {
        todos: state.todos.map(item => {
          if (item.id === action.payload.id) {
            item.isComplete = false;
          }

          return item;
        })
      });
    case CHANGE_SORT_BY:
      return Object.assign({}, state, {
        sortBy: action.payload.sortBy
      });
    default:
      return state;
  }
}

export default todos;
