import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

import TasksFilter from '../TasksFilter';

function Footer({ todoCount, filter, onFilterChange, onClear }) {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>

      <TasksFilter filter={filter} onFilterChange={onFilterChange} />

      <button className="clear-completed" onClick={onClear}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;

Footer.defaultProps = {
  onClear: () => {},
  todoCount: 0,
};

Footer.propTypes = {
  onClear: PropTypes.func,
  todoCount: PropTypes.number,
};
