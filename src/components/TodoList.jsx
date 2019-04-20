import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import {
  SORT_BY_DATE,
  deleteTodo,
  markTodoAsDone,
  markTodoAsUndone
} from "../actions/todoActions";

function mapStateToProps(state) {
  return {
    sortBy: state.todos.sortBy,
    todos: state.todos.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    markTodoAsDone: id => () => dispatch(markTodoAsDone(id)),
    markTodoAsUndone: id => () => dispatch(markTodoAsUndone(id)),
    deleteTodo: id => () => dispatch(deleteTodo(id))
  };
}

class TodoList extends Component {
  render() {
    const {
      todos,
      sortBy,
      markTodoAsDone,
      markTodoAsUndone,
      deleteTodo
    } = this.props;
    let todosSorted =
      sortBy === SORT_BY_DATE
        ? [...todos].sort((a, b) => b.createdAt - a.createdAt)
        : [...todos].sort((a, b) =>
            a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1
          );

    return (
      <div id="todo-list-wrapper">
        {todosSorted.map(item => {
          return (
            <TodoItem
              key={item.id}
              text={item.text}
              isComplete={item.isComplete}
              onMarkDone={markTodoAsDone(item.id)}
              onMarkUndone={markTodoAsUndone(item.id)}
              onDelete={deleteTodo(item.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
