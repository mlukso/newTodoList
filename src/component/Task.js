import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';



class Task extends Component {
    render() {
        return (
            <div>
                <ListItem
                    dense
                    button                     
                     >
                        <Checkbox           
                            disableRipple
                            onClick={() => 
                                this.props.handleIsDone(this.props.index)}                                 
                        />
                        <ListItemText
                            style={{
                                textDecoration: this.props.todo.done ? 'line-through' : 'none',
                                color: this.props.todo.done ? 'red' : 'none',
                                fontSize: 18,
                        }}
                            primary={this.props.todo.value}
                            />
                        <ListItemSecondaryAction>
                            <IconButton 
                                aria-label="Clear All" 
                                style={{float: 'right'}} 
                                onClick={() => this.props.handleRemoveItem(this.props.index)}>
                                <DeleteIcon />
                            </IconButton>   
                        </ListItemSecondaryAction>
                </ListItem>
            </div>
        )
    }  
};

export default Task;