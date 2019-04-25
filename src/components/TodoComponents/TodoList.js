// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// need a way to keep the state of the TodoList in memory
// change todolist from a function to a class to gain state management
// we'll also probably need a super and constructor for this and state.
// need to figure out how to pull the state in and manipulate it with some methods

import React from "react";
import Todo from "./Todo.js";
import "./Todo.css";

/*
const TodoList = props => {
    return <div className="todo-list">
	{props.todoData.map(todo => (
	    <Todo 
	</div>;
}
*/
/*
function TodoList(props) {
  return (
    <div className="Todo-List">
      {props.todoData.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

*/

class Todolist extends React.Component {
  constructor() {
    super();
    this.state = { value: "1" };
    // this.isThisChecked = this.isThisChecked.bind(this);
  }

  render() {
    return (
      <div className="Todo-List">
        {this.props.todoData.map(todo => (
          <Todo
            todo={todo}
            onBroChecked={this.props.nameID}
            passingThru={this.props.faceID}
            key={todo.id}
          />
        ))}
      </div>
    );
  }
}

export default Todolist;
