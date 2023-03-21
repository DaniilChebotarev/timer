import React, { Component } from 'react';

import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    minute: 0,
    second: 0,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onMinuteChange = (e) => {
    this.setState({
      minute: e.target.value,
    });
  };

  onSecondChange = (e) => {
    this.setState({
      second: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label.trim() !== '') {
      this.props.onItemAdded(this.state.label, this.state.minute, this.state.second);
      this.setState({
        label: '',
      });
      e.target.reset();
    }
  };

  render() {
    const { label } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input value={label} className="new-todo" placeholder="Task" autoFocus onChange={this.onLabelChange} />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          onChange={this.onMinuteChange}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          onChange={this.onSecondChange}
        />
        <button type="submit" className="button__form" />
      </form>
    );
  }
}
