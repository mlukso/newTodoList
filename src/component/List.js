import React, { Component } from 'react';

import Task from './Task'
import 'typeface-roboto'

class List extends Component {

    render () {
        return (
            <div className="List">
                {this.props.todos.map((todo, index) => {
                    return (
                        <Task 
                            key={index}
                            index={index}
                            handleIsDone={this.props.handleIsDone}
                            handleRemoveItem={this.props.handleRemoveItem}
                            todo={todo}
                        />
                    )
                })}
            </div>
        )
    }
}

export default List;