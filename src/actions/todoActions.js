export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MARK_TODO_AS_DONE = "MARK_TODO_AS_DONE";
export const MARK_TODO_AS_UNDONE = "MARK_TODO_AS_UNDONE";
export const CHANGE_SORT_BY = "CHANGE_SORT_BY";

export const SORT_BY_DATE = "SORT_BY_DATE";
export const SORT_BY_COMPLETION = "SORT_BY_COMPLETION";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text: text
  }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id: id
  }
});

export const markTodoAsDone = id => ({
  type: MARK_TODO_AS_DONE,
  payload: {
    id: id
  }
});

export const markTodoAsUndone = id => ({
  type: MARK_TODO_AS_UNDONE,
  payload: {
    id: id
  }
});

export const changeSortBy = sortBy => ({
  type: CHANGE_SORT_BY,
  payload: {
    sortBy: sortBy
  }
});
