import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TasksFilter.css';

export default class TasksFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'selected' : '';
      return (
        <button className={`${clazz}`} key={name} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      );
    });

    return (
      <ul className="filters">
        <li>{buttons}</li>
      </ul>
    );
  }
}

TasksFilter.defaultProps = {
  onFilterChange: 'all',
};
TasksFilter.propTypes = {
  onFilterChange: PropTypes.func,
};
