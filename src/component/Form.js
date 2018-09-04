import React, {Component} from 'react';

class Form extends Component {

  render() {
      return (
          <div ref="Form" >
          <form className="form-inline" 
            onSubmit={(e) => this.props.handleSubmit(e)}>
            <input
              ref="itemName" 
              className="form-control"
              placeholder='type something...'
              onChange={(e) => this.props.handleChange(e)}
              value={this.props.inputValue}
            />
            </form>
          </div>
      )
  }

}

export default Form;