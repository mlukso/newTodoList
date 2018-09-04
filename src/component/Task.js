import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="Task">
                <ul>
                    <li
                    style={{
                        textDecoration: this.props.todo.done ? 'line-through' : 'none',
                        color: this.props.todo.done ? 'red' : '#61DAFB'
                }}>
                    {this.props.todo.value}
                <button style={{float: 'right'}} onClick={() => 
                    this.props.handleRemoveItem(this.props.index)}>{'X'}
                </button>                    
                <button style={{float: 'left'}} onClick={() => 
                    this.props.handleIsDone(this.props.index)}>{this.props.todo.done ? 'undo' : '✓'}
                </button>
                </li>
                </ul>
            </div>
        )
    }
}

export default Task;