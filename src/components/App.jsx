import React, { Component } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoSortBy from "./TodoSortBy";

class App extends Component {
  render() {
    return (
      <div id="app">
        <TodoInput />
        <TodoList />
        <TodoSortBy />
      </div>
    );
  }
}

export default App;
