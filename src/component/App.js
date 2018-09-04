import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {

  state = {
    inputValue: "",
    todos: []
  }

  handleChange = (e) => {
    this.setState({
        inputValue: e.target.value
    })
  }

  handleClick = (index) => {
    const todos = this.state.todos.slice();
    todos[index].done = !todos[index].done;
    this.setState({todos: todos})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const newTodos = this.state.todos.slice();
    newTodos.push(newTodo);
    this.setState({
      todos: newTodos,
      inputValue: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My Todo List</h2>
        <Form 
          handleChange = {this.handleChange}
          inputValue = {this.state.inputValue}  
          handleSubmit={this.handleSubmit}
        />
        <List 
          todos={this.state.todos}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
