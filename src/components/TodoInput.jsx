import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text))
  };
}

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.inputVal || this.state.inputVal === "") {
      return;
    }

    this.props.addTodo(this.state.inputVal);

    this.setState({
      inputVal: ""
    });
  }

  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    });
  }

  render() {
    return (
      <div id="todo-input-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.handleChange}
            placeholder="What do you need to do?"
          />
          <button type="submit">
            <i className="icon ion-md-return-left" />
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TodoInput);
