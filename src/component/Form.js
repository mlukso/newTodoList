import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends Component {

  render() {
      return (
          <div>
          <form
            onSubmit={(e) => this.props.handleSubmit(e)}>
            <TextField
              label='Add a todo...'
              onChange={(e) => this.props.handleChange(e)}
              value={this.props.inputValue}
            />
            </form>
          </div>
      )
  }

}

export default Form;