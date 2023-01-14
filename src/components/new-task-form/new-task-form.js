import React from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

export default class NewTaskForm extends React.Component {
  static propTypes = {
    onTaskCreate: PropTypes.func.isRequired,
  };

  state = {
    label: '',
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onTaskCreate(this.state.label);
    this.setState({
      label: '',
    });
  };

  changeHandler = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.changeHandler}
          value={this.state.label}
        />
      </form>
    );
  }
}
