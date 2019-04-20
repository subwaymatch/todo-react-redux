import React, { Component } from "react";
const classnames = require("classnames");

class TodoItem extends Component {
  render() {
    const { text, isComplete, onMarkDone, onMarkUndone, onDelete } = this.props;

    const todoItemClassNames = classnames({
      "todo-item": true,
      completed: isComplete
    });

    const markAsDoneDiv = (
      <div className="todo-mark-done" onClick={onMarkDone}>
        <button>
          <i className="icon ion-md-checkmark" />
        </button>
      </div>
    );

    const markAsUndoneDiv = (
      <div className="todo-mark-undone" onClick={onMarkUndone}>
        <button>
          <i className="icon ion-md-undo" />
        </button>
      </div>
    );

    return (
      <div className={todoItemClassNames}>
        <div className="todo-text">{text}</div>
        {!isComplete && markAsDoneDiv}
        {isComplete && markAsUndoneDiv}
        <div className="todo-delete" onClick={onDelete}>
          <button>
            <i className="icon ion-md-close" />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
