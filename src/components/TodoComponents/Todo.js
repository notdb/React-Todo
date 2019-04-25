import React from "react";
import "./Todo.css";
/*
function Todo(props) {
  return (
    <div className="todo">
      <input type="checkbox" className="checked" />
      <label htmlFor="checked">{props.todo.task}</label>
    </div>
  );
}
*/

class Todo extends React.Component {
  constructor() {
    super();
    this.state = { value: 1 };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleSubmit(event) {
    let valued =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    if (event.target.type === "checkbox" && event.target.checked) {
      console.log(valued);
    } else {
      console.log(valued);
    }
  }

  handleChecked(event) {
    console.log(event.target.checked);
    if (this.props.todo.completed === "true") {
      this.props.todo.completed = "false";
      this.setState({ value: (this.state.value += 1) });
    } else {
      this.props.todo.completed = "true";
      this.setState({ value: (this.state.value -= 1) });
    }

    this.props.onBroChecked(this.props.todo.completed);
  }

  render() {
    let className = "bbb";
    console.log(this.state.value);
    if (this.state.value == 0) {
      className = "aaa";
    }

    return (
      <div className="todo">
        <input
          type="checkbox"
          className={className}
          onChange={this.handleChecked}
        />
        <label htmlFor="checked">{this.props.todo.task}</label>
      </div>
    );
  }
}

export default Todo;
