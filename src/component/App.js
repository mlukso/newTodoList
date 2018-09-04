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

  handleIsDone = (index) => {
    const todos = this.state.todos.slice();
    todos[index].done = !todos[index].done;
    this.setState({todos: todos})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.inputValue){
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
}

  handleRemoveItem = (index) => {
    const newListWithoutRemovedItems = this.state.todos.slice();
    newListWithoutRemovedItems.splice(index, 1);
    this.setState({
      todos: newListWithoutRemovedItems
    })
  }

  render() {
    return (
      <div className="App" id="main">
        <h2>My Todo List</h2>
        <Form 
          handleChange = {this.handleChange}
          inputValue = {this.state.inputValue}  
          handleSubmit={this.handleSubmit}
        />
        <List 
          todos={this.state.todos}
          handleIsDone={this.handleIsDone}
          handleRemoveItem={this.handleRemoveItem}
        />
      </div>
    );
  }
}

export default App;
