import React from "react";
import App from "../../App";

function TodoForm(props) {
  return (
    <form>
      <input
        placeholder="yourtodo"
        value={props.newTodo.task}
        onChange={props.what.handleChanges}
        name="yourtodo"
      />
      {/*
      <input
        placeholder="todoid"
        value={props.newTodo.id}
        onChange={props.what.handleChanges}
        name="todoid"
      />
      <input
        placeholder="todocompleted"
        value={props.newTodo.completed}
        onChange={props.what.handleChanges}
        name="todocompleted"
      />
	   */}
      <button onClick={props.what.addTodo}>Add todo</button>
      <button onClick={props.what.removeTodo}>Remove completed</button>
    </form>
  );
}

export default TodoForm;
