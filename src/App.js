import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";
import "./components/TodoComponents/Todo.css";
import "./index.css";

const todoArray = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];
console.log(todoArray);
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: todoArray,
      newTodo: {
        task: "",
        id: "",
        completed: ""
      }
    };
    this.isThisChecked = this.isThisChecked.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  /*
    isThisChecked(something) {
	if (something==='true') {
	    this.setState({
  */

  isThisChecked(something) {
    console.log(something);
    //this.setState({ value: something });
  }

  removeTodo(event) {
    event.preventDefault();

    let bum = this.state.todoData;
    let rum = bum.filter(function(item) {
      return item.completed !== "true";
    });

    let casablanca = this.setState(
      {
        todoData: rum
      },
      () => {
        console.log(this.state.todoData);
      }
    );
    return casablanca;
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoData: [...this.state.todoData, this.state.newTodo],
      newTodo: {
        task: "",
        id: "",
        completed: ""
      }
    });
    // console.log(todoArray);
  };

  handleChanges = event => {
    console.log(event.target.name + " aaa");
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
    console.log(this.state.todoData);
  };

  render() {
    return (
      <div className="whataaa">
        <h2>Welcome to your Todo App!</h2>
        {/*
        <div className="Todo-List">
          {this.state.todoData.map(todo => (
            <Todo todo={todo} />
          ))}
        </div>
	     */}
        <TodoList
          todoData={this.state.todoData}
          nameID={this.isThisChecked}
          faceID={this.removeTodo}
        />
        {/*   
        <form onSubmit={this.addTodo}>
          <input
            placeholder="yourtodo"
            value={this.state.newTodo.task}
            onChange={this.handleChanges}
            name="yourtodo"
          />
          <button>Add todo</button>
        </form>
	 */}

        <TodoForm newTodo={this.state.newTodo} what={this} />
      </div>
    );
  }
}

export default App;
