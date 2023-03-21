import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import Timer from '../Timer/Timer';
import './Task.css';

export default class Task extends Component {
  state = {
    isEdit: false,
    text: this.props.label,
  };

  onEdit = () => {
    this.setState((state) => ({
      isEdit: !state.isEdit,
    }));
  };

  render() {
    const { id, onDeleted, onToggleCompleted, completed, date, second, minute } = this.props;

    const { isEdit, text } = this.state;

    let classNames = 'view';

    if (completed) {
      classNames += ' completed';
    }

    if (isEdit) {
      return (
        <input
          autoFocus
          className="editing"
          value={text}
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            });
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              this.setState({
                isEdit: !isEdit,
              });
            }
          }}
        />
      );
    }

    return (
      <div className={classNames}>
        <input className="toggle" type="checkbox" checked={completed} onChange={onToggleCompleted} />
        <label>
          <span className="description" onClick={onToggleCompleted} onKeyDown={onToggleCompleted}>
            {text}
          </span>
          <Timer second={Number(second)} minute={Number(minute)} />
          <span className="created">{`created ${formatDistanceToNow(date)} ago`}</span>
        </label>
        <button className="icon icon-edit" onClick={this.onEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}

Task.defaultProps = {
  onToggleCompleted: () => {},
  onDeleted: () => {},
};

Task.propsTypes = {
  onToggleCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
};
