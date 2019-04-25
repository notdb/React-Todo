import React from "react";
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
    } else {
      this.props.todo.completed = "true";
    }

    this.props.onBroChecked(this.props.todo.completed);
  }

  render() {
    return (
      <div className="todo">
        <input
          type="checkbox"
          className="checked"
          onChange={this.handleChecked}
        />
        <label htmlFor="checked">{this.props.todo.task}</label>
      </div>
    );
  }
}

export default Todo;
