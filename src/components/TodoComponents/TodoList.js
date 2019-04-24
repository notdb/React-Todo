// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js";
/*
const TodoList = props => {
    return <div className="todo-list">
	{props.todoData.map(todo => (
	    <Todo 
	</div>;
}
*/
function TodoList(props) {
  return (
    <div className="Todo-List">
      {props.todoData.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
