import React from "react";
import App from "../../App";

function TodoForm(props) {
  return (
    <form onSubmit={props.what.addTodo}>
      <input
        placeholder="yourtodo"
        value={props.newTodo.task}
        onChange={props.what.handleChanges}
        name="yourtodo"
      />
      <button>Add todo</button>
    </form>
  );
}

export default TodoForm;
