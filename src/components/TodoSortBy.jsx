import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SORT_BY_DATE,
  SORT_BY_COMPLETION,
  changeSortBy
} from "../actions/todoActions";
const classnames = require("classnames");

function mapStateToProps(state) {
  return {
    sortBy: state.todos.sortBy
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSortBy: sortBy => () => dispatch(changeSortBy(sortBy))
  };
}

class TodoSortBy extends Component {
  render() {
    const { sortBy, changeSortBy } = this.props;

    const sortByDateOptionClassnames = classnames({
      option: true,
      active: sortBy === SORT_BY_DATE
    });

    const sortByCompleteOptionClassnames = classnames({
      option: true,
      active: sortBy === SORT_BY_COMPLETION
    });

    return (
      <div id="todo-sort-by-wrapper">
        <div id="label-sort-options">Priority</div>
        <div className="line-separator" />
        <div id="sort-options-wrapper">
          <div
            className={sortByDateOptionClassnames}
            onClick={changeSortBy(SORT_BY_DATE)}
          >
            Recent
          </div>
          <div
            className={sortByCompleteOptionClassnames}
            onClick={changeSortBy(SORT_BY_COMPLETION)}
          >
            Active
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoSortBy);
